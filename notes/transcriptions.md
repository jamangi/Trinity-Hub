# Redacted reading transcriptions

All 48 numbered images were visually reviewed. P015 is in [random-notes.txt](random-notes.txt); the 47 operational pages follow. T01 is the additional illustrated Traveler reference. Source images remain outside the repository. These are readable transcriptions with spacing, punctuation and some grammar normalized, not exact facsimiles. Unreadable/covered text and redactions are marked. Sketches are described in words; bleed-through is not treated as foreground writing. Operational claims remain reported and unverified.

<a id="p001"></a>

## P001 — 1.jpg

```text
Components seen:
- PCIE Cable ← PSB
- Control Panel Inside
- Front Control Panel
- PSB (Platform secure boot)
- Back Plane 1
- Back Plane 0
- NIC Card
- Bluefield 3
- PDB (Power distribution board)
- Heatsink
- BMC
- IPex Card [lettering uncertain]
- Interposer ← BMC / HMC cables [two arrows]
- 8 fans
- Fiber optic cables
- C-Link Cable
- Cable management
- Manifold (Blue / Red)
- Side band cables
```

Editorial flags:

- PSB expansion is the author's note, not yet checked against the pictured hardware.
- IPex card spelling and interposer cable labels require confirmation.

<a id="p002"></a>

## P002 — 2.jpg

```text
HMC: hardware management console
Cold plate 1, 0
M.2 or Riser Card
- Busbar Power Cable
- Busbar bracket
- Busbar

Model:
- Dell
- Service Tag Label: [UNIT IDENTIFIER OMITTED]
- Express Service Code: [UNIT IDENTIFIER OMITTED]

I might need a cable diagram.
```

Editorial flags:

- HMC expansion and the 'M.2 or Riser Card' relationship are unverified.
- Two identifying values are intentionally excluded from the repository.

<a id="p003"></a>

## P003 — 3.jpg

```text
Need to know:
- Component Name
- Component Location
- Unit Model (?)

How to train:
- map labels to areas of an image.

Notes:
- Responsible for assembling units perfectly.
```

Editorial flags:

- The image-label idea is retained as relevant component-learning material; it is not treated as unrelated AI training.

<a id="p004"></a>

## P004 — 4.jpg

```text
Component Notes:
- Asymmetrical component layout.
- Eg. M2 on Side 1, while HMC, TPM, Battery always on Side 0 (Left side).
- Some color coding: M2 (Blue/Green), HMC (black).
- The sockets on cards and cables are coded to help a tech plug it in correctly. Eg. J4, J3, J22, J23. The labels tell you where they're supposed to go.

1 million dollars per unit.
```

Editorial flags:

- Orientation and the word 'always' must be scoped to the observed configuration.
- Unit value is an unattributed estimate, not a verified price.

<a id="p005"></a>

## P005 — 5.jpg

```text
Connections:
- HMC has 2 cords, both plugged into the interposer card. 1 way plugs.
- Not only do I need locations, but also connections / cable management.

Physical nuances: Components have:
- size, color, port amount, side, exact location (between, above, below X), unique traits (e.g. [unfinished]).

Part Details:
- Manifold: Hoses that connect to the cold plate hoses. There's a blue one on left side, and red on right side.
- Bianca: Another name for motherboard.
```

Editorial flags:

- Whether Bianca names a complete assembly rather than an interchangeable motherboard remains open.

<a id="p006"></a>

## P006 — 6.jpg

```text
Cold Plate / Cold Plate hose:
- Short blue tube on left side.
- Short red tube on right side.
- Long blue tube crosses from right to left.
- Long red tube crosses from left to right.
- So both blue end up left.
- Both red end up right.

Cx7 / Cx8: Card plugged into the motherboard via 4 screws.
- Fiber optic cables plugged into the Cx7/8, 2 on each Cx.

OSFP [heading lettering uncertain]: On top half. Fiber optic comes from both OSFP cards.
- attached permanently, so damaged fiber optic cable requires replaced OSFP.
```

Editorial flags:

- OSFP spelling, permanently-attached claim, and exact replaceable assembly need confirmation.
- Tube direction requires an agreed viewing orientation; do not use this as installation guidance.

<a id="p007"></a>

## P007 — 7.jpg

```text
Answer the question:
"If I got a replacement motherboard, what components do I need to make it the left motherboard?"
- list off all left components connected to motherboard and point to their sockets.

The GPUs and CPU are integrated inside the motherboard / bianca.
[Sketch: a board-shaped outline with two GPU rectangles above a smaller central CPU rectangle.]
```

Editorial flags:

- Integrated describes the author's observation; serviceability and assembly boundaries are unconfirmed.

<a id="p008"></a>

## P008 — 8.jpg

