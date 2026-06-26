---
title: "How to Create and Release a Change Notice in CorePLM"
sop_id: SOP-003
version: "2.1"
status: Active
owner: Technical Communications
last_reviewed: 2025-02-03
tags: [coreplm, change-notice, procedure, change-management, release]
related_sops:
  - SOP-001
  - SOP-004
  - SOP-007
---

# SOP-003: How to Create and Release a Change Notice in CorePLM

## Purpose

This SOP covers the end-to-end procedure for creating, routing, and releasing a Change Notice (CN) in CorePLM.

## Scope

Meridian Medical employees who own or initiate CNs in CorePLM.

## Prerequisites

- CN Creator role permissions in CorePLM
- An approved Change Request (CR), or direct CN authorization from your manager
- Part numbers or document numbers for all affected objects
- Assignee names for each Change Task

For access issues, see [SOP-007: Troubleshooting](./SOP-007-troubleshooting.md).

---

## Procedure

### 1. Create the Change Notice

1. In CorePLM, go to **Change Management > Change Notices**.
2. Select **New Change Notice**.
3. Complete the required fields:

| Field | Guidance |
|-------|----------|
| **Name** | `[Product Line] – [Description of change]` (200-character max) |
| **Change Description** | State the reason for the change, root cause if known, and expected outcome |
| **Priority** | Critical / High / Medium / Low |
| **Target Completion Date** | Date by which all CTs must be completed |
| **Change Category** | Select from: Documentation / Design / Regulatory / Quality |
| **Related CR** | Enter the CR number if one exists |

4. Select **Save**. The CN number is generated and appears in the record header.

---

### 2. Add Affected Objects

1. Open the **Affected Objects** tab.
2. Select **Add**, then search by part number or document number.
3. For each object, set the **Change Action**:

| Change Action | Use when |
|---------------|----------|
| Modify | Existing item is being changed |
| Add | New item is being added to the product structure |
| Remove | Existing item is being removed from use |
| Use As-Is | Item is referenced for context only; no changes made |

---

### 3. Create Change Tasks

1. Open the **Change Tasks** tab.
2. Select **New Change Task** and complete:

| Field | Guidance |
|-------|----------|
| **CT Name** | Describe the specific work (e.g., `Update Installation Guide — Rev C`) |
| **Assigned To** | Name or team responsible |
| **CT Type** | Documentation / Engineering / Quality / Manufacturing / Other |
| **Due Date** | Must be on or before the CN Target Completion Date |
| **Instructions** | Any specific guidance for the assignee |

3. Select **Save**. Repeat for each team with assigned work.

---

### 4. Route for Review

1. Select **Actions > Submit for Review**.
2. The CN moves to **Under Review** state. Assigned reviewers receive an automated notification.
3. Monitor approvals in the **Approvals** tab.
4. When all approvers have approved, the CN automatically advances to **Approved** state.

---

### 5. Release

1. Confirm that all CTs show **Completed** status in the Change Tasks tab.
2. Select **Actions > Release** and confirm.
3. The CN moves to **Released** state.

After release, notify any stakeholders outside CorePLM per your team's communication plan.

---

## See Also

- [SOP-001: Introduction to Change Objects in CorePLM](./SOP-001-intro-to-change-objects.md) — CN lifecycle states
- [SOP-004: How to Create Parts and Documents in CorePLM](./SOP-004-create-parts-and-documents.md)
- [SOP-007: Troubleshooting](./SOP-007-troubleshooting.md) — rejected CNs, stuck CTs, release errors
