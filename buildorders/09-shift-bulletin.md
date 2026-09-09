# BO-09 — Shift Bulletin

Status: proposed; personal digest first, shared board deferred. Initial user: green jacket for a personal digest; lead/sponsor for cross-team coordination.

## Purpose

Reduce stale updates and repeated questions between Inspection, Testing, Diagnostic, and Repair. First establish whether information is absent, hard to find, or simply not reaching the next person.

## Function

Begin with a personal digest of updates you already have access to, each tied to its authoritative source and time. A later shared bulletin would show relevant current updates with topic, team, author/owner, scope, event time, posted time, expiry/review time, status, and source reference. It supplements ServiceMe and the Traveler rather than becoming a second unit history.

A Linux CLI can be a convenient reader. It is only an interface: it does not solve shared storage, permissions, concurrent editing, ownership, or stale content.

## Gather

- Examples of late/missed updates and how they affected work; distinguish unit-specific ticket information from broader notices.
- Existing channels, their search/subscription features, and whether a useful board already exists elsewhere.
- Shared read/write access, an owner, maintenance expectations, retention, expiry, and who corrects or withdraws a post. See [Q03, Q06, and Q11](../context/open-questions.md).

## Build sequence and SIFT prompt

1. Use a small personal digest to learn which updates you repeatedly need. Label undated and unconfirmed information.
2. Improve discoverability in an existing workplace channel if that solves the problem. Stop building a separate board if it would duplicate it.
3. If a gap remains and an owner wants a pilot, draft a shared data layout and expiry/correction rules. Use an existing permitted platform where possible.
4. Pilot voluntary posting for one narrow update category. Do not require all four teams to change their habits at once.
5. Add a CLI reader only if the chosen shared source can be read through an available permitted mechanism. Shared writes require conflict handling and audit/recovery behavior. Choose no server or API until the environment is known.

> Turn the opened updates into a personal digest grouped by relevance to Testing. Preserve each source, scope, event time, and current status; mark missing dates and contradictions. Do not infer that silence means an issue is resolved. Then identify which repeated information needs could be met by an existing channel, and list the ownership and access questions a shared bulletin would require. Do not post or send anything.

Apply the [common SIFT instruction](README.md).

## Machiavellian Index

- **Pain Addressed: 4/5, provisional.** Slow updates can cause repeated work, but the specific missing channel still needs investigation.
- **Rank Needed: green for your own digest; lead/sponsor for cross-team coordination.** A shared board needs a responsible owner and access, which may be supplied by an existing process owner rather than a personal promotion.
- **Obnoxiousness: 1/5 personal; 4/5 shared.** Asking everyone to maintain your board is a substantial imposition. Reduce it with a narrow opt-in pilot, existing channels, and no attendance or employee-ranking features.

## Try, measure, and decide

Test conflicting notices, missing timestamps, an expired post, and a correction. An old notice must not silently look current. Track repeated questions avoided and posting/cleanup effort. Expand only if contributors and readers reuse it voluntarily and someone maintains it. Retire if stale or duplicate records increase confusion; a CLI interface alone is not a reason to keep it.

## Next dependency

Q11: find existing channels and an owner before designing a communal service. The personal digest can begin with information already available to you.
