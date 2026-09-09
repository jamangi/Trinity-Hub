# Build Orders

A build order is a sequence from a current capability to a useful result. These are **proposed plans**, not implemented tools, approved workplace procedures, or promises of promotion. Company and Testing KPIs live in the [root README](../README.md).

## Recommended order from A to C

| Phase | Build orders | Why this comes now | Gate to continue |
| --- | --- | --- | --- |
| A: learn and leave clear evidence | [01 Field Guide](01-field-guide.md), [02 Handoff Scribe](02-handoff-scribe.md) | Useful immediately to a green jacket; exposes knowledge gaps and reduces repeated explanations. | Explain a familiar case in your own words and produce a handoff whose claims you can trace. |
| A: make learning retrievable | [03 Error Index → Wiki](03-error-index-and-wiki.md), [04 Task Cards](04-task-cards.md), [05 Isolation Notebook](05-isolation-notebook.md) | Reuse verified knowledge and make reasoning explicit before automating it. | Retrieve a relevant entry, check its scope, and distinguish an observation from a diagnosis. |
| A → B: understand existing automation | [06 Command Companion](06-command-companion.md) | Respect and document the existing alias work; understand effects before chaining commands. | Supplied definitions and outputs support a reviewed, bounded command reference. |
| B: automate a known sequence | [07 Quick Test](07-quick-test.md), [08 Error Muncher](08-error-muncher.md) | Each consumes earlier knowledge: command contracts for Quick Test; reviewed actions for Muncher. | Offline cases pass; a small workplace pilot demonstrates useful, accurate results within established access. |
| B → C: maintain and teach | Improve whichever earlier tools people actually use; consider [09 Shift Bulletin](09-shift-bulletin.md). | Reliability and teaching matter more than the number of apps created. | Another person can use, correct, and maintain the tool without depending on its author for every step. |

This is a dependency order, not a requirement to finish nine projects. Start with 01 and 02; use tomorrow's material to seed 03 and 06. Pursue 07 only after Q01/Q07/Q09 are resolved for a small scope. Pursue 08 only when 03 contains reviewed investigative actions. Shared wiki publishing and 09 need shared ownership and known access. No dates are attached to these gates.

The respected-blue-jacket path can stop at excellent personal tools, voluntary peer use, and mentoring. The red-jacket path adds responsibility for coordination only when the role actually includes it. Neither path requires a management dashboard or a ranking of coworkers.

## Machiavellian Index

This index estimates whether the benefit is worth the social and maintenance cost. It is a planning judgment, not a measured psychological score. Keep all three variables visible; a high pain score does not override missing authority.

- **Pain Addressed (P), 1–5:** 1 = occasional inconvenience; 3 = recurring time or clarity loss; 5 = a major repeated obstruction to testing or handoffs. Higher is better, but validate the estimate through use.
- **Rank Needed (R):** green = personal aid within current work; blue = experienced peer stewardship; lead/sponsor = coordinated adoption or cross-team ownership. These describe scope fit, not automatic system permissions. If the scope exceeds your role, shrink the pilot or find an appropriate owner.
- **Obnoxiousness (O), 1–5:** 1 = quiet personal benefit; 3 = asks peers to change habits; 5 = imposes work, monitors people, or claims authority over them. Lower is better. Estimate for the proposed adoption scope, not merely the prototype.

Record an index as **P / R / O**, with the reason for each value. Do not collapse rank into an arbitrary numerical total. Among eligible ideas, prefer recurring pain with low imposition and low upkeep. Reduce O through honest personal use, opt-in sharing, clear credit, and easy removal—not by disguising your motives.

| Order | P | R for initial scope | O for initial scope | Wider adoption concern |
| --- | --- | --- | --- | --- |
| 01 Field Guide | 4 | Green | 1 | Do not present unreviewed study notes as training authority. |
| 02 Handoff Scribe | 4 | Green | 1 | Required team fields remain owned by the existing process. |
| 03 Error Index → Wiki | 5 | Green | 1 | Shared editing needs a review and correction owner; O may rise to 3. |
| 04 Task Cards | 4 | Green | 1 | Team procedure changes need the procedure owner; O may rise to 3. |
| 05 Isolation Notebook | 4 | Green | 1 | It supports reasoning; it must not become a junior-created parts approval gate. |
| 06 Command Companion | 3 | Green | 1 | Credit the alias author and avoid conflicting distributions. |
| 07 Quick Test | 5 | Green for offline prototype | 2 | Live use depends on reviewed effects and existing authority, not rank alone. |
| 08 Error Muncher | 4 | Green for local retrieval | 2 | Recommendations can look authoritative; sources and unknown states must remain visible. |
| 09 Shift Bulletin | 4 | Green for personal digest; lead/sponsor for shared board | 1 personal; 4 shared | Cross-team upkeep and stale information can cost more than the board saves. |

## SIFT working method

For each session, open the relevant build order, selected context, and the specific permitted source files. Name those files in the request; do not assume SIFT has access to every file mentioned in this repository.

Prepend this instruction to a build order's prompt:

> Use only the source files I have opened and identified. Separate observed facts, reported claims, interpretation, and unknowns. Cite the source file and section for each operational claim. If a needed source is absent, list the dependency and stop only that dependent step. Do not invent error meanings, command bodies, thresholds, test outcomes, or permissions. Use synthetic examples for reusable artifacts intended for this repository.

Then work through the order's objectives one at a time. An explanation, a template, a data model, and a program may require separate sessions. Check each artifact before asking SIFT to build on it.

## Evidence of value and reasons to stop

For a small personal trial, record the task type, time spent with and without the aid, inaccuracies, corrections, avoided repetition, and maintenance time. Compare similar work; do not claim one tool caused a company-wide KPI change. The following are proposed trial criteria, not existing measurements.

Keep a tool if it is accurate enough for its limited role and repeatedly saves more effort than it consumes. Expand when someone voluntarily reuses it and can report its limits. Revise or retire it if it duplicates an existing resource, requires constant repair, produces misleading answers, or makes other people do more work. Adoption and repeat use are better signals than compliments.

Create future orders from the [build-order template](TEMPLATE.md). Keep their IDs stable when priorities change. Use statuses such as proposed, gathering, personal pilot, peer pilot, maintained, or retired, and record the next dependency rather than implying a blocked plan is already running.
