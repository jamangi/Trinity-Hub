# Trinity Hub

[Open the field notebook](https://jamangi.github.io/Trinity-Hub/) · [Release verification](notes/VERIFICATION.md)

Trinity Hub is a living workshop for learning server repair, improving testing work, and building useful tools with **SIFT**, our fictional AI assistant. Its purpose is to help a new associate become competent, comfortable, and trusted while helping more units return to service each day.

We borrow vocabulary and atmosphere from the Server Repair story. The fantasy gives us a satisfying language for thinking about work; this is an independent productivity project, not an extension of the game. **Server Repair is a read-only reference. All work for this project belongs here.**

## Purpose and direction

- **Company KPI:** repair as many units as possible each day.
- **Testing team KPI:** support repair throughput by getting units through all required tests as quickly as possible, isolating issues, and making evidence understandable to Diagnostic, Repair, and others through the ServiceMe ticket and Traveler.
- **Quality constraint:** faster work still needs valid tests and supported conclusions. A shortcut that hides a failure or creates repeat work has not helped the objective.

The growth path is **A → B → C**:

| Point | Working role | What progress looks like |
| --- | --- | --- |
| A | Level 0, green jacket | Learn the culture, components, rack and network environment, test architecture, and how to leave useful evidence. Build aids for your own work. |
| B | Level 1, blue jacket | Understand the systems well enough to explain them; use and maintain useful automation, simplifications, and searchable knowledge. Roughly three months is an aspiration, not a promised promotion date. |
| C | Trusted blue jacket, or team leader with a red jacket | Become more capable and comfortable, teach others, and maintain tools people choose to use. Leadership is an optional branch, not the only successful outcome. |

Jackets and levels are this project's working progression vocabulary. Access and responsibility must be established separately; a jacket is not permission to change a system.

## Strategy: solve a small problem you actually have

Start with personal usefulness. Try a small aid on your own work, check that it helps, and improve it quietly. Share when a teammate wants the benefit. Let broader adoption follow demonstrated value, with credit to existing contributors and an owner who can maintain it. Retire weak ideas while they are still small.

The teammate's alias collection is the model: a green jacket made their own work easier; peers wanted it; senior leads later adopted it. Build on that contribution rather than replacing it for the sake of authorship.

Prefer a clear note or template before a program. Prefer a small local prototype before a shared service. Knowledge should accumulate in one source that multiple tools can use: the error index can grow into a wiki and later supply Error Muncher. Quick Test depends on understanding the existing commands first.

SIFT can help explain, organize, draft, and eventually implement these tools using files open to it. Do not assume it can see unopened files, the whole repository, ServiceMe history, or live systems. Give it a bounded context packet and ask it to expose missing information. Its output is a draft until checked against the source and actual behavior.

## Company pain points reported so far

| Pain | Cost to the work | First response |
| --- | --- | --- |
| Weak SOPs | New associates must guess or repeatedly interrupt experienced people. | Small, sourced task cards with prerequisites and stop conditions. |
| No searchable, filterable error reference | Meanings and investigative steps are hard to retrieve. | A small error index with exact messages, scope, evidence, and sources. |
| Weak knowledge management before ordering parts | Guesswork can displace isolation and create avoidable work. | An evidence worksheet and reusable case knowledge. |
| Slow updates between teams; no central communal board reported | People repeat work or act on stale context. | Better personal handoffs first; a shared bulletin only when ownership and access are known. |

These are starting observations, not measured baselines or judgments about particular people.

## Durable foundations

We are concerned with at least four teams: **Inspection, Testing, Diagnostic, and Repair**. Other teams exist; this is not a complete organization chart. Our home perspective is Testing. Evidence, useful handoffs, and learning from verified results connect all four.

Use fictional organization and character names throughout this repository. Do not record the real employer's identity or a real-to-fiction identity key. Keep actual work records, credentials, unit identifiers, network addresses, and internal exports in their appropriate workplace systems; use synthetic examples here. Renaming an organization alone does not make a record anonymous.

Hardware lists, test meanings, routes, access, and ideas are expected to change. They belong in the working context below rather than becoming permanent claims in this README.

## Where to start

1. Read the [Build Order roadmap](buildorders/README.md) and begin with the field guide and handoff aid.
2. Use the [next-shift gathering checklist](context/open-questions.md) to collect the missing alias definitions and initial error examples.
3. Update the [environment notebook](context/environment.md), preserving what is reported, confirmed, and unknown.
4. Choose the smallest next step in one build order. Record its result before adding features.

| Location | Purpose |
| --- | --- |
| [buildorders/](buildorders/README.md) | Prioritized tool plans, dependencies, SIFT prompts, adoption limits, and success checks. |
| [context/](context/README.md) | Working observations, terminology, fiction boundary, and unanswered questions. |
| [templates/](templates/README.md) | Reusable blank notes for gathering evidence and drafting knowledge. |
| [notes/](notes/README.md) | Redacted reading transcriptions, chronological learning notes, reference material and analysis. |
| [site/](site/README.md) | Searchable HTML field notebook, published through GitHub Pages. |
| [owner_mailbox/](owner_mailbox/CLARIFICATION.md) | Focused clarification questions with tentative interpretations. |
| [print/](print/README.md) | A local, black-and-white workbook with individually printable conversation and gathering sheets. |

The repository now includes a [sourced field notebook](notes/README.md) and [HTML reading site](site/index.html), alongside plans, templates and the printable workbook. The notebook preserves a chronological learning narrative, a topic reference, an operations-focused Analysis area, and Introspection for the earlier reflections on learning and reasoning. Operational claims remain provisional. No diagnostic automation or live workplace integrations have been implemented.

## Latest knowledge intake

The 2026-09-13 image review covers 48 numbered note photographs and one illustrated Traveler. Read the [consolidation guide](notes/README.md) for source coverage and editorial boundaries. Later notes refine earlier impressions: for example, an outdated error/SOP reference was found after the initial impression that no list existed. [Open clarifications](owner_mailbox/CLARIFICATION.md) retain conflicts rather than turning later recollections into confirmed facts.

The site presents operational study material. Build orders and unrelated notes stay outside the deployed site; a public Git repository still exposes those repository files. Original images and identifying values are excluded.
