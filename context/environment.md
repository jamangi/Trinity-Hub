# Environment notebook

Status: **reported, unverified**, from the initial 2026-09-08 discussion. This is a collection plan, not executable guidance.

## Hardware

- Test racks are labeled **50–56**, with shelves lettered **G–Q**. Addressing, capacity per shelf, and location-to-network mapping are unknown.
- Tests can reportedly be run through **Fusion Eye**, or via an SSH login to a machine or network environment. The target type and connection procedure need clarification; no address map is stored here.
- Major server versions and reported configurations:

| Gaines version | Reported configurations |
| --- | --- |
| 1.5 | 2, 3, 4, 6 |
| 2.0 | B1, F1, D1 |
| 3.0 | A1 |

These labels do not tell us the bill of materials, expected firmware, topology, or pass criteria. Confirm those independently for each applicable configuration.

## Systems and access

| System or tool | Reported role | Still unknown |
| --- | --- | --- |
| ServiceMe | Contains ticket history. | Available fields, search, permitted exports, and integrations. |
| Traveler | Carries unit information between stages. | Format, required fields, ownership, and relationship to the ticket. |
| SharePoint | Available; teammate's alias script and installation instructions were shared there. | Personal editing, sharing, lists, version history, and retention capabilities. |
| Fusion Eye | Interface for running tests on racked servers. | Status retrieval, logs, interface capabilities, and access boundaries. |
| NvDebug Suite | Named in the environment. | Exact role, version, commands, output formats, and relationship to other tests. |
| Linux and SSH | Command-line work and remote access. | Shell, installed tools, profile customization, execution context, and approved destinations. |
| SIFT | Can access files open to it. | File-size limits, multi-file behavior, supported formats, and available execution capabilities. |

Do not assume any API, administrator access, package installation, background service, or shared write location exists.

## Tentative server route

The recollected route is:

```text
Inspection
  → QT1: INIT → PreTest → IST → FCT
  → Diagnostic
  → Repair
  → QT3: INIT → FLA → FLC → PreTest → IST → FCT
  → Run-In: FINT
```

This records one recollection, not a mandatory path. Passing units, failures, retries, and rework may route differently. **QT2 was mentioned in the explanation, while QT3 appears in the sequence.** Determine whether both exist, whether one label was mistaken, and which branches lead where. The claim that INIT occurs before every test also needs reconciliation with the single INIT shown in each sequence.

## Test-stage recollections

| Label | Reported understanding | Needed before this becomes guidance |
| --- | --- | --- |
| INIT | Happens before each test; checks component detection through BMC. | Exact inventory scope, invocation pattern, other checks, expected output, and failure routing. |
| FLA | Gets correct values from ServiceMe to flash component firmware. | Data source and validation, target components, versions, prerequisites, side effects, and failure handling. |
| FLC | Configures component modes for testing. | Which settings, required configuration, and resulting state. |
| PreTest | Possibly prepares the test environment. | Actual work performed, boundaries, and success criteria. |
| IST | Described as a mini stress test. | Workload, coverage, duration, prerequisites, and criteria. |
| FCT | Described as a larger/heavier stress test; original wording was unclear. | Confirm intended meaning, workload, coverage, duration, and criteria. |
| FBB | Reportedly flashes BIOS and is sometimes used for a unit that cannot boot or after FLA. | Exact operation and supported recovery scenarios; the recollection is not a recommendation to run it or repeat flashing. |
| FINT | Associated with Run-In. | Purpose, duration, coverage, criteria, and route afterward. |

Full suites reportedly take **30–300 minutes** in some circumstances. This is a recollection, not a measured baseline or a guarantee that preflight can save the whole duration.

## Existing aliases and Quick Test idea

Reported names: `bmc`, `dry`, `fw`, `help`, `mac`, `sdr`, `sh`, `ssh`, `custom`, `fru`, `get`, `hmc`, `mc`, `pwr`, `sensor`, `sol`, `wait`.

**All alias bodies, arguments, outputs, and side effects are currently unknown.** Even familiar names may wrap site-specific behavior. The teammate's existing collection remains the starting point and should retain attribution.

The proposed troubleshooting sequence is: check BMC reachability, check power, check inventory, then continue with the locally established checks. The recollected command example was `ipmi wait <rack location>`, followed by references to `pwr` and `fru`. This is an unverified notation sample, not a runnable recipe. In particular, “check power” must distinguish reading power state from changing it.

## 2026-09-13 note consolidation

The initial account above remains a dated starting point. The [new reference map](../notes/reference.md) adds component/socket observations, interface and Traveler fields, test-preparation fragments, failure reasoning and handoff studies from 49 reviewed images. [Transcriptions](../notes/transcriptions.md) retain source order and uncertainty.

New information is still **reported / unverified**. Important changes and conflicts:

- An outdated SOP/error presentation was found (P018); the initial no-list description should not be treated as proof that no resource exists.
- FLA/FLC functions, expansions and NH/NX mappings conflict across P043, P044 and P047.
- INIT repetition, QT3 subgroups, Pass versus Run-In and the earlier QT2 mention remain unresolved.
- Alias invocation examples and candidate script paths are now recorded, but **command bodies remain absent**. Conflicting clear syntax and evidence-retention questions block executable guidance.
- The Traveler field map and additional stage rows broaden the operation view; neither row order nor the illustrated form establishes the official route.
- Visual configuration clues, SSD restrictions, socket destinations and equipment readings remain scoped observations, not specifications.

Use the [owner mailbox](../owner_mailbox/CLARIFICATION.md) for focused follow-up. Preserve old observations and add scoped corrections instead of silently replacing the source history.


## Owner clarification after the first notebook release

The owner clarified that NvDebug is required for Bianca orders, some technicians omit it, and locating affected cases in ServiceMe is difficult. Refill delays of days, wrong-unit unplugging, weak SOPs and loose isolation before parts orders are reported pains. FRU ambiguity means lacking an expected component-identification baseline for the BMC fru check.

The owner also describes access through a server on the test-rack network and proposes workload-wide observational reports. Exact targets, command behavior, non-interference and data access remain unverified. See [U01–U07 and C21–C28](../owner_mailbox/CLARIFICATION.md) for provenance and open details, and [operations Analysis](../notes/analysis.md) for proposed relief. These clarifications refine the working context without rewriting the historical Notes pages.


## OS MAC and identity clarification

The owner corrected the report-field typo to **OS MAC**. Their current understanding is that the NIC determines OS MAC, that the printed label also carries BMC MAC and a service number, and that a NIC replacement changes OS MAC and requires label reprinting. This is **owner-reported local behavior**, not independently verified command or hardware behavior.

For proposed reports, retain OS MAC as secondary context with source and observation time. It should not be the sole key joining a unit's repair history across NIC replacements. The service number is the owner's candidate for a more durable identifier; its exact relationship to Service Tag or serial number and its stability remain unconfirmed. Keep ticket identity separate from physical-unit identity. See [U07–U09, resolved C21 and new C29–C30](../owner_mailbox/CLARIFICATION.md). Original photo transcriptions remain unchanged.
