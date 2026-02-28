---
sidebar_position: 2
title: "Gemini Gems"
---

# Gemini Gems

Gemini Gems are customized versions of Gemini with persistent instructions and knowledge files. If you use Google Workspace heavily -- Docs, Sheets, Slides, Drive -- Gems give you an AI assistant that already knows your company context and can reference your files directly.

---

## What Are Gems?

A Gem is a pre-configured Gemini persona that includes:

- **Persistent instructions** that define how the Gem behaves
- **Knowledge files** (up to 10) that the Gem can reference
- **A reusable entry point** you can access from the Gemini sidebar at any time

Unlike a regular Gemini conversation where you start from scratch, a Gem retains its instructions and knowledge files permanently. Every conversation you start with a Gem begins with full context already loaded.

---

## Requirements

Gems require a **Gemini Advanced** subscription. If you have access to Gemini through Google Workspace, check with your IT team about whether Gems are enabled for your organization.

---

## Step-by-Step Setup

### Step 1: Open the Gem Builder

1. Navigate to [gemini.google.com](https://gemini.google.com)
2. In the left sidebar, click **Explore Gems** (or **Gem manager**)
3. Click **New Gem**

### Step 2: Name and Instruct Your Gem

Give your Gem a clear name and write its instructions. These instructions work similarly to Claude Project custom instructions -- they persist across every conversation.

**Name:** PurposeMed Marketing Strategist

**Instructions:**

```text
You are a digital health marketing strategist supporting PurposeMed, a
cross-border telehealth company in Canada.

Company context:
- Three service lines: Freddie (HIV/PrEP), Frida (ADHD), Foria
  (gender-affirming care)
- Target audiences: Adults in Canada seeking accessible, stigma-free
  healthcare for these specific conditions
- Channels: Paid social, search, content marketing, referral partnerships
- Brand voice: Warm, inclusive, medically credible, never clinical

Your role:
- Analyze marketing performance data and identify optimization opportunities
- Draft campaign concepts and messaging that respect the sensitivity of
  each condition
- Recommend channel strategies based on audience and conversion data
- Always consider the stigma dimension -- our patients often face barriers
  in traditional healthcare settings

When analyzing data, always compare to prior periods and flag statistically
significant changes. When drafting messaging, always consider how the
language would feel to someone newly seeking care for a stigmatized condition.
```

### Step 3: Upload Knowledge Files

Click the upload area to add up to 10 files that the Gem should reference. Good candidates:

- Brand voice and messaging guidelines
- Marketing performance reports
- Audience personas and journey maps
- Competitive positioning documents
- Campaign briefs and creative standards

### Step 4: Save and Start Using

Click **Save** and your Gem appears in the sidebar. Click it any time to start a new conversation with all your context pre-loaded.

:::tip
Test your Gem immediately after creation by asking it a question that requires knowledge from your uploaded files. If it cannot answer, check that the files uploaded correctly and that your instructions reference them clearly.
:::

---

## Key Advantage: Live Google Drive Links

One of Gems' most valuable features is that files linked from Google Drive stay synchronized. If you update a Google Doc that is attached to a Gem, the Gem references the updated version automatically.

This is particularly useful for:

- **KPI dashboards** that update monthly -- link the Google Sheet and the Gem always has current numbers
- **Brand guidelines** that evolve -- update once, and every Gem conversation uses the latest version
- **Policy documents** under review -- the Gem always reflects the most recent draft

:::info
This live-sync behavior applies to files linked from Google Drive. Files uploaded directly (not linked) are static snapshots and do not auto-update.
:::

---

## The @ Symbol for File References

Within a Gem conversation (or any Gemini conversation in Google Workspace), use the **@** symbol to reference specific files from your Google Drive.

```text
@Q4 Marketing Report @Freddie Campaign Brief

Based on the Q4 results and the current Freddie campaign brief, recommend
3 adjustments to our Q1 paid social strategy. Focus on improving cost-per-
consultation-booked.
```

This pulls the referenced files into the conversation context, giving Gemini access to the full content without copy-pasting.

---

## The Memory Card Technique

For maximum consistency across all your Gems, create a single "Memory Card" document in Google Drive that contains your core company context. Upload this document to every Gem you create.

**PurposeMed Memory Card (Google Doc):**

```text
# PurposeMed -- Company Context for AI Assistants

## Company Overview
PurposeMed is a cross-border telehealth company headquartered in Canada.
We provide accessible, stigma-free healthcare through three service lines.

## Service Lines
- Freddie: HIV prevention (PrEP) and treatment. Serves patients across
  Canada seeking accessible, confidential HIV care.
- Frida: ADHD assessment and medication management. Serves adults who
  face long wait times or barriers to ADHD diagnosis in traditional
  healthcare.
- Foria: Gender-affirming hormone therapy. Serves transgender and
  non-binary patients seeking affirming care via telehealth.

## Clinical Model
All services delivered asynchronously by licensed physicians. Patients
complete structured intake assessments, receive physician review, and
manage ongoing care through our platform.

## Brand Voice
- Warm, inclusive, and medically credible
- Person-first language always
- Never clinical or condescending
- Acknowledges stigma without centering it

## Key Audiences
- Patients: Adults in Canada seeking care for HIV/PrEP, ADHD, or
  gender-affirming treatment
- Clinicians: Licensed physicians providing telehealth consultations
- Partners: Provincial health authorities, insurance providers,
  community organizations

## Regulatory Environment
- PIPEDA (federal privacy law)
- PHIPA (Ontario health privacy)
- Provincial telehealth regulations (vary by province)
- HIPAA (applicable to US-based patients)

## Key Metrics (Update Quarterly)
- [Total active patients across service lines]
- [Patient retention rate]
- [NPS score]
- [Revenue growth rate]
```

Save this as a Google Doc and link it to every Gem. Update it quarterly, and all your Gems automatically have current context.

---

## PurposeMed Gem Ideas

### HR Assistant

**Instructions focus:** Hiring practices, job description standards, interview processes, employee handbook references, benefits administration.

**Knowledge files:** Employee handbook, job description templates, interview scorecards, benefits summary, org chart.

### Finance Analyst

**Instructions focus:** Unit economics, budget analysis, variance reporting, investor metrics, financial modeling for telehealth.

**Knowledge files:** Budget templates, KPI definitions, quarterly financial summaries, investor reporting templates, the Memory Card.

### Ops Dashboard

**Instructions focus:** Operational metrics, patient flow analysis, clinical staffing, prior authorization processes, provincial regulatory requirements.

**Knowledge files:** Operational playbooks, staffing models, PA process documentation, provincial requirement summaries, the Memory Card.

### Marketing Strategist

**Instructions focus:** Campaign analysis, funnel optimization, brand voice compliance, competitive positioning, channel strategy.

**Knowledge files:** Brand guidelines, campaign performance reports, audience personas, competitive analysis, the Memory Card.

---

## Gems vs. Claude Projects: When to Use Which

| Consideration | Use Gems | Use Claude Projects |
|--------------|----------|-------------------|
| You live in Google Workspace | Yes | -- |
| You need live-syncing documents | Yes | -- |
| You need deeper analytical reasoning | -- | Yes |
| You are processing very long documents | Yes (2M token window) | -- |
| You need team sharing with locked instructions | -- | Yes (Team/Enterprise) |
| You want multimodal inputs (images, video) | Yes | -- |
| You need precise instruction-following | -- | Yes |

In practice, many team members will use both. The choice often comes down to which tool you already have open and which features matter most for the specific task.

:::warning
The same data privacy rules apply to Gems as to all AI tools. Never upload documents containing actual patient health information unless your organization has appropriate enterprise agreements in place. See the [Governance](/governance/patient-data-and-compliance) section for requirements.
:::