```text
Busbar: A pair of bars which I assume acts as a bus.
- Use either Bit or Screwdriver T20. T20 only fits busbar. Only use bit drill to tighten, set to 20, and just tap it.
- There is an order. Screw from S → N-outside → M → N inside.
  4      8      12      16 [numbers beneath the sequence]
- Extends from back of bianca to PDB.

Busbar Bracket: Plastic spine that helps hold the busbar power cable.

PDB (Power distribution board): All cables from here are power cables. These cables are yellow & black. They go everywhere.
```

Editorial flags:

- Tool setting '20' has no units or tool model. Screw sequence labels and number meanings are unresolved. This is transcription only, not a fastening procedure.
- 'T20 only fits busbar' and 'all cables' are local recollections.

<a id="p009"></a>

## P009 — 9.jpg

```text
8 Fans: Counted from 1–8 from left to right. But put them back from right to left.

IPex card: First card above fans other than PDB.
- has 2 side band cables
  - black label & white label
  - cables plugged into BF3
    - BF3 plugs into a PCIE
- PSB on right side plugs into a PCIE.
```

Editorial flags:

- Fan installation order and connector identity require local verification.

<a id="p010"></a>

## P010 — 10.jpg

```text
Memory Points:
- Component at location (visual).
- Component from socket of other component (visual) (multiple).
- Component isolated (visual).
- Order of putting things back in.
- Be able to list all cards.
  - Categorize them by size.
  - Skinny (4), small [overwritten count, appears revised to 2], tiny (2), medium [revised to 3], big (5), huge (2).

6 Skinny: Interposer, NIC, Front Control Panel, M2, PCIe (0,1).
2 Small: Backplane 0, Backplane 1.
2 Tiny: TPM, Control panel.
3 Medium: BMC, HMC, Ipex.
5 Big: OSFP-0,1, PSB, BF3, PDB.
2 Huge: Biancas 0,1.
```

Editorial flags:

- The initial skinny count conflicts with the later six-item count; preserve the revision.
- These size classes are memory aids, not standard classifications.

<a id="p011"></a>

## P011 — 11.jpg

```text
Random notes [operational despite heading]:
- NIC under the BF3, and connected to the 'M2' port on Bianca 0.
- Front Control Panel: A card next to the SSD bays. Shaped similarly to a NIC, but it has a USB and HDMI port in addition to an RJ45.
- A small card, similar to TPM, which has the power button.

Motherboard Sockets:
- cable management (0)
- front control panel (0)
- C-Link (0,1)
- M2 (1) / NIC (0)
- PCIe (0,1)
- HMC (0) / cable management (1)
- TPM (0)
- Battery (0)
```

Editorial flags:

- Verify HDMI versus another display connector.
- Parenthetical 0/1 are read as board/side labels, not socket quantities.

<a id="p012"></a>

## P012 — 12.jpg

```text
Projects:
- Cheat Codes: paste my printouts into a notebook.
- Categorize every card, socket, cable, part (non-card).
- I might need a unit checklist.

Ipex has 2 med sockets, 1 flat socket, 1 short socket, 1 tiny socket.
- Interpose, backpanel [fragment].
```

Editorial flags:

- The final fragment does not establish which Ipex socket connects to which component.

<a id="p013"></a>

## P013 — 13.jpg

```text
Card [Inputs crossed out] Sockets:
Skinny:
- Interposer: Has 4 slots, 3 used.
  - 1 long socket: BMC.
  - 2 med sockets: HMC.
  - 1 unused.
- M2: Has 2 plugs.
  - 2 plugs: both into bianca.
- NIC: Has 1 RJ45, 1 med socket, 2 small sockets.
- [Front Control Panel heading crossed out]
  - 1 med socket: Bianca 0.
  - 2 small: nothing.
- Front Control Panel: has 2 med sockets.
  - 1 med socket: Bianca.
  - 1 med socket: Control Panel.
```

Editorial flags:

- The crossed-out heading makes the following medium/small socket assignments likely part of NIC, but this is an interpretation needing confirmation.

<a id="p014"></a>

## P014 — 14.jpg

```text
Small:
- Backplane 0, Backplane 1.
- Has sockets on back and front.
  - Front has 4 med sockets.
  - Back has 2 med sockets and 1 short socket.
- Front Med: SSD.
- Back Med: Ipex.

Tiny:
- TPM: has 1 plug. Small.
  - Small: plugs into Bianca.
```

Editorial flags:

- No destination is recorded for the backplane short socket.

<a id="p016"></a>

## P016 — 16.jpg

```text
Plugging Servers into Racks:
1. Place the server on the rails and push it in.
2. Plug in the black, red, green, & yellow cables if sockets exist on the server.
   - The cables are coded by letter so that we can keep track of the servers on the network view.
3. Plug in OSFP & QSFP loopback cables. Some servers don't have QSFP.
   - Left 1 OSFP connects to Left 2 OSFP.

Vocab:
- Partner Diag: Logging suite that Nvidia includes with our test suite to get more logging.
```

