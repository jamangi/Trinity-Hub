# BO-02 — Handoff Scribe

Status: proposed; the blank template is ready. Initial user: green jacket.

## Purpose

Reduce the time the next person spends reconstructing what happened. A clear ticket or Traveler update is a small contribution that directly supports Diagnostic and Repair.

## Function

SIFT converts your chronological notes into a concise draft: context, symptom, actions, observed results, interpretation, remaining uncertainty, and the next question. It flags missing information and contradictions. You review and enter the draft into the existing record; it does not post automatically or create a competing source of truth.

## Gather

- Required ServiceMe and Traveler fields and one accepted handoff structure.
- Your own action notes, times, exact errors, current unit state, and references to output in the workplace system.
- What each receiving team actually needs, especially repeated clarification requests. See [Q06](../context/open-questions.md).

## Build sequence and SIFT prompt

1. Use the [handoff template](../templates/handoff.md) manually for a single case.
2. Ask SIFT to draft from those notes and list omissions without filling them in.
3. Add a consistency check for conflicting times, stale status, an action without a result, and conclusions stronger than the evidence.
4. Only after the local formats are known, produce separate ServiceMe and Traveler drafts from the same facts.

> Draft a short handoff using my opened notes and the supplied required fields. Preserve event order. Separate what I observed, what I changed, what I suspect, and what remains unknown. Include the current state and next question. Do not invent an action, result, diagnosis, timestamp, or recipient. List missing required fields after the draft. Show any conflict between the draft and the source notes.

Apply the [common SIFT instruction](README.md).

## Machiavellian Index

- **Pain Addressed: 4/5.** Lost context causes repeated work and slow handoffs.
- **Rank Needed: green.** Improving your own notes fits your role. Changing required team fields belongs to the process owner.
- **Obnoxiousness: 1/5.** Better personal updates need no campaign. Offer the template if a peer finds it helpful.

## Try, measure, and decide

Use a synthetic case with missing timestamps and conflicting results: both gaps must remain visible. Compare real drafts with source notes before posting manually. Track drafting time, correction effort, and follow-up clarification. Keep it if records become clearer without extra burden. Retire the AI step if editing takes longer than writing. You maintain the personal prompt; the existing record owner retains control of required fields.

## Next dependency

The generic template can be tried now with synthetic notes. Confirm Q06 before treating its fields as sufficient for workplace handoffs.
