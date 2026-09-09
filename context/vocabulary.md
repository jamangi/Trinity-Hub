# Vocabulary and fiction boundary

## Borrowed story language

The read-only references are `Server_Repair_TCG_Multiplayer/docs/story/STORY.md`, `CHARACTERS.md`, and `VOICE.md` in the sibling repository. These are reference paths, not a build dependency. We borrow terms selectively and do not copy operational research, the game rules, or the campaign's access assumptions.

| Project term | Meaning here | Story relationship |
| --- | --- | --- |
| Trinity Hub | Our fictional workplace and the name of this independent project. | The story's campus belongs to Second Current Serviceworks. |
| First Look | Optional shorthand for Inspection. | Story intake inspection and triage area. |
| Rigline | Optional shorthand for Testing, our home perspective. | Story systems test area. |
| Trace | Optional shorthand for Diagnostic. | Story Failure Analysis area; this is an analogy, not proof of the local team's remit. |
| Bench | Optional shorthand for Repair. | Story repair and rework area. |
| Worklog | A narrative term for the record that carries evidence forward. | Does not create a separate ticket system; use ServiceMe and the Traveler as required locally. |
| SIFT | AI available to help with the files open to it. | Fallible assistance; never evidence of a result it has not seen. |

Characters may be used as fictional teaching voices within their established story roles. Do not map them to identifiable people. Story dates, plots, rotation privileges, and jacket artwork do not define this project's workflow or progression.

## General technical background

These terms are familiar technical vocabulary. They do **not** establish what a similarly named local alias does.

| Term | General meaning |
| --- | --- |
| BMC | Baseboard management controller; provides management functions for a computer system. |
| IPMI | Intelligent Platform Management Interface; specifies platform management interfaces and messaging. |
| FRU | Field-replaceable unit; IPMI also defines inventory information associated with replaceable units. |
| SDR | Sensor Data Record; describes sensor properties, distinct from a current reading. |
| SEL | System Event Log; an event record, not by itself a diagnosis. |
| SOL | Serial over LAN; access to serial-console communication over a network. |

References: [DMTF Redfish resource guide](https://redfish.dmtf.org/schemas/DSP2046_2020.3.html) for BMC context; [Intel IPMI specification](https://www.intel.com/content/dam/www/public/us/en/documents/specification-updates/ipmi-intelligent-platform-mgt-interface-spec-2nd-gen-v2-0-spec-update.pdf) for IPMI terminology. Neither documents the local test suite.

INIT, FLA, FLC, PreTest, IST, FCT, FBB, FINT, and QT stage labels require local definitions. Do not expand the acronyms or assume a standard test sequence from their names. In particular, `pwr`, `dry`, `sh`, and `ssh` are not enough information to infer side effects or syntax.
