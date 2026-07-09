---
title: "Releasing Electronic Materials to eManuals"
sop_id: SOP-005
version: "1.1"
status: Active
owner: Technical Communications
last_reviewed: 2025-02-14
tags: [coreplm, emanuals, release, publishing, electronic-materials, distribution]
related_sops:
  - SOP-003
  - SOP-004
  - SOP-006
  - SOP-007
---

# SOP-005: Releasing Electronic Materials to eManuals

## Purpose

This SOP covers how to transmit approved documents from CorePLM to eManuals, the external platform through which Meridian Medical publishes product documentation to customers, field service personnel, and regulatory bodies.

## Scope

Technical Communications staff who publish released documents to eManuals.

## Prerequisites

- The document has reached **Released** state in CorePLM via a completed CN
- eManuals Publisher role permissions
- Document number, revision, and target language(s)
- eManuals product family and publication destination for this document

For access issues, see [SOP-007: Troubleshooting](./SOP-007-troubleshooting.md).

---

## Procedure

### 1. Verify the Released Document in CorePLM

1. Go to **Document Management > Documents** and open the document record.
2. Confirm:
   - **Lifecycle State:** Released
   - **Revision:** As specified in the CN
3. Open the **Files** tab and download the released PDF.
4. Confirm the PDF contains the correct document number, revision, and effective date, with no tracked changes or watermarks.

---

### 2. Create the Transmission

1. Go to **Integrations > eManuals Publisher**.
2. Select **New Transmission**.
3. Complete the required fields:

| Field | Guidance |
|-------|----------|
| **Transmission Name** | Format: `[Document Number]-[Revision]-[YYYY-MM-DD]` |
| **Document Number** | CorePLM document number |
| **Revision** | Current released revision |
| **Document Type** | Must match the CorePLM document type |
| **Target Language(s)** | Select all languages for this publication |
| **eManuals Product Family** | Select the applicable product family |
| **Publication Destination** | Customer-Facing / Field Service / Internal / Regulatory |
| **Effective Date** | CN release date |
| **Supersedes** | Prior document number and revision, if this publication replaces an existing one |
| **Comments** | Any notes for the eManuals team (e.g., pending translations, coordinated releases) |

4. Select **Add File**, attach the released PDF downloaded in Step 1, and select **Upload**.

{% callout %}
eManuals requires PDF format. Do not attach source files.
{% /callout %}

---

### 3. Submit and Confirm

1. Select **Validate**. Resolve any errors before continuing.
2. Select **Submit Transmission** and confirm.
3. The transmission moves to **Submitted** state. The eManuals operations team receives an automated notification.

Processing time: 1–2 business days for standard publications; 3–5 business days for multi-language packages.

4. Monitor status in **Integrations > eManuals Publisher > My Transmissions**.
5. When status changes to **Published**, verify the document is accessible in the eManuals portal under the correct product family.

---

### 4. Complete the Change Task (if applicable)

If eManuals publication was a deliverable in a CT:

1. Open the CN and the relevant CT.
2. Add a comment with the Transmission Name and effective date.
3. Set the CT lifecycle state to **Completed**.

---

## Transmission Status Reference

| Status | Meaning |
|--------|---------|
| Draft | Transmission is being prepared |
| Submitted | Sent to eManuals operations team |
| In Review | Being processed |
| Published | Document is live in eManuals |
| Failed / Returned | Transmission was not accepted; see [SOP-007](./SOP-007-troubleshooting.md) |

---

## See Also

- [SOP-003: How to Create and Release a Change Notice](./SOP-003-create-release-change-notice.md)
- [SOP-004: How to Create Parts and Documents in CorePLM](./SOP-004-create-parts-and-documents.md)
- [SOP-006: Additional Learning Resources for CorePLM](./SOP-006-additional-learning-resources.md)
- [SOP-007: Troubleshooting](./SOP-007-troubleshooting.md) — failed transmissions, returned packages, file format issues
