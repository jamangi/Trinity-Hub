# Printable learning worksheets

Open [index.html](index.html) directly from your local checkout in a browser. It is one self-contained file: no server, installation, network requests, external fonts, or neighboring assets are needed. The HTML source is the editable master.

The 17 sheets contain conversational questions, short optional follow-up prompts, a potential team benefit, and ruled space for handwritten answers. Some include sketch space. Each sheet has a date/shift, record label, source role/team or document revision, evidence-basis choices, and a follow-up line. Use the same record label on paired and continuation sheets. Print fresh copies to collect different perspectives; differences remain information to investigate, not a vote on which answer is true.

## Printing

1. Open the downloaded local `index.html`, rather than GitHub's source-code preview.
2. Select individual sheets or use a set button. Unselected sheets disappear from the preview and printout. “Print this sheet” selects only that sheet and opens the print dialog; the selection remains after printing or canceling.
3. Choose **Print selected sheets**, or use Ctrl+P / Cmd+P. Use **Letter or A4**, **portrait**, **100% scale**, **one page per sheet**, and **Default margins** (the document supplies 0.5-inch margins). Turn **headers and footers off** to avoid printing a local file path, date, or browser title, and turn **background graphics off**. The worksheet's own page numbers remain.
4. Check the preview, especially if your printer overrides margins or scale. Use the dialog's Copies setting for repeated blank copies. Select all to restore the complete workbook.

All ink is monochrome: text, thin rules, and outline sketch boxes. There are no filled panels, illustrations, or background-dependent writing lines. The controls and conversation opener are screen-only. With JavaScript disabled, all worksheets remain in the HTML and print in order; use browser page ranges. The page provides no digital answer fields or answer storage.

## Sheet guide

| Sheet | Topic | Useful on its own or with |
| --- | --- | --- |
| 01 | Learning the workflow | Any short conversation with a teammate. |
| 02 | Components, racks and connections | A walk-through or architecture sketch. |
| 03 | One server configuration | Repeat for different generations/configurations. |
| 04 | Unit route and testing | Confirm QT labels, branches, retries, and INIT placement. |
| 05 | One test stage | Repeat for each stage; avoids assuming acronym meanings. |
| 06 | Finding and using information | Existing sources, access, reviews, and corrections. |
| 07 | Team updates and delays | Existing channels and concrete information gaps. |
| 08 | One task or procedure | A current procedure plus its exceptions. |
| 09–10 | Error/knowledge entry and investigative step | Printable knowledge template; repeat sheet 10 for additional actions. |
| 11–12 | Command definition and results | Printable alias template; use the same record label on both. |
| 13 | One handoff | Printable handoff template. |
| 14 | One investigation | Printable isolation template. |
| 15 | Source gathering | Non-conversation checklist for existing material. |
| 16 | Observation and timing | Non-conversation notes on ordinary permitted work. |
| 17 | Continuation and follow-up | Extra writing/sketch space for any sheet. |

Start with one or two relevant sheets. Ask the main question first, use the smaller prompts selectively, and leave unknowns blank or labeled. This is a learning aid, not a required interview or an operational procedure.

## Repository-only source map

This section is not included in the printable HTML. The printed material intentionally contains no tool proposals, build-order names, progression strategy, Machiavellian Index, or links back to planning documents.

| Repository source | Sheets covering its information needs |
| --- | --- |
| [Open questions Q01](../context/open-questions.md) | 11, 12, 15 |
| Q02 | 09, 10, 15 |
| Q03 | 06, 11, 15 |
| Q04 | 04 |
| Q05 | 02, 05, 08 |
| Q06 | 01, 13, 15 |
| Q07 | 03, 05, 15 |
| Q08 | 06, 08, 09, 10 |
| Q09 | 05, 10, 11, 12, 14 |
| Q10 | 07, 16 |
| Q11 | 07, 15 |
| [Environment notebook](../context/environment.md) | 02–06 and 11–12 |
| [Build-order gathering objectives](../buildorders/README.md) | Field learning: 01–06; handoffs: 13; knowledge: 09–10; procedures: 08; isolation: 14; commands and prechecks: 03, 05, 10–12; updates: 07; source material and observations: 15–16. |
| [Reusable source templates](../templates/README.md) | Knowledge: 09–10; alias: 11–12; handoff: 13; isolation: 14. |

Keep completed sheets and detailed internal sources in their appropriate workplace locations. Commit only blank masters or synthetic examples. If an answer is suitable to summarize here, update the appropriate context document with its scope and evidence status; do not silently promote recollections into facts.

## Maintaining the workbook

Edit the semantic HTML in `index.html`; its inline CSS and JavaScript control paper layout and selection. Sheet IDs and question numbers should remain stable so older paper notes can still be interpreted. Adjust the sheet guide and source map when adding or retiring questions.

Before publishing changes, verify script syntax, selection sets and page numbering, the no-JavaScript fallback, absence of external resources and planning vocabulary, and local documentation links. Inspect Letter and A4 print previews when available. Physical printer margins remain a user-side check.

Run `node --test tests/print-workbook.test.mjs` from the repository root. These dependency-free checks exercise the actual inline script against a small DOM substitute and inspect the static content. They verify selection behavior and content boundaries, not browser layout or physical pagination. The initial automated browser preview was blocked by the browser tool's local-file URL policy; Letter/A4 preview remains to be checked locally before printing.
