---
title: "Troubleshooting"
sop_id: SOP-007
version: "1.0"
status: Active
owner: Technical Communications
last_reviewed: 2025-02-20
tags: [coreplm, troubleshooting, errors, access, migration, emanuals]
related_sops:
  - SOP-001
  - SOP-002
  - SOP-003
  - SOP-004
  - SOP-005
  - SOP-006
---

# SOP-007: Troubleshooting

## Purpose

This SOP addresses common errors, access issues, and edge cases across CorePLM workflows. Each SOP in this set covers the standard workflow; this document is the single reference for situations that fall outside it.

## Scope

All Meridian Medical employees using CorePLM.

---

## Access and Permissions

**I completed LMS training but my CorePLM access has not been activated.**  
LMS completion triggers an automated access request. Allow 1 business day. If access is not active after that, submit a ticket through the IT Service Desk.

**I can log in but do not see the Change Management module.**  
Your role does not include Change Management permissions. Submit a PLM Access Request through the IT Service Desk and specify the CN Creator or CT Assignee role.

**I do not have eManuals Publisher permissions.**  
Submit a PLM Access Request through the IT Service Desk. Specify the eManuals Publisher role and your manager's name.

---

## Change Notices

**My CN is stuck and I cannot release it.**  
The CN cannot be released until all Change Tasks reach **Completed** state. Open the **Change Tasks** tab and check for any CT in **Draft**, **In Progress**, or **On Hold** state. Contact the assigned team to resolve.

**A reviewer rejected my CN. What do I do?**  
A rejected CN returns to **Draft** state. Open the **Approvals** tab to read the rejection comments, address the issues, and select **Submit for Review** again.

**An approver is unavailable and my CN is waiting on their response.**  
Contact your manager to arrange a delegate approval. Delegate approvals must be documented per your team's approval policy.

**I added the wrong object to a released CN.**  
Released CNs cannot be edited. Open a new CN with **Change Action: Remove** for the incorrect object and **Change Action: Add** for the correct one.

**A CR was closed as "No Action Required" but the change is still needed.**  
Open a new CR. Include a reference to the closed CR number in the Change Description.

---

## Parts and Documents

**I found a duplicate part in CorePLM.**  
Do not create another part. Contact the part owner of the existing record to determine the correct one to use. If both records appear valid, contact the PLM Migration team to resolve.

**My file type is not accepted by CorePLM.**  
CorePLM accepts: `.pdf`, `.docx`, `.xlsx`, `.pptx`, `.xml`, `.dxf`. Contact the PLM Migration team before uploading any other format.

**I made an error on a released document. What do I do?**  
Released documents cannot be edited directly. Open a CN with **Change Action: Modify**, revise the document, and release the updated version through the CN workflow. See [SOP-003](./SOP-003-create-release-change-notice.md).

---

## eManuals Transmissions

**My transmission status shows "Failed."**  
Open the transmission record and review the error details. Correct the identified issue — typically a missing required field or an unsupported file format — and resubmit. If the reason is unclear, contact the eManuals operations team.

**My transmission was returned by the eManuals team.**  
Open the transmission record. The eManuals team adds comments when returning a package. Address the comments and resubmit. Contact the eManuals operations team directly if the comments require clarification.

**The document I downloaded from CorePLM contains tracked changes or a watermark.**  
Do not submit this file. Contact the document owner to upload the final version and check it in properly. Then restart the transmission from Step 1 of [SOP-005](./SOP-005-release-to-emanuals.md).

**I need to publish in a language for which the translation is not yet complete.**  
Submit the English version now. In the **Comments** field of the transmission, note the languages pending and the expected delivery date. Submit a separate transmission for each language when the translation is available.

---

## LegacyVault Migration

**I do not see my old ECNs in CorePLM.**  
Historical ECNs are not in CorePLM. Access LegacyVault through the intranet shortcut; it remains available in read-only mode during the transition period.

**The affected items from my LegacyVault ECN are not in CorePLM.**  
Affected items do not migrate automatically. Use the LegacyVault-to-CorePLM Migration Map (intranet: Tools & Systems > CorePLM Resources) to locate migrated part and document numbers, then add them to your CN manually.

**I need to create a new ECN or document in LegacyVault.**  
LegacyVault is read-only as of the CorePLM go-live date. All new change activity must be initiated in CorePLM. Contact the PLM Migration team if you have a scenario that does not fit the CorePLM workflow.

---

## Escalation

If your issue is not addressed here, contact support:

| Tier | Contact |
|------|---------|
| PLM Support Portal | IT Service Desk → PLM Migration Support queue |
| PLM Migration Team | plm-migration@meridianmedical.example |

See [SOP-006: Additional Learning Resources](./SOP-006-additional-learning-resources.md) for full support contact details and SLAs.

---

## See Also

- [SOP-001: Introduction to Change Objects in CorePLM](./SOP-001-intro-to-change-objects.md)
- [SOP-002: LegacyVault vs. CorePLM — Change Notices Compared](./SOP-002-legacyvault-vs-coreplm-changes.md)
- [SOP-003: How to Create and Release a Change Notice](./SOP-003-create-release-change-notice.md)
- [SOP-004: How to Create Parts and Documents in CorePLM](./SOP-004-create-parts-and-documents.md)
- [SOP-005: Releasing Electronic Materials to eManuals](./SOP-005-release-to-emanuals.md)
- [SOP-006: Additional Learning Resources for CorePLM](./SOP-006-additional-learning-resources.md)
