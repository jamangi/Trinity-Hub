# BO-01 — Rigline Field Guide

Status: personal study prototype implemented; local facts still unverified. Initial user: green jacket.

The [field notebook](../notes/README.md) now provides a sourced narrative, searchable topic reference and explicit unknowns from the 2026-09-13 image intake. This completes an initial learning and retrieval layer, not a verified training authority. The next gate is resolving one [clarification](../owner_mailbox/CLARIFICATION.md) against an applicable source and trying the guide on a repeat learning question.

## Purpose

Reduce the unfamiliarity that makes every task slow: component names, what they do, how systems connect, and whom to ask. Better understanding makes later automation easier to judge.

## Function

A personal, searchable learning notebook with short explanations, source references, an unknowns list, and recall questions. Start as one document. SIFT turns reviewed material into explanations and quizzes, then checks your explanation against that material.

## Gather

- One applicable hardware diagram or component reference, configuration labels, and permitted component examples.
- A description of the rack, network, BMC, host, test controller, and test-suite relationships; mark missing links rather than drawing guessed connections.
- Roles of the four teams, ordinary handoff expectations, appropriate escalation routes, and the local conventions a newcomer needs.
- Test-stage definitions and a trusted source for each. See [Q03–Q05 and Q07](../context/open-questions.md).

## Build sequence and SIFT prompt

1. Create sections for culture/team roles, components/functions, rack/network architecture, test stages, and evidence/handoffs. Seed only the [reported environment](../context/environment.md); keep it visibly provisional.
2. Add one sourced concept at a time using: what it is → what it connects to → what can be observed → what the observation does not establish.
3. Add brief recall questions and an end-of-shift list of questions worth asking. Track demonstrated understanding rather than pages read.
4. Later, add a clickable component map or a local search view if document search becomes inadequate. Keep the knowledge usable without the interface.

> Build a personal study page from the opened sources. Explain one component or system relationship at a beginner level, identify which details are general and which are local, and give three questions that test understanding. Put unsupported connections in an unknowns list. Wait for my answers before supplying the answer key. Finish with one useful question to ask an experienced teammate.

Use the [common SIFT instruction](README.md) with this prompt.

## Machiavellian Index

- **Pain Addressed: 4/5.** Newcomer confusion affects many daily tasks.
- **Rank Needed: green.** Learning your own work fits the role; shared training material needs a knowledgeable reviewer.
- **Obnoxiousness: 1/5.** A private notebook imposes nothing. Share a useful page when asked and credit whoever explained it.

## Try, measure, and decide

Check every local explanation against its source. Try explaining a familiar unit's path and one component's function without the notes, then identify the gaps. Track repeated questions and lookup time. Expand when pages are reused; simplify if maintaining the notebook becomes the main activity. You own the personal notes; a shared guide needs an agreed reviewer and revision date.

## Next dependency

Start the outline now. Obtain one trusted component reference and resolve one question from the architecture section before drawing a complete map.