Editorial flags:

- Racking prerequisites, lifting rules, connection identity, and full loopback mapping are missing; this is not a complete rack procedure.
- Partner Diag's product name and exact role are unverified.

<a id="p017"></a>

## P017 — 17.jpg

```text
Some Skills:
- Assembling to specification.
- Formatting ticket.
- lift 60–100 lbs.
- Pass rate ($) [symbol uncertain].
- [crossed-out word, unreadable]
- Replacement Evidence.
- Updating work tracking: ServiceMe, Traveler, Output Excel.
- Navigating the test evidence.
- Setting up server to be racked: rack brace, loopback cables, screws; SSDs.
- Assembling each major iteration & config.
- Scanning unit label.
- Scanning OSFP / QSFP loopback cables.
- Moving unit in ServiceMe to [small note: continue test?] Q3 → Runit to run FINT.
```

Editorial flags:

- Lift range is a note about work, not authorization or a safe-lifting instruction.
- Q3/Runit spellings and the inserted status note need clarification.

<a id="p018"></a>

## P018 — 18.jpg

```text
[Margin] NvDBug must be run for any bianca problem [spelling uncertain].

Flaws:
1. SOPs are weak. No lists of the error codes, or SOPs mapped to the error codes.
   - Seems like error codes would be a better training device than symptoms, as we don't really use client symptoms, but rely on results from our tests and expected/required configuration.
Need:
- List of error codes: exists in an SOP, outdated PowerPoint.
Flaws:
2. Guesswork: Not tight isolation before ordering new parts. Testing costs time & energy.
3. Not knowing what the FRU data should look like.
4. Updating Team assignment Excel.
5. Unit stuck at a station for days, like curing/refill.
```

Editorial flags:

- 'No lists' is qualified later on the same page by discovery of an outdated list.
- NvDebug requirement is reported, not an established universal procedure.
- Delays and weak isolation are the author's observations, not measured organization-wide findings.

<a id="p019"></a>

## P019 — 19.jpg

```text
[Margin] Test rack space: Keep 56 for diag/repair. Keep 52 for FAP [last acronym uncertain].

Major Iteration: Gaines
- Gaines 1.5
- Gaines 2.0
- Gaines 3.0
- [crossed-out line, unreadable]

Configuration: Done for customer based on what they want.
E.g. Gaines 1.5 config 2, 3, 4, 6.
Gaines 2.0: B1, F1, D1.

Traveler color:
Gaines 1.5:
- Conf 2: Green
- Conf 3: Pink
- Conf 4: Red
- Conf 6: Black
Gaines 2.0:
- B1: Purple
- F1: Orange
- D1: Blue
Gaines 3.0:
- A1 [no color recorded].
```

Editorial flags:

- Rack reservations and FAP expansion may change; confirm with an owner.
- No A1 Traveler color was supplied.

<a id="p020"></a>

## P020 — 20.jpg

```text
Some more tools:
- NvDebug Suite
- Fusion Eye
[Annotation] This order may need updating.
0. Scan unit in.
Common test flow:
1. Can BMC be contacted: ipmi wait (loc) [a rack/shelf example is partly ambiguous].
2. Does pwr on.
3. Does all fru show up.
4. In ServiceMe, set server to 'waiting'.
   - Result: W-Waiting
   - Reason: 'Wait for QT3'
   - Repair Comment: '9/9 waiting for QT3-[INITIALS OMITTED]'
   - Store in Bin: <Rack location>
[Next line partly covered by a separate orange image; begins 'ipmi sol <rack location>' with uncertain numbering.]
[Orange inset, edges cropped]
- [KVM context inferred from visible sentence] opens a GUI / keyboard video mouse.
- Shows boot process; use KVM to confirm it can boot into the OS.
- Fusion Eye: click location of unit, then start test. Input the unit's SN; you confirm the SN by using the fru command on the unit's location.
- [Other inset fragment] 'you would do in the OS' [beginning missing].
```

Editorial flags:

- Source is a composite with overlapping/cropped text. Covered wording cannot be recovered from this image.
- Do not treat the sample comment date/initials as a required template.
- Command syntax, numbering, and action order remain incomplete.

<a id="p021"></a>

## P021 — 21.jpg

```text
Knowledge Consolidation Strategy:
- Most detailed description of what each test of the test suite does or can do. What component states might change via which test, for what criteria.
  - Seems flashes are based on aligning a component with its firmware details in ServiceMe.
- Most detailed set of error codes, and what each error code means.
  - Optional: I want to know what conditions trigger what error codes.
- Most detailed set of components for each major iteration, for each configuration.
```

Editorial flags:

- 'Seems' is explicitly a hypothesis about firmware data flow.

