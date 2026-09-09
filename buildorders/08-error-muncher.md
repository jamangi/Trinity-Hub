# BO-08 — Error Muncher

Status: proposed; retrieval design can begin, recommendations await reviewed knowledge. Initial user: green jacket for personal retrieval.

## Purpose

Turn a hard-to-interpret error into a comprehensible next investigation question, reducing random trial and error while teaching why a step matters.

## Function

A decision aid over the [error index/wiki](03-error-index-and-wiki.md). Input: code/message, emitting tool/version, test stage, and unit configuration. Output: applicable article, scoped meaning, reviewed actions, explanation, evidence needed, stop/escalation conditions, and source/revision.

The first version retrieves knowledge. Later branches ask the user for an actual observation before selecting the next reviewed action. SIFT can help author and audit the structure; runtime inference need not depend on an AI model. No command execution or automatic parts ordering is required.

## Gather

- Reviewed entries with exact match fields, applicable scope, and stable IDs.
- Structured Actions sections: prerequisites, instruction/question, rationale, expected observations, supported branches, stop conditions, and source.
- Examples of unknown codes, ambiguous matches, conflicting guidance, and outdated advice. See [Q02, Q07, and Q08](../context/open-questions.md).

## Build sequence and SIFT prompt

1. Retrieve exact code/message matches within the supplied context. If there are several meanings, ask for the missing context; show near matches as candidates only.
2. Display the article's reviewed Actions section without generating a new repair recommendation.
3. Add one short reviewed decision tree. Include unknown/inconclusive branches, a way back, and an explicit end or escalation. Reject broken references and circular paths without an exit.
4. Preserve knowledge IDs and revision links so wiki edits do not silently leave stale recommendation copies. Test changes before promoting a revised tree.
5. Optionally include selected evidence from Quick Test once both tools have stable formats. Keep article review and Quick Test observations distinct.

> From the opened reviewed knowledge entries, design a lookup for exact code/message plus context. Return the source and Actions section. For missing, ambiguous, retired, conflicting, or out-of-scope material, explain what is missing and provide no invented recommendation. Then model one supported article as a small decision tree, quoting or referencing its source actions and adding an explicit unknown-result branch. List any branch that lacks a source.

Apply the [common SIFT instruction](README.md).

## Machiavellian Index

- **Pain Addressed: 4/5.** Finding an error is only part of the problem; understanding what to investigate next matters.
- **Rank Needed: green for personal retrieval.** Published operational guidance requires knowledgeable review; the tool does not grant diagnostic authority.
- **Obnoxiousness: 2/5.** Advice from a program can sound overconfident. Present evidence and rationale, acknowledge uncertainty, and let peers choose whether it helps.

## Try, measure, and decide

Test a known scoped match, unknown code, duplicate code across tools, missing configuration, retired entry, conflicting entries, and inconclusive result. Every actionable branch must resolve to reviewed source material; missing context must not select a guessed branch. Track search-to-useful-question time and corrections. Stop if source upkeep cannot support reliable advice; keep simple retrieval if the tree adds little value. Knowledge reviewers own actions; a tool maintainer owns retrieval and branch behavior.

## Next dependency

BO-03 needs a small reviewed set with useful Actions sections. An unreviewed list of error strings can seed search, but cannot support a trustworthy decision tree.
