// Copyright (c) 2026 CastGuidance PCB Toolkit Developer. All rights reserved.
// SPDX-License-Identifier: LicenseRef-CastGuidance-PCB-Toolkit-EULA

// Avalonia.Browser bootstrap: loads the .NET runtime, then hands control
// to the C# Program.Main, which calls StartBrowserAppAsync("out") to
// mount the Avalonia visual tree onto the <div id="out"> element in
// index.html.
import { dotnet } from './_framework/dotnet.js';

const is_browser = typeof window != "undefined";
if (!is_browser) {
    throw new Error("Avalonia.Browser bootstrap expected to run in a browser context.");
}

// Tiny helper invoked from C# via [JSImport]. Used by BrowserUrlLauncher
// to open laminate manufacturer datasheets in a new tab. window.open
// only works synchronously inside a user-gesture event handler, which
// we are — the C# click handler runs as part of the JS event loop pump.
globalThis.castGuidanceOpenUrl = function (url) {
    window.open(url, "_blank", "noopener,noreferrer");
};

function dismissSplash() {
    const splash = document.getElementById('splash');
    if (splash && !splash.classList.contains('hidden')) {
        splash.classList.add('hidden');
        // Remove from the DOM after the CSS opacity transition completes,
        // so it can't ever block clicks on the Avalonia canvas underneath.
        setTimeout(() => splash.remove(), 500);
    }
}

try {
    const dotnetRuntime = await dotnet
        .withDiagnosticTracing(false)
        .withApplicationArgumentsFromQuery()
        .create();

    const config = dotnetRuntime.getConfig();
    await dotnetRuntime.runMain(config.mainAssemblyName, [window.location.search]);

    // runMain resolves once C# Main returns, which for an Avalonia.Browser
    // app means StartBrowserAppAsync has mounted the visual tree onto #out.
    // Give the renderer one paint frame before fading the splash so the
    // app's first frame is visible behind the fade.
    requestAnimationFrame(() => requestAnimationFrame(dismissSplash));
} catch (err) {
    // If the runtime failed to start, surface the error and still drop
    // the splash so the user isn't stuck staring at the D4 forever.
    console.error("CastGuidance PCB Toolkit failed to start:", err);
    const status = document.querySelector('#splash .status');
    if (status) {
        status.textContent = "Failed to start. See the browser console for details.";
        status.style.color = "#E5484D";
    }
    // Don't auto-dismiss on error — leave the splash so the message is readable.
}