<a id="p022"></a>

## P022 — 22.jpg

```text
Flaws:
1. Not running NVDbug on bianca issues so new Biancas can be ordered. Hard to find servers needing it in ServiceMe.
2. Unit stuck at resin for days.
   - I might have to track the full passes over many days.
3. Unplugging the wrong unit.
   - Compare service tag # of failed unit to service tag on traveler before unplugging. Or Part Number.
```

Editorial flags:

- A part number may describe a model rather than uniquely identify a unit; do not accept it as equivalent to a unique service tag without confirmation.
- The passage does not establish an approved evidence requirement for ordering Biancas.

<a id="p023"></a>

## P023 — 23.jpg

```text
Command Shortener Script location:
ls
/home/repair/.config/ipmi
/home/repair/.local/bin/
/bin/cmds/ [indentation leaves full path uncertain]

How and when to update traveler [unanswered heading].

Repeated tests:
1. Get server from Diag.
2. Scan them in.
3. Put them on test racks.
```

Editorial flags:

- Paths are transcribed references, not verified files; whether /bin/cmds/ is absolute or a suffix is unclear.

<a id="p024"></a>

## P024 — 24.jpg

```text
Common Test Flow continued:
6. Add the component data you got from the scan-in step.
7. Clear hmc logs: ipmi hmc clear 53s
   - Ensures hmc doesn't fetch stale logs on fail [last word at edge].
8. Possibly: Change boot order by going into KVM, booting up, click F2 at logo, then go to the boot tab and select 'UEFI: PXE IPV4 Intel(R) Ethernet Server Adapter I210-T1'.
[Final visible line begins 'Can get ...'; remaining lower page is covered by a solid gray block.]
```

Editorial flags:

- Original image masks the lower part; hidden text cannot be transcribed.
- Log deletion can remove evidence. Preconditions, retention/export, exact command syntax and authorization must be supplied before procedure publication.
- Boot-order changes are explicitly tentative and configuration-dependent.

<a id="p025"></a>

## P025 — 25.jpg

```text
To search ServiceMe:
1. In the 'Search APPID or AppNM' [field spelling uncertain], type the stage (QT1, QT3).
2. In the Barcode field, put the unit's SN.
3. In 'Store in Bin' put the rack location.
   - Rack location always starts with BT, e.g. BT53O [O/zero ambiguous].
4. Set Result and Reason.
   - To waiting if you're about to test.
   - To fail after a test fail.
   - To pass if it passes MP FINT.
5. Add 'Waiting for QT3 - your name' to the comments, or an error code if it failed, or the fact that it is pass.
6. Click update.
```

Editorial flags:

- Despite the search heading, later steps mutate the record; split lookup and update in any guide.
- APPID/AppNM spelling, rack suffix, MP/FINT pass requirement, and valid status reasons need checking.

<a id="p026"></a>

## P026 — 26.jpg

```text
7. SSH into jumper.
   - Can use MobaXterm or PowerShell.
8. Run these commands:
   a. ipmi hmc clear on <rack location>
   b. ipmi pwr on <rack location>
   c. ipmi fru <rack locations>
      - check for errors; dummy values aren't always failures.
   d. ipmi sol activate <rack location>
9. If all is well, go to Fusion Eye and run the tests you want, such as the MP test.
   - You'll have to put in arguments for the components, the details you should have since you scanned each unit.
```

Editorial flags:

- 'hmc clear on' conflicts with the command in page 24; preserve both as unverified notation.
- These include state-changing actions; 'all is well' supplies no actual acceptance criteria.

<a id="p027"></a>

## P027 — 27.jpg

```text
To set up MobaXterm so that one window takes text input and the other window produces output:
[No instructions recorded.]

Ways to trip up:
- [crossed-out fragment]
- Only use gen 5 SSDs for testing.
  - You can identify it on the back.
```

Editorial flags:

- MobaXterm setup is an unanswered question.
- Gen 5 SSD requirement, identification markings, and configuration scope need confirmation.

<a id="p028"></a>

## P028 — 28.jpg

```text
Identifying the Config:
- Handles:
  - 1.5 has simple straight handle.
  - 2.0 has zigzag.
- Config 3 of the 1.5 has 2 QSFP ports.
- 2.0 F1 doesn't have a port for the yellow cable.
- Config 3 has all 4 ethernet ports.
- Config 6 has 3 ethernet ports.
- All configs except F1s and 3s have 3 ethernet ports.
- F1 only needs 2 SSDs: slots 0, 4.
```

Editorial flags:

- Visual clues are reported, not sufficient authoritative configuration identification.
- No exact total Ethernet count is explicitly given for F1.

<a id="p029"></a>

## P029 — 29.jpg

