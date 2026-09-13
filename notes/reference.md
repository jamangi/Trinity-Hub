# Reference map and process studies

Sourced synthesis; all local operational claims remain reported / unverified. Each topic links back to full reading transcriptions. A referenced source supports the account, not independent correctness.

## Components & connections

Start with recognition, then trace the route. These observations are not a verified wiring diagram.

### A component entry needs several views

Name and aliases; function; position and viewpoint; physical cues; sockets; connected endpoints; model/configuration; source and uncertainty. The early notes supply many names and locations, but comparatively few verified functions.

Sources: [P003](transcriptions.md#p003), [P005](transcriptions.md#p005), [P010](transcriptions.md#p010), [P012](transcriptions.md#p012).

### Board and assembly vocabulary

The notebook includes Bianca 0/1, BMC, HMC, interposer, PDB, IPEX, PSB, BF3, PCIe/riser, NIC, M.2, backplanes, OSFP, front/control panels, TPM, fans, cold plates, manifolds, busbar and C-Link. Terms are observations; expansions and component boundaries still need checking.

Sources: [P001](transcriptions.md#p001), [P002](transcriptions.md#p002), [P010](transcriptions.md#p010), [P011](transcriptions.md#p011).

### Side 0 and side 1

Side 0 is associated with HMC/TPM/battery and NIC-related observations; side 1 with M.2. Later socket notes are richer but do not establish a universal layout. Record whether left/right is viewed from front or back.

Sources: [P004](transcriptions.md#p004), [P011](transcriptions.md#p011), [P040](transcriptions.md#p040), [P041](transcriptions.md#p041).

### Connections with unresolved edges

The HMC/BMC-to-interposer account is relatively explicit; sideband paths, backplane destinations and power counts remain uncertain. Page 42 distinguishes backplane 0→IPEX from backplane 1→PSB, whereas earlier notes generalize rear backplane connections.

Sources: [P005](transcriptions.md#p005), [P013](transcriptions.md#p013), [P014](transcriptions.md#p014), [P040](transcriptions.md#p040), [P042](transcriptions.md#p042).

### Mechanical and cooling knowledge

The notes mention hose routing, busbar fastening and removal order. Required tool specifications, shutdown, isolation, leak precautions and handling steps are not supplied. These fragments belong in study notes until checked against a complete procedure.

Sources: [P006](transcriptions.md#p006), [P008](transcriptions.md#p008), [P040](transcriptions.md#p040).

All relevant pages: [P001](transcriptions.md#p001), [P002](transcriptions.md#p002), [P003](transcriptions.md#p003), [P004](transcriptions.md#p004), [P005](transcriptions.md#p005), [P006](transcriptions.md#p006), [P007](transcriptions.md#p007), [P008](transcriptions.md#p008), [P009](transcriptions.md#p009), [P010](transcriptions.md#p010), [P011](transcriptions.md#p011), [P012](transcriptions.md#p012), [P013](transcriptions.md#p013), [P014](transcriptions.md#p014), [P040](transcriptions.md#p040), [P041](transcriptions.md#p041), [P042](transcriptions.md#p042).

## Models & configurations

Keep model-specific clues separate from authoritative identification.

### Reported families

Gaines 1.5: 2, 3, 4, 6. Gaines 2.0: B1, F1, D1. Earlier context calls Gaines 3.0 A1; page 41 calls it engineering. These may describe different contexts, but the notes do not establish that.

Sources: [P019](transcriptions.md#p019), [P041](transcriptions.md#p041).

### Recognition clues

Traveler colors, handles, port counts and SSD slot positions appear in the notes. They are useful memory cues with exceptions, not sufficient identification checks.

Sources: [P019](transcriptions.md#p019), [P028](transcriptions.md#p028).

### Missing baseline

For each confirmed configuration, collect the expected parts, firmware/settings, approved test accessories, applicable suite and acceptable exceptions. SSD-generation statements on pages 27 and 37 need their exact model and use-case scope.

Sources: [P021](transcriptions.md#p021), [P027](transcriptions.md#p027), [P028](transcriptions.md#p028), [P037](transcriptions.md#p037).

All relevant pages: [P002](transcriptions.md#p002), [P004](transcriptions.md#p004), [P019](transcriptions.md#p019), [P027](transcriptions.md#p027), [P028](transcriptions.md#p028), [P037](transcriptions.md#p037), [P041](transcriptions.md#p041), [P044](transcriptions.md#p044).

## Racks & access

The rack is an environment of locations, connections, tools and current unit state.

### Reported architecture

Fusion Eye controls or observes testing at rack locations. SSH access through a jumper and KVM-related access are mentioned separately. Their exact target types and relationship to BMC, host OS and controller remain unconfirmed.

Sources: [P016](transcriptions.md#p016), [P020](transcriptions.md#p020), [P026](transcriptions.md#p026), [P043](transcriptions.md#p043).

### Location is not identity

Rack positions change. A physical move needs a reliable match between the unit, its record and its destination. Do not use a repeated part number as the sole unique unit match.

Sources: [P022](transcriptions.md#p022), [P030](transcriptions.md#p030), [P038](transcriptions.md#p038).

### Rack roles and holds

Later notes label rack 52 FAE and rack 56 Diagnostic/Repair. Filters and hold labels are observed in Fusion Eye. Slot letter conventions, changes over time and hold-release ownership remain open.

Sources: [P019](transcriptions.md#p019), [P036](transcriptions.md#p036), [P043](transcriptions.md#p043), [P046](transcriptions.md#p046).

### Cooling observations

ETF/CDU sketches record pressure, temperature and a light state. No manufacturer limits, approved setpoints, alarm handling or operating procedure are supplied.

Sources: [P043](transcriptions.md#p043).

All relevant pages: [P016](transcriptions.md#p016), [P019](transcriptions.md#p019), [P020](transcriptions.md#p020), [P023](transcriptions.md#p023), [P024](transcriptions.md#p024), [P026](transcriptions.md#p026), [P027](transcriptions.md#p027), [P030](transcriptions.md#p030), [P036](transcriptions.md#p036), [P038](transcriptions.md#p038), [P039](transcriptions.md#p039), [P043](transcriptions.md#p043), [P046](transcriptions.md#p046).

## Test stages

Local labels are preserved without inventing standard expansions. Conflicting descriptions remain visible.

### Working route

Initial recollection: Inspection → QT1 → Diagnostic → Repair → QT3 → Run-In. This is a candidate route, not a rule that every unit visits every stage. Passing, failure, retry and rework branches need confirmation.

Sources: [P017](transcriptions.md#p017), [P031](transcriptions.md#p031), [P038](transcriptions.md#p038), [P039](transcriptions.md#p039), [P047](transcriptions.md#p047).

### INIT and PreTest

INIT is reported to check component detection through BMC and to occur before each test. PreTest is described as preparing the environment and involving manual checks. The drawn single INIT and repeated-INIT claim need reconciliation.

Sources: [P021](transcriptions.md#p021), [P047](transcriptions.md#p047).

### FLA and FLC disagreement

Page 43 expands FLA/FLC as Full load analysis / Full load cycle. Page 47 describes firmware flashing / configuration. Page 44 pairs FLA with NH and FLC with NX; page 47 reverses those codes. Preserve both until a current suite source resolves them.

Sources: [P043](transcriptions.md#p043), [P044](transcriptions.md#p044), [P047](transcriptions.md#p047).

### IST, FCT, FINT and FBB

IST/FCT are described elsewhere as stress-test stages, and FINT as Run-In/full test. FBB is associated with BIOS work. Exact workloads, prerequisites, effects, pass criteria and authorized recovery cases have not been supplied.

Sources: [P032](transcriptions.md#p032), [P039](transcriptions.md#p039), [P044](transcriptions.md#p044), [P047](transcriptions.md#p047).

### A duration is not a promise

Page 47 estimates INIT 5–20, FLA 40–66, FLC 15–45 and PreTest 45–60 minutes. No sample size or conditions accompany them. Do not add them into a universal suite estimate or claim a time saving from them.

Sources: [P043](transcriptions.md#p043), [P047](transcriptions.md#p047).

All relevant pages: [P016](transcriptions.md#p016), [P017](transcriptions.md#p017), [P020](transcriptions.md#p020), [P021](transcriptions.md#p021), [P024](transcriptions.md#p024), [P026](transcriptions.md#p026), [P031](transcriptions.md#p031), [P032](transcriptions.md#p032), [P033](transcriptions.md#p033), [P037](transcriptions.md#p037), [P039](transcriptions.md#p039), [P043](transcriptions.md#p043), [P044](transcriptions.md#p044), [P047](transcriptions.md#p047).

## Systems & records

Separate the record of a unit, the state of a test and the team's coordination notes.

### ServiceMe

The notes describe unit history and editable stage/result/reason/bin/comment fields. Exact field labels, valid combinations and update ownership remain unverified. A search action is not itself an update.

Sources: [P025](transcriptions.md#p025), [P029](transcriptions.md#p029), [P035](transcriptions.md#p035), [P037](transcriptions.md#p037).

### Fusion Eye

The interface sketches show location groups, test controls, unit/configuration arguments, status filters and holds. Test-state display, a historical failure and a move permission are different pieces of information.

Sources: [P031](transcriptions.md#p031), [P033](transcriptions.md#p033), [P044](transcriptions.md#p044), [P045](transcriptions.md#p045), [P046](transcriptions.md#p046).

### Traveler

The Traveler collects identity fields, customer-reported failure, repair notes and stage outcomes. The illustrated form also includes Leak test, Refill, TIM curing, QC and OBA. Form row order does not prove a universal process sequence.

Sources: [P048](transcriptions.md#p048), [T01](transcriptions.md#t01).

### Spreadsheets and other tools

Test Tracker, Scan Units and Team Assignments appear with different purposes. NvDebug evidence is reported as relevant to some Bianca cases. SharePoint and the Output sheet come from the broader notebook context; current ownership and retention are unresolved.

Sources: [P017](transcriptions.md#p017), [P018](transcriptions.md#p018), [P022](transcriptions.md#p022), [P023](transcriptions.md#p023), [P033](transcriptions.md#p033), [P038](transcriptions.md#p038).

All relevant pages: [P017](transcriptions.md#p017), [P020](transcriptions.md#p020), [P022](transcriptions.md#p022), [P023](transcriptions.md#p023), [P025](transcriptions.md#p025), [P027](transcriptions.md#p027), [P029](transcriptions.md#p029), [P030](transcriptions.md#p030), [P031](transcriptions.md#p031), [P033](transcriptions.md#p033), [P035](transcriptions.md#p035), [P037](transcriptions.md#p037), [P038](transcriptions.md#p038), [P039](transcriptions.md#p039), [P044](transcriptions.md#p044), [P045](transcriptions.md#p045), [P046](transcriptions.md#p046), [P048](transcriptions.md#p048).

## Failure reasoning

An error is an entry point into investigation. Keep the observation, explanation and repair decision distinct.

### Separate four claims

What did the test report? What did a later observation show? What explanation might connect them? What evidence would justify the next action? The source often jumps between these levels; the revised reference should keep them distinct.

Sources: [P032](transcriptions.md#p032), [P034](transcriptions.md#p034), [P036](transcriptions.md#p036).

### Time matters

An old HMC event, a test-time failure and current power status may describe different moments. Preserve timestamps and the exact check before comparing them. Clearing logs can remove that context.

Sources: [P024](transcriptions.md#p024), [P030](transcriptions.md#p030), [P034](transcriptions.md#p034).

### Do not overread reachability

A command that cannot contact BMC does not by itself isolate hardware failure. Target selection, network path, credentials, current state and controller health remain questions. These are possibilities, not new diagnoses.

Sources: [P036](transcriptions.md#p036).

### Topology does not authorize flashing

The notebook's CX8/Bianca/FBB idea is a hypothesis. Connection to a component is not proof of a firmware fault, and a successful flash does not rule out every other cause.

Sources: [P032](transcriptions.md#p032).

### An error index is still missing its evidence

Error-like strings appear in pages 32, 34, 36 and 48, but there is no verified code catalog or validated action tree. Preserve exact spellings and uncertainty before grouping meanings or recommending repairs.

Sources: [P018](transcriptions.md#p018), [P032](transcriptions.md#p032), [P034](transcriptions.md#p034), [P036](transcriptions.md#p036), [P048](transcriptions.md#p048).

All relevant pages: [P018](transcriptions.md#p018), [P021](transcriptions.md#p021), [P022](transcriptions.md#p022), [P024](transcriptions.md#p024), [P026](transcriptions.md#p026), [P030](transcriptions.md#p030), [P032](transcriptions.md#p032), [P034](transcriptions.md#p034), [P035](transcriptions.md#p035), [P036](transcriptions.md#p036), [P043](transcriptions.md#p043), [P048](transcriptions.md#p048).

## Command notebook

Observed shorthand only. No command bodies have been supplied or executed.

### Names are not contracts

The earlier alias list and page 44 differ: sh/sn, power/pwr and other labels need checking against the actual script. Familiar labels can still wrap local behavior.

Sources: [P023](transcriptions.md#p023), [P044](transcriptions.md#p044).

### Document effects separately

Observed examples include waiting/contact checks, power status, power-on, inventory, sensors, event retrieval, clearing and console activation. Confirm exact arguments, side effects, output, timing, exit codes and prerequisites for each wrapper.

Sources: [P020](transcriptions.md#p020), [P024](transcriptions.md#p024), [P026](transcriptions.md#p026), [P034](transcriptions.md#p034).

### Conflicting clear syntax

One page records hmc clear followed by a location; another includes on before the location. Neither source resolves the command contract or evidence-retention policy.

Sources: [P024](transcriptions.md#p024), [P026](transcriptions.md#p026), [P030](transcriptions.md#p030).

### Automation gate

A future preflight needs reviewed command definitions and known-good and known-failure outputs. Reading a command's name is insufficient to classify it as read-only. No live automation is included in this site.

Sources: [P021](transcriptions.md#p021), [P023](transcriptions.md#p023), [P026](transcriptions.md#p026), [P034](transcriptions.md#p034).

All relevant pages: [P020](transcriptions.md#p020), [P023](transcriptions.md#p023), [P024](transcriptions.md#p024), [P026](transcriptions.md#p026), [P027](transcriptions.md#p027), [P030](transcriptions.md#p030), [P034](transcriptions.md#p034), [P036](transcriptions.md#p036), [P044](transcriptions.md#p044).

## Handoffs & process studies

Use these accounts to review the workflow with its owner. They are incomplete observations, not approved SOPs.

### Four primary teams

Inspection, Testing, Diagnostic and Repair anchor the original scope. Later notes add FAE and stage names without supplying a full organization chart or authority matrix.

Sources: [P017](transcriptions.md#p017), [P036](transcriptions.md#p036), [P043](transcriptions.md#p043), [P048](transcriptions.md#p048).

### One case, several representations

A physical unit, a test location, a ticket, a Traveler and tracking rows can disagree unless a handoff preserves their association. The next owner needs current stage, evidence, work performed, unresolved questions and permitted next action.

Sources: [P017](transcriptions.md#p017), [P022](transcriptions.md#p022), [P030](transcriptions.md#p030), [P035](transcriptions.md#p035), [P038](transcriptions.md#p038), [P039](transcriptions.md#p039).

### A clear result needs context

A Pass or Fail label is incomplete without the suite/stage, time, scope and any remaining work. A move or hold requires its own authorization and destination.

Sources: [P035](transcriptions.md#p035), [P037](transcriptions.md#p037), [P038](transcriptions.md#p038), [P039](transcriptions.md#p039), [P046](transcriptions.md#p046).

All relevant pages: [P017](transcriptions.md#p017), [P018](transcriptions.md#p018), [P020](transcriptions.md#p020), [P022](transcriptions.md#p022), [P025](transcriptions.md#p025), [P029](transcriptions.md#p029), [P030](transcriptions.md#p030), [P031](transcriptions.md#p031), [P033](transcriptions.md#p033), [P035](transcriptions.md#p035), [P037](transcriptions.md#p037), [P038](transcriptions.md#p038), [P039](transcriptions.md#p039), [P046](transcriptions.md#p046), [P048](transcriptions.md#p048).

## Process studies

The following sequences organize incomplete source accounts for review. They are not approved or complete operating instructions. Required authority, prerequisites and source-defined stop conditions are absent.

### Prepare and start a test

Understand how a unit, its scan data, its ticket and its test location become ready for the intended suite.

1. Identify the unit and applicable configuration; inspect the relevant ticket and test history.
2. Collect the required scan/component data and associate it with the intended unit.
3. Confirm the racking, test accessories, location and necessary access through the applicable procedure.
4. Review required unit state and preparation checks. The notes mention inventory, power, boot and clearing, but do not define a safe complete sequence.
5. Review stage, mode and arguments in Fusion Eye; use the approved test-selection rules.
6. Observe the start and maintain the required tracking records.

**Missing before operational use:**

- Missing numbered steps 4–6 in the source sequence.
- Exact preparation command contracts and whether/when evidence can be cleared.
- Required shutdown/power/boot states, scan fields and configuration-specific acceptance criteria.
- Owner-approved rules for QT1 versus QT3 and repeated tests.

Sources: [P020](transcriptions.md#p020), [P024](transcriptions.md#p024), [P026](transcriptions.md#p026), [P029](transcriptions.md#p029), [P031](transcriptions.md#p031), [P033](transcriptions.md#p033), [P038](transcriptions.md#p038).

### Understand and hand off a failure

Give the next team evidence they can understand without turning a failure label into an unsupported diagnosis.

1. Record the exact reported stage and failure wording with its time and source.
2. Consult the unit's history, prior changes and relevant test evidence.
3. Compare approved current-state observations with historical events; retain the command/check and timestamp.
4. Separate observed findings from hypotheses and unresolved alternatives.
5. Prepare the required ticket/Traveler update, then verify the valid result/reason and authorized next destination with the workflow owner.

**Missing before operational use:**

- Verified error meanings and action criteria.
- Which evidence must be retained or attached, including NvDebug when applicable.
- Move-tag authority and handling before a tag is available.
- Approved current-state checks and escalation conditions.

Sources: [P032](transcriptions.md#p032), [P034](transcriptions.md#p034), [P035](transcriptions.md#p035), [P036](transcriptions.md#p036), [P048](transcriptions.md#p048).

### Review a move after failure

Keep physical location, recorded location and hold status consistent.

1. Check whether a hold or Move-tag requirement applies and identify the decision owner.
2. Confirm the unique unit match and intended destination in the current records.
3. Use the authorized shutdown, disconnection, lifting and transport procedure; the notes do not supply it.
4. Reconcile the source location, destination assignment, ServiceMe bin and Fusion Eye location according to their owners' rules.
5. Leave evidence of the completed handoff and any remaining restrictions.

**Missing before operational use:**

- Pre-tag handling is explicitly unknown.
- Shutdown, cable handling, transport and restart requirements.
- Exact meaning and effect of clearing a Fusion Eye location.
- Who verifies the destination and releases a hold.

Sources: [P030](transcriptions.md#p030), [P035](transcriptions.md#p035), [P038](transcriptions.md#p038), [P046](transcriptions.md#p046).

### Review a pass and Run-In handoff

Make clear what has passed and what remains before the unit is finished.

1. Confirm which required suite and stage actually passed, including any outstanding repeats or holds.
2. Check the intended next route and whether FINT/Run-In is still outstanding.
3. Review the correct Pass result/reason, bin, comment and Traveler entry.
4. Use the approved shutdown, handling and test-accessory removal procedure where applicable.
5. Reconcile Run-In records and the released Fusion Eye location with the receiving owner.

**Missing before operational use:**

- Exact Pass versus final completion semantics.
- RH01/RHO1 spelling and applicability.
- Accessory removal timing, blanks and SSD requirements.
- Confirmed relationship among QT3-1, QT3-2, FINT and Run-In.

Sources: [P017](transcriptions.md#p017), [P037](transcriptions.md#p037), [P039](transcriptions.md#p039), [P047](transcriptions.md#p047), [P048](transcriptions.md#p048).

### Build a checked component entry

Turn recognition into a reusable reference without filling connection gaps from memory.

1. Record the configuration, component label and viewing direction.
2. Describe how the part appears installed, in isolation and by its sockets.
3. Trace each confirmed cable to both labeled endpoints; mark missing or damaged training parts.
4. Record the component's function from an applicable source, separately from the visual observations.
5. Ask a knowledgeable reviewer to check the entry and retain the source revision and unresolved edges.

**Missing before operational use:**

- A verified configuration-specific diagram.
- Full sideband paths and corrected training-unit damage.
- Manufacturer or local source for component functions and connector types.

Sources: [P003](transcriptions.md#p003), [P005](transcriptions.md#p005), [P010](transcriptions.md#p010), [P012](transcriptions.md#p012), [P013](transcriptions.md#p013), [P040](transcriptions.md#p040), [P042](transcriptions.md#p042).

### Read the Traveler as a case history

Understand how the paper record relates to the unit's ticket and test evidence.

1. Identify the form type and the fields used to match the unit within workplace systems.
2. Separate the customer's reported failure from later Inspection, Testing and Diagnostic findings.
3. Read repair notices as actions taken; do not assume an action proves its own success.
4. Match stage outcomes with their supporting records and any open handoff.
5. Clarify who owns each row and where richer evidence should be stored.

**Missing before operational use:**

- Whether the illustrated form matches the current official revision.
- Meaning and applicability of WUR, TIM, QC, OBA and receiving-status labels.
- Required authorship/time fields and conflict resolution between Traveler and ServiceMe.

Sources: [P017](transcriptions.md#p017), [P022](transcriptions.md#p022), [P048](transcriptions.md#p048), [T01](transcriptions.md#t01).
