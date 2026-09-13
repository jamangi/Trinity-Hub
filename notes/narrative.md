# Field notebook — reading edition

Edition 2026-09-13. Reported / unverified learning notes. Numeric source order is preserved; actual writing dates are unknown. Editorial interpretation is separate from source wording. This is not an approved SOP.

<a id="p001"></a>

## 01 — First, learn what is in the unit

- The first task is recognition: put a name to each board, cable, fan and cooling component.
- The notebook begins with PCIe, PSB, BMC, PDB, backplanes and the interposer. Knowing the names gives later questions somewhere to attach.
- Some labels and expansions are still provisional. A familiar abbreviation is not yet an understood function.

Source: [P001](transcriptions.md#p001).

**Keep in view:**

- PSB expansion is the author's note, not yet checked against the pictured hardware.
- IPex card spelling and interposer cable labels require confirmation.

<a id="p002"></a>

## 02 — A name needs a location

- A component list becomes more useful when I can find each item in the chassis.
- Cold plates, the M.2 area and the busbar assembly join the map. Unit labels provide context, but their identifying values do not belong in this reference.
- A cable diagram is the next missing piece: what connects to what, and where does each route begin?

Source: [P002](transcriptions.md#p002).

**Keep in view:**

- HMC expansion and the 'M.2 or Riser Card' relationship are unverified.
- Two identifying values are intentionally excluded from the repository.

<a id="p003"></a>

## 03 — Build a visual vocabulary

- Learn the component name, its location and the model of the unit together.
- A labeled image could help connect a word to a physical region. That learning aid would need checked labels.
- The ambition is complete assembly knowledge. The immediate work is smaller: identify one part correctly and explain where it belongs.

Source: [P003](transcriptions.md#p003).

**Keep in view:**

- The image-label idea is retained as relevant component-learning material; it is not treated as unrelated AI training.

<a id="p004"></a>

## 04 — The two sides are not identical

- The notes distinguish the M.2 side from the side with HMC, TPM and a battery.
- Colors and socket labels are useful recognition clues, provided the model and viewing direction are recorded.
- An estimated unit value appears in the source. It is an unattributed impression, not a verified price.

Source: [P004](transcriptions.md#p004).

**Keep in view:**

- Orientation and the word 'always' must be scoped to the observed configuration.
- Unit value is an unattributed estimate, not a verified price.

<a id="p005"></a>

## 05 — From objects to connections

- The next question is no longer only what a part looks like, but which connections it owns.
- The HMC-to-interposer cords and the manifold-to-cold-plate hoses are early examples.
- Descriptions should include size, color, ports, side and position. These details make a memory checkable.

Source: [P005](transcriptions.md#p005).

**Keep in view:**

- Whether Bianca names a complete assembly rather than an interchangeable motherboard remains open.

<a id="p006"></a>

## 06 — Trace a route before memorizing it

- The hose notes distinguish short and long runs, with crossing routes for the longer hoses.
- Fiber connections around CX7/CX8 and OSFP introduce another kind of path to trace.
- These are observations from an unspecified configuration. They need a confirmed viewpoint and model before becoming a diagram someone could assemble from.

Source: [P006](transcriptions.md#p006).

**Keep in view:**

- OSFP spelling, permanently-attached claim, and exact replaceable assembly need confirmation.
- Tube direction requires an agreed viewing orientation; do not use this as installation guidance.

<a id="p007"></a>

## 07 — Ask what a board replacement includes

- Replacing a motherboard raises a larger question: which sockets and attached parts must be accounted for?
- The sketch places two GPUs above a central CPU on a Bianca board.
- That picture is a memory aid. It does not yet explain the electrical topology or define a replacement procedure.

Source: [P007](transcriptions.md#p007).

**Keep in view:**

- Integrated describes the author's observation; serviceability and assembly boundaries are unconfirmed.

<a id="p008"></a>

## 08 — Mechanical detail has its own precision

- The busbar notes attempt to capture tool choice, fastening order and its relation to the PDB.
- The sequence and tool setting are compressed and incomplete. They cannot stand in for specified torque and a reviewed procedure.
- Useful next evidence would identify the exact assembly, fasteners, tool specification and source revision.

Source: [P008](transcriptions.md#p008).

**Keep in view:**

- Tool setting '20' has no units or tool model. Screw sequence labels and number meanings are unresolved. This is transcription only, not a fastening procedure.
- 'T20 only fits busbar' and 'all cables' are local recollections.

<a id="p009"></a>

## 09 — Small connections deserve names too

- The notes turn to fan numbering, IPEX placement and sideband routes.
- Fan order and cable destinations are easier to remember as a checked map than as isolated facts.
- The reported reinstall order remains unverified; counting and naming must come before procedural confidence.

Source: [P009](transcriptions.md#p009).

**Keep in view:**

- Fan installation order and connector identity require local verification.

<a id="p010"></a>

## 10 — Give memory more than one index

- A component can be recognized in place, by its socket, or in isolation.
- The author groups cards by shape and size, then revises the counts. The corrections are part of learning.
- A useful inventory should let these different recognition methods lead to the same component entry.

Source: [P010](transcriptions.md#p010).

**Keep in view:**

- The initial skinny count conflicts with the later six-item count; preserve the revision.
- These size classes are memory aids, not standard classifications.

<a id="p011"></a>

## 11 — Compare both motherboard sides

- The NIC, M.2 area, front panel and smaller control card become distinct entries.
- Socket lists expose the asymmetry between side 0 and side 1.
- Connector appearance alone does not establish its protocol. The front-panel port names still need checking.

Source: [P011](transcriptions.md#p011).

**Keep in view:**

- Verify HDMI versus another display connector.
- Parenthetical 0/1 are read as board/side labels, not socket quantities.

<a id="p012"></a>

## 12 — Inventory the things between the boards

- Cards are only part of the unit: sockets, cables and mechanical pieces also need a place in the inventory.
- The notes propose a checklist and printed references to make omissions visible.
- IPEX socket counts begin a more detailed description, but some destinations remain blank.

Source: [P012](transcriptions.md#p012).

**Keep in view:**

- The final fragment does not establish which Ipex socket connects to which component.

<a id="p013"></a>

## 13 — Count the sockets, then name the destinations

- The interposer is recorded as having four slots, three used, with BMC and HMC connections.
- M.2, NIC and front-panel notes add cable counts and destinations.
- A crossed-out heading makes one attribution uncertain. Keep that uncertainty attached to the entry until the part is checked.

Source: [P013](transcriptions.md#p013).

**Keep in view:**

- The crossed-out heading makes the following medium/small socket assignments likely part of NIC, but this is an interpretation needing confirmation.

<a id="p014"></a>

## 14 — Finish the smaller connection notes

- Backplane and TPM observations extend the inventory.
- The backplane notes distinguish the front SSD connections from rear cabling.
- A short cable without a destination is still an unanswered question, not a connection to be filled in from intuition.

Source: [P014](transcriptions.md#p014).

**Keep in view:**

- No destination is recorded for the backplane short socket.

<a id="p016"></a>

## 16 — The unit enters a larger environment

- Racking adds rails, location labels, Ethernet connections and loopbacks to the picture.
- Cable colors and port availability appear to depend on the configuration.
- Partner Diagnostic and its logs enter the notebook, expanding the subject from assembly to testing evidence.

Source: [P016](transcriptions.md#p016).

**Keep in view:**

- Racking prerequisites, lifting rules, connection identity, and full loopback mapping are missing; this is not a complete rack procedure.
- Partner Diag's product name and exact role are unverified.

<a id="p017"></a>

## 17 — Learn the work around the test

- Successful work includes records, handoffs, handling arrangements, configuration checks and knowing what evidence a replacement needs.
- ServiceMe, the Traveler and spreadsheets each appear in the workflow.
- The notes are a learning checklist. They do not yet specify every role, prerequisite or acceptance criterion.

Source: [P017](transcriptions.md#p017).

**Keep in view:**

- Lift range is a note about work, not authorization or a safe-lifting instruction.
- Q3/Runit spellings and the inserted status note need clarification.

<a id="p018"></a>

## 18 — Notice where knowledge costs time

- The author first experiences the error reference as missing, then discovers an outdated SOP presentation.
- That changes the problem: findability, currency and usefulness may matter as much as whether a document exists.
- Other reported friction includes weak isolation, unclear FRU baselines, repeated tracking and delays around curing or refill.

Source: [P018](transcriptions.md#p018).

**Keep in view:**

- 'No lists' is qualified later on the same page by discovery of an outdated list.
- NvDebug requirement is reported, not an established universal procedure.
- Delays and weak isolation are the author's observations, not measured organization-wide findings.

<a id="p019"></a>

## 19 — Separate family from configuration

- Gaines version names are refined into configuration labels and Traveler-color clues.
- Rack roles also appear, though one abbreviation is uncertain at this point.
- These are useful working observations. The authoritative configuration still needs a source beyond color or visual resemblance.

Source: [P019](transcriptions.md#p019).

**Keep in view:**

- Rack reservations and FAP expansion may change; confirm with an owner.
- No A1 Traveler color was supplied.

<a id="p020"></a>

## 20 — Begin to outline test preparation

- The notes connect scanning, BMC contact, power, inventory, ticket state and Fusion Eye setup.
- An overlapping image interrupts the numbered sequence and introduces KVM-related notes.
- The overall aim is visible, but the missing steps prevent treating this page as a complete start-test recipe.

Source: [P020](transcriptions.md#p020).

**Keep in view:**

- Source is a composite with overlapping/cropped text. Covered wording cannot be recovered from this image.
- Do not treat the sample comment date/initials as a required template.
- Command syntax, numbering, and action order remain incomplete.

<a id="p021"></a>

## 21 — Ask what a test changes

- Knowing a stage name is not enough. What state does it change, what does it inspect, and what counts as success?
- Firmware values appear linked to ServiceMe in the author's current explanation.
- Each configuration needs its own expected inventory and settings; those baselines have not yet been supplied.

Source: [P021](transcriptions.md#p021).

**Keep in view:**

- 'Seems' is explicitly a hypothesis about firmware data flow.

<a id="p022"></a>

## 22 — Evidence must travel with the case

- Missing NvDebug evidence is reported as an obstacle to some Bianca orders.
- The author also notices the cost of losing track of waiting work and repeated full tests.
- A physical unit must be matched to its own record before acting. A part number alone may describe a type rather than uniquely identify a unit.

Source: [P022](transcriptions.md#p022).

**Keep in view:**

- A part number may describe a model rather than uniquely identify a unit; do not accept it as equivalent to a unique service tag without confirmation.
- The passage does not establish an approved evidence requirement for ordering Biancas.

<a id="p023"></a>

## 23 — Find where the shorthand lives

- The notes identify likely script locations and use directory listing as a way to investigate them.
- This is progress toward documenting the teammate's aliases, but it does not reveal their implementations.
- Traveler updates and the receive–diagnose–scan–rack sequence remain active questions.

Source: [P023](transcriptions.md#p023).

**Keep in view:**

- Paths are transcribed references, not verified files; whether /bin/cmds/ is absolute or a suffix is unclear.

<a id="p024"></a>

## 24 — A preparation sequence still has gaps

- The page adds scan data, a log-clear example and a possible boot-menu path.
- The bottom is covered, and the command syntax differs from another page.
- Clearing history affects evidence. Its exact purpose, timing and retention requirements need confirmation.

Source: [P024](transcriptions.md#p024).

**Keep in view:**

- Original image masks the lower part; hidden text cannot be transcribed.
- Log deletion can remove evidence. Preconditions, retention/export, exact command syntax and authorization must be supplied before procedure publication.
- Boot-order changes are explicitly tentative and configuration-dependent.

<a id="p025"></a>

## 25 — Learn the ticket fields as a system

- The ServiceMe sketch distinguishes finding a record from changing its stage, bin, result, reason and comment.
- A useful update needs the correct unit and the intended transition.
- Field spellings and option values are still reports from the notebook; they should be checked against the current form.

Source: [P025](transcriptions.md#p025).

**Keep in view:**

- Despite the search heading, later steps mutate the record; split lookup and update in any guide.
- APPID/AppNM spelling, rack suffix, MP/FINT pass requirement, and valid status reasons need checking.

<a id="p026"></a>

## 26 — Distinguish observations from actions

- A command list mixes inventory and console access with power-on and log-clearing examples.
- Those commands do not all have the same effects, even when the shorthand looks uniform.
- A note that some FRU dummy values are acceptable needs an exact, configuration-specific exception before it can guide a decision.

Source: [P026](transcriptions.md#p026).

**Keep in view:**

- 'hmc clear on' conflicts with the command in page 24; preserve both as unverified notation.
- These include state-changing actions; 'all is well' supplies no actual acceptance criteria.

<a id="p027"></a>

## 27 — Record the questions that appear at the screen

- The author notices an unfamiliar two-window interaction and asks what each window represents.
- An SSD generation rule is also recorded without its full scope.
- These small ambiguities are worth resolving before they become habits.

Source: [P027](transcriptions.md#p027).

**Keep in view:**

- MobaXterm setup is an unanswered question.
- Gen 5 SSD requirement, identification markings, and configuration scope need confirmation.

<a id="p028"></a>

## 28 — Use visual clues carefully

- Handles, port counts and SSD-slot observations offer ways to recognize configurations.
- The notes contain several exceptions, which makes a single visual shortcut fragile.
- Use these clues to ask a better question, then confirm the configuration against the appropriate record.

Source: [P028](transcriptions.md#p028).

**Keep in view:**

- Visual clues are reported, not sufficient authoritative configuration identification.
- No exact total Ethernet count is explicitly given for F1.

<a id="p029"></a>

## 29 — A ticket update needs an exact transition

- The page narrows the ServiceMe sequence to starting QT1 or QT3 work.
- The reason field mentions QT1 or prescan even while the broader note covers QT3.
- That mismatch and the covered lower text need clarification before the sequence can be shortened into a task card.

Source: [P029](transcriptions.md#p029).

**Keep in view:**

- The reason shown is QT1-specific despite the QT1/QT3 heading; do not silently reuse it for QT3.

<a id="p030"></a>

## 30 — Moving a unit moves its context

- The notes connect failed-test records, log clearing, physical moves and Fusion Eye location data.
- Copying location values is described, but the complete move procedure is absent.
- The important learning question is which records and states must remain consistent across the move.

Source: [P030](transcriptions.md#p030).

**Keep in view:**

- Staff name excluded; routing role and conditions need confirmation.
- Movement notes omit isolation/power/cooling/lifting prerequisites and are not a complete procedure.
- Log-clear instruction conflicts in syntax/scope with other pages and needs evidence-retention rules.

<a id="p031"></a>

## 31 — Choose a test using the case history

- The author begins using ServiceMe comments, replaced parts and Fusion Eye history to understand QT3 work.
- QT1 is described with a different default path.
- The numbered start-test sequence skips steps that are not recoverable from the supplied image.

Source: [P031](transcriptions.md#p031).

**Keep in view:**

- Missing subsequent steps must not be fabricated. MP expansion and selection rules remain unverified.

<a id="p032"></a>

## 32 — A connection suggests a question, not a verdict

- Component topology becomes a way to think about why a test might fail.
- The source proposes a BIOS-flash response to a CX8-related error and to Bianca replacement.
- That is the author's hypothesis. A physical connection does not establish that flashing is needed, nor does flashing prove that a cause has been ruled out.

Source: [P032](transcriptions.md#p032).

**Keep in view:**

- The error string's exact spelling is unconfirmed.
- The author's BIOS-flashing inference is not validated. A connection alone does not justify flashing, and a successful flash does not by itself rule out all BIOS-related causes.

<a id="p033"></a>

## 33 — Starting the test is not the last step

- The surviving continuation checks arguments and unit information, starts the test, observes Fusion Eye and updates tracking.
- The setup story now includes monitoring and recordkeeping.
- The missing middle of the procedure remains missing; later steps do not validate an incomplete sequence.

Source: [P033](transcriptions.md#p033).

**Keep in view:**

- Steps 4–6 are absent from the visible preceding page; this continuation does not fill that gap.
- Exact pre-check argument fields and validation rules are not supplied.

<a id="p034"></a>

## 34 — Read the failure in more than one place

- A Fusion Eye failure label is followed by checking the current unit state and available event evidence.
- Power status, HMC events and sensors can answer different questions.
- Current state and historical events must be compared by time. A unit that powers on now may still have failed earlier.

Source: [P034](transcriptions.md#p034).

**Keep in view:**

- Source contains credentials and an internal address; those values are deliberately excluded.
- Wrapper-to-command equivalence is reported, not verified. Present power state does not establish the state at the time of failure.

<a id="p035"></a>

## 35 — Make the failure understandable to the next team

- ServiceMe comments are intended to carry the failure code and useful context.
- The notes also identify a role that can provide a Move tag.
- The handoff should distinguish what was observed, what is inferred and what has actually been authorized.

Source: [P035](transcriptions.md#p035).

**Keep in view:**

- Exact ticket fields and permissions need verification. Staff names omitted; no approval or move authorization is implied.

<a id="p036"></a>

## 36 — Do not let the headline become the diagnosis

- A power-failure label may be followed by a command that cannot reach BMC.
- The author recognizes the danger of repeating the label as though it already explained the fault.
- A reachability problem opens several possibilities. It does not, by itself, prove a bad BMC or a healthy power path.

Source: [P036](transcriptions.md#p036).

**Keep in view:**

- BMC reachability alone does not isolate a failed BMC; network, authentication and current unit state remain possible explanations.
- FAE is not expanded in the notes; compare the earlier uncertain FAP reading on page 19.

<a id="p037"></a>

## 37 — Passing still needs a defined meaning

- The notes describe a Pass result, reason, destination bin and comment format.
- The relationship between this pass and any remaining Run-In work is not yet clear.
- An SSD compatibility statement appears again, with a more specific Gaines version but still without a verified applicability source.

Source: [P037](transcriptions.md#p037).

**Keep in view:**

- The scope of Pass, the exact bin spelling, and its relationship to Run-In / FINT need verification.
- SSD compatibility is a reported constraint, not a verified general rule.

<a id="p038"></a>

## 38 — Connect setup with failure handoff

- The setup outline joins scanning, tracking, racking and ServiceMe.
- The failure path adds a Move tag, clearing a Fusion Eye location and choosing a Diagnostic destination.
- The author explicitly does not yet know what to do before the Move tag. That boundary should remain visible.

Source: [P038](transcriptions.md#p038).

**Keep in view:**

- A compressed observation, not an executable procedure: shutdown, handling, evidence retention, and authorization prerequisites are absent.
- Clearing a Fusion Eye location is a different operation from clearing HMC logs.

<a id="p039"></a>

## 39 — The pass path has its own handoff

- The source lists Traveler updates, removal of test accessories, blanks, Run-In records and clearing the test location.
- Unusual units are a reason to consult history and a lead.
- The sequence needs confirmation of stage, shutdown, handling and ownership before it can serve as a practical procedure.

Source: [P039](transcriptions.md#p039).

**Keep in view:**

- The exact stage, route to Run-In, required test completion, and role ownership are unresolved.
- Missing safe handling and shutdown prerequisites prevent this from being a verified step-by-step guide.

<a id="p040"></a>

## 40 — Return to the hardware with sharper questions

- The later socket notes identify power, leak sensing, sidebands, optics and HMC-related positions.
- Three confusing sideband cables receive special attention because damaged training sockets make them hard to trace.
- A training unit can teach an incorrect connection if its damage is not recorded. Missing and broken parts need explicit labels.

Source: [P040](transcriptions.md#p040).

**Keep in view:**

- Lower portion obscured. Missing socket entries 5–8 cannot be reconstructed from this image.
- Removal sequence is incomplete and unverified. Broken training connectors may distort learned topology.
- TMP is retained as written; do not silently normalize it to TPM.

<a id="p041"></a>

## 41 — Refine the second side and the vocabulary

- Bianca 1 socket notes add PCIe, M.2, power and C-Link observations.
- FAE is expanded in the notebook, while KVM and Gaines 3.0 are described differently than before.
- Later wording is more detailed, but detail alone does not settle a contradiction.

Source: [P041](transcriptions.md#p041).

**Keep in view:**

- KVM expansion conflicts with page 20; kernel is not an established expansion here.
- 3.0 engineering versus earlier A1 needs scope/date clarification.
- Socket viewpoints and the final C-Link/CX7 relationship need confirmation.

<a id="p042"></a>

## 42 — Map the power and sideband questions

- The power list attempts to account for ten connections, with BF3 counted twice.
- Backplane 0 and backplane 1 are now described with different cable destinations.
- The notes explicitly assume a PDB connection for the power list. The reference should preserve that assumption rather than draw it as a verified route.

Source: [P042](transcriptions.md#p042).

**Keep in view:**

- Count may mean ten sockets rather than ten components, because BF3 is counted twice.
- PDB destination is explicitly an assumption. Backplane 1 route differs from earlier generalized IPEX notes.
- Sketch marks are not sufficient to infer connections; front control plane may mean front control panel.

<a id="p043"></a>

## 43 — Widen the view to the test infrastructure

- The rack sketch adds cooling infrastructure, cable placement, label changes and Diagnostic responsibilities.
- FLA and FLC receive expansions that differ from the later functional account.
- Cooling readings and test durations are observations. They are not operating thresholds, specifications or scheduling guarantees.

Source: [P043](transcriptions.md#p043).

**Keep in view:**

- FLA/FLC expansions and claimed scope conflict with earlier accounts; preserve both as reports, not definitions.
- CDU readings are an observation, not operating limits or a setpoint.
- Ordering permissions, label triggers and cable placement require model/stage-specific verification. ETF is not expanded.

<a id="p044"></a>

## 44 — See the interface as a set of inputs

- The Fusion Eye sketch lists identity fields, configuration, mode, stage and component arguments.
- The author notices that a test may accept incorrect values, making input validation an important question.
- The alias inventory grows, but names and interface fields still need verified meanings and implementations.

Source: [P044](transcriptions.md#p044).

**Keep in view:**

- Credentials and internal address redacted. Overlapping images hide several fields and part of KVM branch.
- Possible stage-code associations are unverified, not firmware/SKU instructions.
- Alias names differ from earlier supplied list; underlying implementations are still missing.

<a id="p045"></a>

## 45 — Learn the shape of the workspace

- A mostly blank Fusion Eye Home sketch records two expandable groups.
- It is useful as evidence of what the author was learning to navigate.
- The group labels are uncertain; the empty drawing is not evidence of missing application functionality.

Source: [P045](transcriptions.md#p045).

**Keep in view:**

- Do not treat mirrored bleed-through as additional foreground notes. Group labels and meanings need verification.

<a id="p046"></a>

## 46 — Status, location and holds are different signals

- The fuller interface sketch includes filters, statuses, rack columns and unit cards.
- Some cards carry hold messages such as Do Not Move or Do Not Touch.
- A visible status should not be treated as permission. Hold ownership and release criteria are still unknown.

Source: [P046](transcriptions.md#p046).

**Keep in view:**

- Hold labels are observed UI content, not explained permissions. Do not infer their release criteria.
- The no-tests time, HMC unplugging context and serial-number/flash association are unresolved; none is an instruction.
- Organization/project header and potentially identifying fragments redacted.

<a id="p047"></a>

## 47 — Build a first model of the test sequence

- The notes arrange INIT, FLA, FLC, PreTest, IST, FCT and FINT into a larger sequence.
- The functional account describes inventory checks, firmware flashing and configuration, with rough time estimates.
- The FLA/FLC codes are reversed relative to an earlier page. The order, code mapping and rerun rules still need a trusted source.

Source: [P047](transcriptions.md#p047).

**Keep in view:**

- Credentials and personal details redacted. Gray block hides remaining definitions.
- FLA/FLC code associations are reversed relative to page 44; expansions on page 43 conflict with these functional descriptions.
- Timing estimates are not measured distributions or promises. The stage diagram does not resolve reruns or all routing branches.

<a id="p048"></a>

## 48 — The Traveler connects the whole repair story

- The form gathers identity, reported failure, repair notes and stage-by-stage outcomes.
- Its examples show that a unit can accumulate observations and actions across multiple teams.
- A useful history preserves the distinction between a symptom, an action and evidence that the action resolved the problem.

Source: [P048](transcriptions.md#p048).

**Keep in view:**

- An example record cannot establish a repair rule or prove that ordering Bianca was justified.
- Overlapping images hide rows. Error spellings and suffixes need source confirmation.
- Dates linked to individual record activity, identities and unique IDs excluded. Form vocabulary is preserved.
