# Consolidated field notes

Edition: 2026-09-13. **All local operational claims remain reported / unverified.**

Start with the [chronological reading edition](narrative.md), [reference map and process studies](reference.md), [operations Analysis](analysis.md), or [Introspection](introspection.md). The [HTML notebook](../site/index.html) presents the same operational content with numbered page navigation, topic views and search.

## Coverage and editorial method

- Visually reviewed all 48 numbered JPGs and the separate illustrated Traveler PNG.
- Numeric filenames preserve the supplied sequence. Upload times are not treated as note-writing dates.
- [Reading transcriptions](transcriptions.md) cover 47 operational pages and T01. [Random notes](random-notes.txt) preserve P015 separately; that page is excluded from the site, narrative and public search data.
- These are redacted reading transcriptions: punctuation, line breaks and some grammar are normalized; sketch content is described. They are not exact facsimiles or claims of perfect OCR.
- Gray masks, overlapping images, unclear handwriting, crossed-out content and incomplete arrows are identified. Covered text is not reconstructed from guesses.
- Credentials, addresses, identity-linked values, staff names and identifying record details are replaced with omission markers. Source images remain outside this repository.
- Transcription flags are editorial. Narrative bullets are revised learning prose. Reference cards are a synthesis. Analysis entries are explicitly interpretations, questions, hypotheses or proposals.
- Later notes do not automatically override earlier ones. The FLA/FLC definitions and reversed codes, clear-command syntax, backplane routes and stage/Run-In questions remain visible.

The [owner mailbox](../owner_mailbox/CLARIFICATION.md) retains the original questions, records seven owner clarifications, and adds C21–C28 for the operations proposals. C09 is partially resolved.

## Content and presentation

| File | Role |
| --- | --- |
| [source-pages.json](source-pages.json) | Sanitized operational reading transcriptions, source IDs and editorial flags. |
| [source-inventory.json](source-inventory.json) | Filename, size, checksum and disposition for each source; no source images. |
| [narrative.json](narrative.json) | Revised page titles and bullets in chronological source order. |
| [reference.json](reference.json) | Topic membership, synthesis cards and incomplete process studies. |
| [analysis.json](analysis.json) | Twelve company-operations analyses: pain points, proposed relief, report scope, assumptions, trials and value checks. |
| [introspection.json](introspection.json) | The former 32-entry Analysis, preserved with its original IDs. |
| [owner-updates.json](owner-updates.json) | Owner clarifications used as a separate source layer for operations Analysis. |
| [random-notes.txt](random-notes.txt) | Unrelated P015 material; repository only. |
| [../scripts/build-notes.mjs](../scripts/build-notes.mjs) | Builds Markdown editions and the site's explicit operational dataset. |

Edit the source JSON files, then run `node scripts/build-notes.mjs`. Commit both the edited data and generated reading files. Do not hand-edit generated Markdown or `site/content.js`. The build uses only built-in Node modules. Reading the website requires no installation or server and makes no network requests.

## Limits

The process studies organize the observed sequence and expose missing prerequisites. They are not approved task cards. Command bodies, authoritative error meanings, component functions, exact routing, operating limits and official procedures have not been supplied. No commands were run on workplace systems.

A public repository exposes its repository-only documents too. Excluding random notes or build orders from the site does not make the Git repository private. The website deployment is limited to the site folder. The printable gathering workbook remains separate and unchanged.

## Next useful revision

Resolve one mailbox question with a source and scope. Update the matching synthesis and narrative qualification while retaining the original transcription. Check that the change still preserves uncertainty elsewhere. Additional artwork is optional; verified component references and corrected source text are higher-value next inputs than decorative imagery.

Read the [release verification](VERIFICATION.md) for checks, coverage and remaining limitations.


## Analysis and Introspection

Analysis addresses company operations, including reported pain points and opportunities inferred from the shared system structure. Introspection retains the earlier reflections on learning, reasoning and tool-development values. Old A-series Analysis entry bookmarks and old group bookmarks still open the corresponding Introspection content. The bare Analysis tab now opens operations. Notes remains the original learning narrative and reference.
