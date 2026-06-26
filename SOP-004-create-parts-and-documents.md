---
title: "How to Create Parts and Documents in CorePLM"
sop_id: SOP-004
version: "1.3"
status: Active
owner: Technical Communications
last_reviewed: 2025-01-28
tags: [coreplm, parts, documents, create, repository, controlled-content]
related_sops:
  - SOP-003
  - SOP-005
  - SOP-007
---

# SOP-004: How to Create Parts and Documents in CorePLM

## Purpose

This SOP covers creating controlled parts and documents in CorePLM.

## Scope

Meridian Medical employees adding new parts or controlled documents to the CorePLM repository.

For modifying existing parts or documents as part of a change, see [SOP-003: How to Create and Release a Change Notice](./SOP-003-create-release-change-notice.md).

## Object Types

In CorePLM, **parts** and **documents** are distinct object types:

- A **part** represents a physical or logical product component (manufactured item, purchased component, or assembly).
- A **document** represents a controlled file (procedure, specification, drawing, label, or instruction for use).

Both are versioned and managed through the same lifecycle framework, but created and navigated differently.

---

## Part 1: Creating a Part

**Prerequisites:** Part Creator role permissions in CorePLM.

> Note: Search the repository before creating. If the part exists under a different number or name, contact the part owner rather than creating a duplicate.

**Steps:**

1. Go to **Part Management > Parts**.
2. Search by name or number to confirm the part does not already exist.
3. Select **New Part**.
4. Complete the required fields:

| Field | Guidance |
|-------|----------|
| **Name** | Apply Meridian Medical naming conventions (see Part Naming Guide on the intranet) |
| **Part Type** | Manufactured / Purchased / Phantom / Reference |
| **Classification** | Select from the product classification hierarchy |
| **Unit of Measure** | Each / Assembly / Set / Lot / Other |
| **Description** | Brief description of the part's function |
| **Source** | Internal / External / Either |

5. Select **Save**. The part number is generated and the part is created in **Under Development** state.

If this part is being created as part of a controlled change, add it to the CN Affected Objects with **Change Action: Add**. See [SOP-003](./SOP-003-create-release-change-notice.md).

---

## Part 2: Creating a Document

**Prerequisites:** Document Creator role permissions in CorePLM.

> Note: Search the repository before creating. If a document exists, contact its owner.

**Steps:**

1. Go to **Document Management > Documents**.
2. Search by title or keyword to confirm the document does not exist.
3. Select **New Document**.
4. Complete the required fields:

| Field | Guidance |
|-------|----------|
| **Name** | Document title, in title case |
| **Document Type** | SOP / Work Instruction / Specification / Drawing / Label / IFU / Training Material / Other |
| **Owner** | Individual or team responsible for maintaining this document |
| **Applicable Product** | Link to the product or product family (if applicable) |
| **Language** | Primary language (default: English) |
| **Description** | Purpose and intended audience |

5. Open the **Files** tab. Select **Add File**, browse to the source file, and select **Upload**.
6. Select **Check In**. Enter a brief comment describing the file.
7. Select **Save**. The document number is generated and the document is created in **Draft** state.

If this document is part of a controlled change, add it to the CN Affected Objects with **Change Action: Add**. See [SOP-003](./SOP-003-create-release-change-notice.md).

---

## Accepted File Types

CorePLM accepts the following formats for controlled documents: `.pdf`, `.docx`, `.xlsx`, `.pptx`, `.xml`, `.dxf`.

For other file types, contact the PLM Migration team before uploading.

---

## See Also

- [SOP-003: How to Create and Release a Change Notice](./SOP-003-create-release-change-notice.md)
- [SOP-005: Releasing Electronic Materials to eManuals](./SOP-005-release-to-emanuals.md)
- [SOP-007: Troubleshooting](./SOP-007-troubleshooting.md) — duplicate objects, access issues, unsupported file types
