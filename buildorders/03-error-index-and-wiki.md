# BO-03 — Error Index → Troubleshooting Wiki

Status: proposed; schema ready, initial error content missing. Initial user: green jacket.

## Purpose

Make an error's meaning, relevant evidence, and reviewed investigation steps retrievable. This addresses the missing reference without needing a company-wide platform on day one.

## Function

Begin with a small personal index linked to structured knowledge entries. Search exact codes and message text; filter by emitting tool, version, stage, Gaines generation/configuration, component, and review status. An unknown meaning is a valid entry. Error codes are scoped by their source, not presumed globally unique.

The same entries can grow into a wiki and supply [Error Muncher](08-error-muncher.md). Proposed fields live in the [knowledge template](../templates/knowledge-entry.md), including a stable entry ID, sources, applicability, and an **Actions** section.

## Gather

- An initial set of exact codes and messages with tool, version, stage, and configuration context.
- Applicable meanings, reviewed actions, evidence, unresolved cases, and counterexamples where the apparent fix did not work.
- What search/edit/share features are already available and who could review entries. See [Q02, Q03, and Q08](../context/open-questions.md).

## Build sequence and SIFT prompt

1. Capture a few useful entries; do not wait for a complete catalog. Preserve unknowns and original wording.
2. Use document search and an index table first. Add structured filtering in the simplest available local format when the records justify it.
3. Add links between errors, components, procedures, and verified case summaries. Keep one knowledge source, not separate wiki and Muncher copies.
4. Pilot peer reading. For communal creation, reading, updating, and deletion, first confirm a permitted shared location, revision history, correction ownership, and access model. Evaluate existing SharePoint capability before choosing a new platform.
5. In shared use, let contributions enter as drafts; reviewers mark operational guidance current. Retire incorrect guidance promptly and preserve appropriate revision history. Define who can remove records and how mistakes are recovered.

> Organize the opened error material into the knowledge-entry template and an index. Preserve each exact code and message. Keep entries separate when tool, version, stage, or configuration changes their meaning. Identify duplicates for review, without merging uncertain cases. Put unknown meanings and unverified actions in clearly labeled fields. Produce no troubleshooting recommendation without an applicable source.

Apply the [common SIFT instruction](README.md).

## Machiavellian Index

- **Pain Addressed: 5/5.** Search failure affects investigation repeatedly.
- **Rank Needed: green for a personal reference.** A shared wiki needs an agreed knowledge owner and editing access; blue-jacket experience may help stewardship but does not grant permission.
- **Obnoxiousness: 1/5 personal; potentially 3/5 shared.** Earn use with a few useful answers. Avoid announcing a replacement for everyone's knowledge or assigning peers documentation work.

## Try, measure, and decide

Verify retrieval of an exact match, an unknown code, and the same code from two different tools. Confirm filters exclude inapplicable guidance and retired actions. Track time to find a relevant entry, corrections, and maintenance. Expand when people reuse entries; retire duplicate interfaces if an existing search system solves the problem. You own the initial index; shared use needs a named workplace owner and a stale-content review habit.

## Next dependency

Obtain the first partial error set (Q02). Until then, keep a blank schema and synthetic retrieval cases; do not populate guessed error meanings.