```text
Starting Test QT1 & QT3 in ServiceMe:
1. Search either QT1 or QT3.
2. Paste serial number or service tag into the barcode field.
   - Could scan tag if SN not available.
3. Set Result to W-Waiting.
4. Set Reason to Waiting for pre-scan/QT1.
5. Set Store in Bin to BT<rack slot>.
6. Add Repair comment to the top of comments:
   - Today's date, waiting for QT1 (or QT3).
   - Add first name & last initial.
7. Scroll down and hit update.
[Bottom covered by gray block; a fragment below step 7 is not readable.]
```

Editorial flags:

- The reason shown is QT1-specific despite the QT1/QT3 heading; do not silently reuse it for QT3.

<a id="p030"></a>

## P030 — 30.jpg

```text
- Repetitive Units (units sent back, or marked as Repair Logs: 2/2) always go to [STAFF NAME OMITTED], the level 3 tech.
  - Give it only if it fails your test.

Useful Commands: 'ipmi hmc clear <rack slot>'.
- Also do this before every test.

Moving a Unit (to different slot):
1. Unplug ethernet cables.
2. Cart it to different slot.
3. Plug in ethernet cables.
4. Tell someone with Fusion Eye access so they can paste the unit's values into the new location.
```

Editorial flags:

- Staff name excluded; routing role and conditions need confirmation.
- Movement notes omit isolation/power/cooling/lifting prerequisites and are not a complete procedure.
- Log-clear instruction conflicts in syntax/scope with other pages and needs evidence-retention rules.

<a id="p031"></a>

## P031 — 31.jpg

```text
Starting Tests in Fusion Eye:
- More of a decision tree thing.
1. Search the serial number in ServiceMe to get context on what tests to run.
   - QT1: Boot into OS, and start MP always, unless told otherwise.
   - QT3:
     1. Go to ServiceMe to read comments for context (and replaced parts).
     2. Go to Fusion Eye, click magnifying glass, insert SN into the search to see test history for more context.
2. Double click the location of your unit in Fusion Eye to open up control modal [written 'model'].
3. Click start test.
[Lower page masked by gray block.]
```

Editorial flags:

- Missing subsequent steps must not be fabricated. MP expansion and selection rules remain unverified.

<a id="p032"></a>

## P032 — 32.jpg

```text
Build Notes:
- QT3 ServiceMe tickets provide interesting training cases. The facts we have to start with. They are not reliable, so we need to confirm via the repair parts history in ServiceMe and the test history in Fusion Eye.
- Decisions may require component connection knowledge, as well as knowledge of what each test does, and for what components, when it comes to picking specific tests. E.g. FBB flashes the Bianca BIOS. Since the Cx8s are connected to the Bianca, an error code of Cx8cross_nic (or any Cx8 error) could justify flashing Bianca BIOS, because it would rule out the Bianca BIOS as the root cause. Repair work on the Bianca would also justify FBB.
```

Editorial flags:

- The error string's exact spelling is unconfirmed.
- The author's BIOS-flashing inference is not validated. A connection alone does not justify flashing, and a successful flash does not by itself rule out all BIOS-related causes.

<a id="p033"></a>

## P033 — 33.jpg

```text
Start test in Fusion Eye (continued):
7. Match your unit info into the arguments within the pre-check modal [written 'model'].
   - Make sure to select your test too.
8. Select start test: your test should start.
   - You should see it appear/update in Fusion Eye.
9. Go to Testing Tracker Excel and update the locations and status of each unit being tested.
```

Editorial flags:

- Steps 4–6 are absent from the visible preceding page; this continuation does not fill that gap.
- Exact pre-check argument fields and validation rules are not supplied.

<a id="p034"></a>

## P034 — 34.jpg

```text
Fail unit in Fusion Eye
1. Click the failed unit in the Fusion Eye view.
2. Read the singular error code at the top of the failure view.
3. Log into the jumper: [CONNECTION DETAILS OMITTED]; [PASSWORD OMITTED].
4. Commands can be run without full tests. For a power failure, example: `ipmi pwr status <rack location>`. The note equates this with an `ipmitool` power-status command; [AUTHENTICATION AND ADDRESS OMITTED].
If it powers on, check HMC logs for failure events: `ipmi hmc get <rack location>`. Some events are old; some are useful.
Check sensors: `ipmi sensor <rack location>`.
```

Editorial flags:

- Source contains credentials and an internal address; those values are deliberately excluded.
- Wrapper-to-command equivalence is reported, not verified. Present power state does not establish the state at the time of failure.

<a id="p035"></a>

## P035 — 35.jpg

```text
5. Check ServiceMe for context.
6. Update result: F – Fail; reason: QT3 Fail; comment: <date> FAIL <error code>, with extra comprehensive information.
7. Tell someone authorized to provide a Move tag. [FOUR STAFF NAMES OMITTED]. Bulk moves are preferable.
```

Editorial flags:

