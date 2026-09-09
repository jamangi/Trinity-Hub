# BO-07 — Quick Test

Status: proposed; live implementation blocked on command contracts and local criteria. Initial scope: green-jacket offline prototype, expanding with demonstrated competence and established access.

## Purpose

Find an actionable investigation entry point before committing to a long suite. Reduce manual repetition while preserving the evidence showing which check revealed the anomaly.

## Function

A bounded preflight that eventually runs a reviewed sequence of observational checks for one supported configuration and reports each check's command/version, time, result, supporting output, and applicable expectation. It cannot certify a unit, replace required suites, or infer that all components are healthy from an inventory listing.

Begin by reading saved output. Add live checks only after their commands, effects, targets, and interpretation are known. Power changes, firmware flashing, configuration changes, and automatic repairs are outside the initial design.

## Gather

- [Command Companion](06-command-companion.md) contracts, including exact definitions, dependencies, effects, output, exit codes, and timeouts.
- A reviewed checklist with prerequisites, order, stop conditions, and behavior when a suite is already running.
- Expected inventory, versions, or other criteria for the supported configuration; record each expectation's source and revision.
- Target selection/identity checks, permitted execution location, and representative outputs including failures and partial results. See [Q01, Q03, Q07, and Q09](../context/open-questions.md).

## Build sequence and SIFT prompt

1. Specify a report with distinct states: **expected**, **anomaly**, **unknown**, **skipped**, and **execution error**. A missing or unparsable response must never count as expected. Record the reason for every skipped step.
2. Build an offline parser for supplied saved-output examples. Show raw evidence beside interpretation and the rule that produced it.
3. Add one reviewed observational check, with explicit target identity, bounded timeout, and captured exit status. Require the appropriate unit state and stop on target ambiguity.
4. Extend only to a short, locally reviewed sequence. The suggested reachability → power-state observation → inventory order is a candidate, not yet an executable specification. If a prerequisite fails, report dependent checks as skipped. A reachability failure does not by itself prove faulty hardware.
5. Compare a controlled personal pilot with the same checks performed manually. Add a handoff-ready report and version information after results agree.
6. Only after useful voluntary peer trials, prepare installation, removal, known limitations, and a maintenance owner. New configurations require their own reviewed baselines.

> Using the opened command contracts and expected-output references, design an offline Quick Test report and parser for one stated configuration. Do not execute commands. For every interpretation, name the supporting output and baseline source. Distinguish anomalies, missing data, unsupported formats, and command failures. List the exact unresolved inputs that prevent a live implementation. After the offline cases are reviewed, propose the smallest observational live check as a separate objective.

Apply the [common SIFT instruction](README.md).

## Machiavellian Index

- **Pain Addressed: 5/5, provisional.** Repeated prechecks and late-discovered problems may waste substantial time; measure the actual avoidable portion.
- **Rank Needed: green for offline development and existing personal observational work.** Live scope depends on command review and actual access. Wider use needs an experienced maintainer, not merely a jacket change.
- **Obnoxiousness: 2/5.** A second automation layer can seem duplicative. Reuse the teammate's contribution with credit and show your own measured benefit before offering installation.

## Try, measure, and decide

Before live use, verify expected output, anomaly, timeout, unreachable target, malformed output, unsupported configuration, missing dependency, and failed prerequisite. Ensure no fixture can turn missing evidence into a pass. Compare live reports with manual observations under the same conditions. Track precheck time, false alarms, missed known anomalies, and maintenance effort; suite duration is not automatically time saved.

Stop a rollout if results disagree, target identity is ambiguous, or effects are uncertain. Retire it if manual checks are faster or the tool is routinely ignored. You maintain the prototype; peer distribution needs someone to track command and baseline changes.

## Next dependency

Obtain Q01 definitions and Q07/Q09 criteria for one narrow scope. Until then, the useful deliverable is the report design and collection template, not an invented script.
