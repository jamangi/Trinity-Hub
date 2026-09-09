# Next-shift gathering and open questions

Collect information in workplace-approved files for SIFT to inspect there. Bring only sanitized conclusions, blank schemas, or synthetic examples into this repository. A partial list is useful: record its scope rather than implying completeness.

## Highest-value next collection

1. **Alias definitions:** obtain the actual script and installation instructions from the existing contributor. Capture each alias/function body, required arguments, target type, dependencies, timeouts, exit status, side effects, and representative success and failure output. Identify commands that alter power, firmware, configuration, logs, or running tests. Ask how updates and attribution should be handled.
2. **Initial error set:** capture exact message and code, emitting tool and version, test stage, server generation/configuration, observed context, evidence source, and any reviewed investigative guidance. An error without a meaning can still be indexed as unknown. A successful part replacement alone does not prove causation.
3. **One useful handoff:** identify the required ServiceMe/Traveler fields and a locally accepted example. Find out what the next team repeatedly has to ask for.
4. **One trusted procedure:** choose a frequent personal task, identify its current source and revision, and ask what a newcomer must know before beginning and when to stop.

Use the [alias](../templates/alias-record.md), [knowledge](../templates/knowledge-entry.md), and [handoff](../templates/handoff.md) templates to structure gathering.

## Dependency register

| ID | Question to resolve | Blocks or changes |
| --- | --- | --- |
| Q01 | What do the aliases actually execute, where, and with what effects? | [Command Companion](../buildorders/06-command-companion.md) execution guidance and [Quick Test](../buildorders/07-quick-test.md) implementation. |
| Q02 | Which error codes/messages are available, and how are meanings and actions verified? | Populating the [error index](../buildorders/03-error-index-and-wiki.md) and enabling [Error Muncher](../buildorders/08-error-muncher.md) recommendations. |
| Q03 | Which files, local tools, sharing features, and execution permissions does a green jacket actually have? | Platform choice for every prototype; shared wiki and bulletin especially. |
| Q04 | How do QT1, QT2, QT3, and Run-In route on success, failure, retry, and rework? Does INIT precede every individual test? | Lifecycle guidance and automated sequencing. |
| Q05 | What does each test stage do, change, and establish? Which source owns the definition? | Field guide, task cards, and interpretation of results. |
| Q06 | What are required ticket/Traveler fields, recipients, update rules, and retention practices? | Shared use of the handoff aid. |
| Q07 | What is expected for each Gaines configuration, and who maintains that baseline? | Any inventory, firmware, mode, or threshold anomaly rule. |
| Q08 | Who can review knowledge and procedures? How are errors corrected and old revisions withdrawn? | Publishing reliable wiki articles and task cards. |
| Q09 | What checks are appropriate before a suite, under which unit states, with which stop conditions? | Quick Test sequence and human-controlled action boundaries. |
| Q10 | What are the current search time, handoff clarification burden, and repeated-test causes? | Credible before/after benefit estimates. |
| Q11 | Is there an existing shared update channel we have not found? Who would own a bulletin, its expiry rules, and shared storage? | [Shift Bulletin](../buildorders/09-shift-bulletin.md); may eliminate the need to build it. |

When resolving an item, record the scoped answer and evidence status in its home context document, then update affected build orders. Keep unresolved portions open.