- Exact ticket fields and permissions need verification. Staff names omitted; no approval or move authorization is implied.

<a id="p036"></a>

## P036 — 36.jpg

```text
Ways to trip
Relying on the Fusion Eye error without confirming through the jumper may propagate misinformation.
Example: a power_fail appears, but `ipmi pwr status <rack location>` cannot contact BMC. The root cause may concern BMC health rather than power.
Rack 52: FAE. Rack 56: Diagnostic / Repair.
```

Editorial flags:

- BMC reachability alone does not isolate a failed BMC; network, authentication and current unit state remain possible explanations.
- FAE is not expanded in the notes; compare the earlier uncertain FAP reading on page 19.

<a id="p037"></a>

## P037 — 37.jpg

```text
Pass unit
Same ServiceMe updates, but result: Pass; reason: Pass; bin: RH01 [O/0 uncertain]; comment: <date> Full Test Pass – <name>.
Cannot use a generation 4 SSD with Gaines 2.0.
```

Editorial flags:

- The scope of Pass, the exact bin spelling, and its relationship to Run-In / FINT need verification.
- SSD compatibility is a reported constraint, not a verified general rule.

<a id="p038"></a>

## P038 — 38.jpg

```text
Set up unit for testing (full)
1. Scan units; may require OSFP / QSFP. Keep data in Notepad.
2. Scan Units tab in the Test Tracker.
3. Rack the unit.
4. ServiceMe.
Tear down after failure (Move)
1. Unplug and cart.
2. Clear the location in Fusion Eye.
3. Diagnostic rack: bin in the ServiceMe allocation tool can be used. Check Team Assignments Excel for the intended Diagnostic rack. [Test Tracker crossed out.]
Still do not know how to handle units before a Move tag.
```

Editorial flags:

- A compressed observation, not an executable procedure: shutdown, handling, evidence retention, and authorization prerequisites are absent.
- Clearing a Fusion Eye location is a different operation from clearing HMC logs.

<a id="p039"></a>

## P039 — 39.jpg

```text
For an unusual unit, search ServiceMe by tag and ask a lead.
Tear down after pass
1. Unplug / cart.
2. Update Traveler.
3. Remove rails and SSD.
4. Add blanks.
5. Add Run-In in ServiceMe.
6. Clear Fusion Eye.
```

Editorial flags:

- The exact stage, route to Run-In, required test completion, and role ownership are unresolved.
- Missing safe handling and shutdown prerequisites prevent this from being a verified step-by-step guide.

<a id="p040"></a>

## P040 — 40.jpg

```text
[Top fragment] 1. Bianca. 2. PDB. 3. Backplane.
Remove Bianca order: 1. Power cable. 2. Manifold. 3. C-Link. 4. Cable management.
Bianca sockets: side 0
1. Power cables: 1, next to fiber-optic socket → PDB.
2. Leak sensor: 1 (2 actually), left of fiber-optic socket → cold plate → leak sensor.
Sideband: white socket left of skipped fan socket → BF3. [“The other white sockets are unused” crossed out.]
JSB2: socket left of first skipped fan socket.
3. Fiber optics: 2, in bridge attached to CX7 → OSFP 0.
4. PCIe: 2. [Continuation obscured by overlapping image.]
Bianca 0 sockets (continued): 9. HMC: big socket left of cold plate. 10. TMP [as written; possibly TPM]: white socket between HMC socket and cold plate.
Notes: Three sideband cables are confusing me and difficult to track by eye. Their sockets are often broken in the training unit; this requires direct attention.
```

Editorial flags:

- Lower portion obscured. Missing socket entries 5–8 cannot be reconstructed from this image.
- Removal sequence is incomplete and unverified. Broken training connectors may distort learned topology.
- TMP is retained as written; do not silently normalize it to TPM.

<a id="p041"></a>

## P041 — 41.jpg

```text
BMC – gets all [fragment]. KVM – kernel [as written].
Gaines: 1.5, 2, 3.0. Configurations: 1.5 (2, 4, 6, 3); 2 (F1, B1, D1); 3.0 (engineering).
TSC – scripts. FAE – Failure Analysis Engineering.
Bianca 1
1. PCIe: 2 → PCIe riser 1. Two big sockets behind M2.
2. M2: two little sockets between PCIe and cold plate.
3. Power: left of right fiber optic → [no destination supplied].
4. PCIe: to the right of cold plate and “NIC” socket → PSB PCIe.
5. [Sideband crossed out] C-Link / CX7: on left side of cold plate (from the back) → [no destination supplied].
```

Editorial flags:

- KVM expansion conflicts with page 20; kernel is not an established expansion here.
- 3.0 engineering versus earlier A1 needs scope/date clarification.
- Socket viewpoints and the final C-Link/CX7 relationship need confirmation.

<a id="p042"></a>

