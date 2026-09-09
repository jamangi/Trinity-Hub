# BO-06 — Command Companion

Status: proposed; alias definitions missing. Initial user: green jacket.

## Purpose

Understand and preserve the teammate's alias contribution, make it easier to learn, and establish the command knowledge Quick Test will require.

## Function

A searchable reference for the existing aliases: actual definition, plain-language purpose, arguments, execution target, dependencies, side effects, outputs, exit behavior, and examples. Start as documentation, not a replacement script or shell modification.

## Gather

- The contributor's current script, version, installation instructions, and preferred attribution.
- Definitions and helper files, shell/profile context, and relevant executable versions.
- Representative outputs for success, failure, inaccessible target, and interruption; clarify which steps interactively prompt or wait indefinitely.
- Which commands read state, change state, or have effects that remain unknown. See [Q01 and Q03](../context/open-questions.md).

## Build sequence and SIFT prompt

1. Inventory the definitions using the [alias record](../templates/alias-record.md). Recognize aliases, functions, scripts, and calls to helpers separately.
2. Explain each supplied body without executing it. Preserve unresolved external helpers as dependencies.
3. Have the contributor or an experienced reviewer check purpose and effects. Compare representative output with the explanation.
4. If wanted by the contributor, draft improved help and installation/removal documentation for the existing distribution. Avoid conflicting copies and overwritten shell profiles.
5. Hand only reviewed command contracts to Quick Test. Do not assume interactive aliases will resolve inside a noninteractive script.

> Explain the opened alias/function definitions without executing them. For each, fill the alias-record template, trace supplied helpers, identify arguments and target, and classify effects as observational, state-changing, or unknown. Point out missing dependencies and possible interactive behavior. Do not infer behavior from the alias name. Preserve the original contributor's attribution and suggest documentation improvements separately from implementation changes.

Apply the [common SIFT instruction](README.md).

## Machiavellian Index

- **Pain Addressed: 3/5.** The aliases already save typing; understanding and reliable documentation address the remaining pain.
- **Rank Needed: green.** Learning your existing tools is appropriate. Shared changes should be coordinated with their maintainer.
- **Obnoxiousness: 1/5.** Help the existing project, credit its author, and avoid claiming the collection as your invention.

## Try, measure, and decide

Check that every supplied definition has an entry and every explained argument/effect is supported. Compare examples against actual supplied output. Track lookup time and misunderstandings. Keep documentation alongside the same script revision; retire outdated copies. If the existing help is already sufficient, contribute corrections there and stop building a separate companion.

## Next dependency

Q01: actual definitions, not just the 18 reported names. No command implementation or installation recipe can be derived reliably from names alone.
