---
title: "LegacyVault vs. CorePLM: Change Notices Compared"
sop_id: SOP-002
version: "1.0"
status: Active
owner: Technical Communications
last_reviewed: 2025-01-10
tags: [coreplm, legacyvault, migration, change-notice, comparison]
related_sops:
  - SOP-001
  - SOP-003
  - SOP-007
---

# SOP-002: LegacyVault vs. CorePLM — Change Notices Compared

## Purpose

This SOP documents how Change Notices differ between LegacyVault and CorePLM — covering terminology, workflow, and field mapping. It is written for users who worked in LegacyVault and are transitioning to CorePLM.

## Scope

Meridian Medical employees with prior LegacyVault experience who are now working in CorePLM.

---

## Terminology

| LegacyVault | CorePLM | Notes |
|-------------|---------|-------|
| Engineering Change Request (ECR) | Change Request (CR) | Same function; field names differ |
| Engineering Change Notice (ECN) | Change Notice (CN) | Similar scope; see workflow differences below |
| *(no equivalent)* | Change Task (CT) | Replaces embedded task routing; see [SOP-001](./SOP-001-intro-to-change-objects.md) |
| ECN Originator | CN Creator | Same role |
| ECN Coordinator | CN Owner | Expanded responsibilities in CorePLM |
| Affected Items | Affected Objects | Now includes parts, documents, and assemblies |
| Implementation Date | Target Completion Date | Required field in CorePLM; optional in LegacyVault |

---

## Workflow

**LegacyVault:**
```
ECR → ECN Opened → Sequential task routing → ECN Released
```
Task assignments were embedded in the ECN routing table. Each team completed its work before the ECN moved to the next team.

**CorePLM:**
```
CR (optional) → CN Opened → Change Tasks created → CTs run in parallel → All CTs Completed → CN Released
```
Each CT has its own lifecycle and assignee. Teams work in parallel. The CN cannot be released until all CTs reach **Completed** state.

---

## Field Mapping

| LegacyVault ECN Field | CorePLM CN Field | Notes |
|-----------------------|------------------|-------|
| ECN Number | CN Number | Format differs: `ECN-XXXXX` → `CN-YYYYMMDD-XXX` |
| ECN Title | Name | Limit: 80 chars (LegacyVault) → 200 chars (CorePLM) |
| Reason for Change | Change Description | Rich text supported in CorePLM |
| Priority | Priority | Values unchanged: Critical / High / Medium / Low |
| Affected Items | Affected Objects | Document objects now supported in addition to parts |
| Planned Release Date | Target Completion Date | Required in CorePLM |
| Routing List | *(replaced by CTs)* | Create CTs manually; they do not auto-populate |

---

## Lifecycle States

| LegacyVault ECN | CorePLM CN |
|-----------------|------------|
| Draft | Draft |
| Submitted | *(removed)* |
| Under Review | Under Review |
| Approved | Approved |
| Released | Released |
| Closed | Closed |

CorePLM removes the **Submitted** state. A CN becomes visible to reviewers as soon as it is routed — not when it is saved.

---

## Historical ECNs

LegacyVault remains available in read-only mode during the transition period. Historical ECNs are not visible in CorePLM. To reference a historical ECN, access LegacyVault through the intranet shortcut.

---

## See Also

- [SOP-001: Introduction to Change Objects in CorePLM](./SOP-001-intro-to-change-objects.md)
- [SOP-003: How to Create and Release a Change Notice](./SOP-003-create-release-change-notice.md)
- [SOP-007: Troubleshooting](./SOP-007-troubleshooting.md) — common migration issues and points of confusion