## P042 — 42.jpg

```text
Sideband cables [sketch]
Bianca 0: a vertical mark labeled OSFP and two horizontal marks labeled BF3 and Interposer.
Bianca 1: a vertical mark labeled OSFP and two unlabeled horizontal marks. No complete paths drawn.
Power
Components that have a power socket: appears to be 10; presumably connect to the PDB.
1. Bianca 0. 2. Bianca 1. 3. BF3 ×2. 4. IPEX. 5. PCIe 0. 6. PCIe 1. 7. Backplane 0. 8. Backplane 1. 9. Front control plane [as written].
Backplane 0: two cables to IPEX; one power cable.
Backplane 1: two cables to PSB; one power cable.
```

Editorial flags:

- Count may mean ten sockets rather than ten components, because BF3 is counted twice.
- PDB destination is explicitly an assumption. Backplane 1 route differs from earlier generalized IPEX notes.
- Sketch marks are not sufficient to infer connections; front control plane may mean front control panel.

<a id="p043"></a>

## P043 — 43.jpg

```text
Diagnostic KPI: units; [second bullet blank].
Fusion Eye: test software; remote connection to test racks. Can connect to network via SSH.
ETF [sketch of cooling distribution unit, CDU].
Test rack tests: stress test; a few hours for full test.
Reprint label if changes to BMC or NIC.
Ethernet cable colors: red [blank]; yellow far right; black far left; green [blank].
Diagnostic: order anything except Bianca.
ETF tests:
FLA: Full load analysis; CX8 / CX7, BF3, any component we can replace.
FLC: Full load cycle; for things we cannot replace, like CPU.
Both are more like flashing mechanisms but can show failure.
Flash: update; helpful.
CDU: 149–150 kPa; approximately 24 °C; green light must be on.
Test rack cables: QSFP loopback cable.
```

Editorial flags:

- FLA/FLC expansions and claimed scope conflict with earlier accounts; preserve both as reports, not definitions.
- CDU readings are an observation, not operating limits or a setpoint.
- Ordering permissions, label triggers and cable placement require model/stage-specific verification. ETF is not expanded.

<a id="p044"></a>

## P044 — 44.jpg

```text
[LOGIN, PASSWORD AND NETWORK ADDRESS OMITTED].
I need to know what each component does for the system.
Fusion Eye [form sketch]: Product; SKU; Serial Number; Location IP; Location; Employee ID; Mode (MP, ENG, ENGD, QC, RRDO [last labels uncertain]); Testing Stage (FBB).
SKU changes: FLA (NH), FLC (NX), PreTest (VA), IST (VT), FCT (N2), FINT (TP) [codes transcribed as seen; verify].
Arguments: OS_MAC; BMC_MAC; ServiceTag_Label; OSFP_Left; OSFP_Right; QSFP_Left; QSFP_Right.
Additional arguments: PDB_BSN; PDB_CPN; NIC_BSN_1; [overlap hides continuation]; E1S_BSN_[unclear]_CPN; E1S_BSN_2; E1S_BSN_2_CPN; OSFP_0; OSFP_0_CPN; OSFP_1_CPN; OSFP_1.
The tests allow you to flash incorrect values.
Pre-Test Failure Catalogue: [empty bullet].
Commands: ipmi — bmc, dry, fw, help, mac, power, sdr, sn, ssh, custom, fru, get, hmc, mc, pwr, sensor, sol, wait.
Example descriptors: FRU Device Description; Board MFG Date; Board MFG; Board Product; Board Serial; Board Part Number.
After KVM: if Dell appears, log into server and talk to BMC [continuation obscured]. If black background: [LOGIN AND PASSWORD OMITTED]; click remote, then launch.
```

Editorial flags:

- Credentials and internal address redacted. Overlapping images hide several fields and part of KVM branch.
- Possible stage-code associations are unverified, not firmware/SKU instructions.
- Alias names differ from earlier supplied list; underlying implementations are still missing.

<a id="p045"></a>

## P045 — 45.jpg

```text
Fusion Eye Home [interface sketch]
Two collapsed-looking groups: L_DOA and 2L [labels uncertain].
The remainder of the foreground drawing is blank. Faint reverse-page writing is visible through the sheet.
```

Editorial flags:

- Do not treat mirrored bleed-through as additional foreground notes. Group labels and meanings need verification.

<a id="p046"></a>

## P046 — 46.jpg

