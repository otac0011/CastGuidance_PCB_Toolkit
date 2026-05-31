# CastGuidance PCB Toolkit

**Documentation hub:** <https://otac0011.github.io/CastGuidance_PCB_Toolkit/> — download links, user manual, verification details, datasheets.

> **Releases-only repository.** This repo hosts the prebuilt Windows installer / executable for CastGuidance PCB Toolkit. The source code is proprietary and lives in a private repository.

## Get the latest release

→ **[Download the latest release](https://github.com/otac0011/CastGuidance_PCB_Toolkit/releases/latest)** (Windows .exe, ~190 MB self-contained)

Open `CastGuidancePCBToolkit.exe`. On first launch you'll be asked to accept the End User License Agreement. No installer step — the executable is a self-contained PyInstaller bundle.

## What it does

A desktop tool for PCB engineering, ~48 calculators across:

- **Core PCB** — trace impedance (Hammerstad-Jensen / Wadell), 3D field-solver Z₀ via openEMS, current carrying (IPC-2152 + IPC-2221), fusing current, via R/L/C and stub analysis
- **Signal Integrity** — channel insertion-loss budget, jitter budget, conductor + dielectric loss with surface-roughness models, **Via Stub Impact analyzer** with 20 SerDes protocol presets and 3D sensitivity surface
- **RF / Microwave** — Pi-pad / T-pad attenuators, L / Pi / T lumped LC matching with parasitic-aware S11, multi-section λ/4 transformers (binomial + Chebyshev), Smith chart matching. Each has a **3D sensitivity-surface tolerance analysis**.
- **Power Integrity** — PDN target impedance, MLCC DC-bias derating, decap-bank Z(f) analyzer, mounting inductance
- **High-Speed Digital** — DDR length matching
- **EMC**, **Thermal**, **Mechanical / DFM**, **Filters**, **Power Electronics**, **Reference**
- A **PCB Design Wizard** that runs a 100+ candidate Pareto sweep to recommend three buildable stackups for your constraints

## License

Distributed under a **proprietary End User License Agreement** — see [`LICENSE`](LICENSE).

**Summary** (the file is authoritative):

- ✅ Install and use on any device you own — personal, educational, or commercial
- ✅ Share **unmodified** copies (no fee)
- ❌ Sell, sublicense, or rent
- ❌ Modify, reverse-engineer, or create derivative works
- ❌ Distribute in modified form
- ❌ Remove or obscure copyright notices

This is **not** open-source software. Source code is held privately.

## Datasheets

The "Open Datasheet" button inside the toolkit links to PDFs hosted on this repository's GitHub Pages:

→ <https://otac0011.github.io/CastGuidance_PCB_Toolkit/>

## Reporting a bug

[Open an issue](https://github.com/otac0011/CastGuidance_PCB_Toolkit/issues). Please include the toolkit version (visible in the title bar), what page or wizard step you were on, and a screenshot if applicable.

## Disclaimer

PCB designs and electronic circuits can pose safety and reliability risks. All values, recommendations, and outputs produced by this toolkit are **starting points for engineering judgment only** — not a substitute for qualified engineering review against the applicable safety standards, regulatory requirements, electrical codes, and performance specifications for your specific design.

---

© 2026 CastGuidance PCB Toolkit Developer. All rights reserved.