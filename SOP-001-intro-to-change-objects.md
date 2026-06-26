---
title: "Introduction to Change Objects in CorePLM"
sop_id: SOP-001
version: "1.2"
status: Active
owner: Technical Communications
last_reviewed: 2025-01-10
tags: [coreplm, change-management, onboarding, change-request, change-notice, change-task]
related_sops:
  - SOP-002
  - SOP-003
---

# SOP-001: Introduction to Change Objects in CorePLM

## Purpose

This SOP describes the three change management object types in CorePLM — **Change Requests (CRs)**, **Change Notices (CNs)**, and **Change Tasks (CTs)** — and explains how they relate to each other.

## Scope

All Meridian Medical employees who initiate, contribute to, or approve controlled changes in CorePLM.

---

## Change Object Types

### Change Request (CR)

A CR initiates the change process. It captures the reason for a proposed change, the scope of affected items, and the requestor. A CR does not authorize a change — it opens a review that determines whether a CN should be created.

> Note: Not all CRs result in a CN. A CR may be closed as "No Action Required" or merged with an existing CN.

---

### Change Notice (CN)

A CN is the formal authorization document for a controlled change. It defines the full scope of the change, lists all affected objects, specifies the implementation timeline, and serves as the parent object for all CTs.

CN lifecycle states: **Draft → Under Review → Approved → Released → Closed**

A change is not authorized until the CN reaches **Released** state.

---

### Change Task (CT)

A CT is a discrete work assignment within a CN. Each CT is assigned to a specific team or role. Multiple CTs can be active simultaneously within a single CN.

Common CT types at Meridian Medical:

| CT Type | Assigned To |
|---------|-------------|
| Documentation | Technical Communications |
| Engineering | Product Engineering |
| Quality | Quality Assurance |
| Manufacturing | Manufacturing Engineering |

---

## Object Hierarchy

```
Change Request (CR)          ← optional
    └── Change Notice (CN)
            ├── Change Task (CT)
            ├── Change Task (CT)
            └── Change Task (CT)
```

A CR is required for all externally initiated change requests (customer feedback, supplier notifications, regulatory communications). For internally identified changes, a CN may be created directly.

---

## See Also

- [SOP-002: LegacyVault vs. CorePLM — Change Notices Compared](./SOP-002-legacyvault-vs-coreplm-changes.md) — how these objects map to LegacyVault equivalents
- [SOP-003: How to Create and Release a Change Notice](./SOP-003-create-release-change-notice.md)
- [SOP-007: Troubleshooting](./SOP-007-troubleshooting.md)