```text
HMC – unplugged on ETF space [compressed fragment]. Review priority unit models. Serial-number issue → flash. No tests after 12 [suffix uncertain].
[ORGANIZATION / PROJECT HEADER OMITTED] [Fusion Eye interface sketch]
Location filter. Status: Testing, Paused, Failed, TimeOut, Unfinished, CheckIn, Skip. Stamp: L, R, M, C, 99, XX.
Groups: 3L_RMA; 3R_RMA.
Rack columns: 51, 52, 53, 54, each labeled Gaines 2.0. Slot examples show letters and address-like fragments [ADDRESS FRAGMENTS OMITTED].
Example unit cards: “Do Not Move,” Gaines 2.0–F1, FBB, and “Do Not Touch / 5 Strike,” Gaines 2.0–D1, INIT. [IDENTIFYING / ADDRESS-LIKE VALUES OMITTED].
Thirteen rows are sketched.
```

Editorial flags:

- Hold labels are observed UI content, not explained permissions. Do not infer their release criteria.
- The no-tests time, HMC unplugging context and serial-number/flash association are unresolved; none is an instruction.
- Organization/project header and potentially identifying fragments redacted.

<a id="p047"></a>

## P047 — 47.jpg

```text
QT1 → PreTest, IST, FCT; INIT written above PreTest.
QT3 → INIT.
[USER ID, EMAIL AND PASSWORD NOTE OMITTED].
All test: INIT → FLA → FLC → PreTest [Prescan crossed out] → IST → FCT → FINT (full test).
QT3-1 bracket appears over FLA / FLC / PreTest; QT3-2 over IST / FCT. Some bracket labels are overwritten.
Observed time estimates: INIT 5–20 min; FLA 40–66 min; FLC 15–45 min; PreTest 45–60 min.
Codes written underneath: FLA NX; FLC NH; PreTest VA.
INIT function: happens before each test; ensures all components are detected by BMC.
FLA function: flashing components, such as firmware versions; fetches correct values from ServiceMe.
FLC function: configuring components; puts things in the mode required by our environment.
PreTest function: sets up testing environment; a lot of manual tests, indicated by an “M” in Fusion Eye. [Remaining lower section covered by gray block.]
```

Editorial flags:

- Credentials and personal details redacted. Gray block hides remaining definitions.
- FLA/FLC code associations are reversed relative to page 44; expansions on page 43 conflict with these functional descriptions.
- Timing estimates are not measured distributions or promises. The stage diagram does not resolve reruns or all routing branches.

<a id="p048"></a>

## P048 — 48.jpg

```text
WUR Receiving Traveler TAG [hand-drawn form]
Receive Date: <date>. Country: USA. Model Name: Gaines 1.5, configuration 6, [CUSTOMER LABEL OMITTED]. PN: [PART VALUE OMITTED]. S/N: <serial>. Receiving status: RC01 – Normal Used.
Service Tag: [UNIT IDENTIFIER OMITTED]. Machine Model; Unit Accessories. Depot No: [IDENTIFIER AND CODE DRAWING OMITTED]. SR No: [IDENTIFIER AND CODE DRAWING OMITTED].
Customer Failure Description: dated example of a partner_Diag_IST_Test_[unclear suffix] failure [record date omitted].
Repair Notice: examples of replacing OSFP_1 and OSFP_0 and sending to QT3. [STAFF NAMES / INITIALS AND RECORD DATES OMITTED].
Inspection: Pass / Fail; Fail marked; failure comment: fail cold plate.
Prescan: Pass / Fail; failure comment: WIST_SSH_ConnectionCreate – <name>.
Diagnostic: Pass / Fail; failure comment: HMC logged PWR_FAIL, FBVDDP_1 [uncertain] error; order Bianca_0–AB [as written].
[Overlap hides next row.] Visible fragment: QT3 Fail: FCT No Valid Conn – [INITIALS OMITTED].
Lower left fragments: Leak Test; Refill; TIM curing [left edge cut]; QC; OBA. Most lower area is blank.
```

Editorial flags:

- An example record cannot establish a repair rule or prove that ordering Bianca was justified.
- Overlapping images hide rows. Error spellings and suffixes need source confirmation.
- Dates linked to individual record activity, identities and unique IDs excluded. Form vocabulary is preserved.

<a id="t01"></a>

## T01 — traveler_img.png

Illustrated WUR Receiving Traveler TAG, with Language and NormalRMA headings. Fields: Received Date; Country; Model Name; configuration; S/N; PN; Receiving status; Service Tag; Machine Model; Unit Accessories; Depot No; SR No; Customer Failure Description; Repair Notice. Barcode / QR-like graphics accompany Depot No and SR No. Stage rows: Inspection, Pre scan, Diagnostic, Repair, Leak test, Refill, Tim curing, QC, OBA. Each stage has Pass, Fail and Failure comment fields. Example vocabulary includes Gaines 2.0, configuration B1 and RC01 – Normal Used. [CUSTOMER LABEL, DATES, IDENTIFIERS AND CODE GRAPHICS OMITTED].

- An illustrated reference, not independently verified as the current official form. Do not infer stage order solely from row order.
- TIM / Tim, WUR, QC, OBA and NormalRMA need local definitions.
