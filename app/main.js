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

const dotnetRuntime = await dotnet
    .withDiagnosticTracing(false)
    .withApplicationArgumentsFromQuery()
    .create();

const config = dotnetRuntime.getConfig();
await dotnetRuntime.runMain(config.mainAssemblyName, [window.location.search]);
