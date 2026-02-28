---
sidebar_position: 1
title: "Claude Projects"
---

# Claude Projects

If you find yourself re-explaining PurposeMed's context, brand voice, or regulatory requirements at the start of every conversation, Claude Projects solves that problem. Projects give you a persistent workspace where Claude remembers your instructions, references your documents, and maintains a consistent approach across every conversation.

---

## What Are Projects?

A Claude Project is a persistent workspace that includes:

- **Custom instructions** that apply to every conversation within the project
- **A knowledge base** of uploaded documents that Claude can reference
- **Conversation history** organized by topic
- **Shared access** for team members (on Team and Enterprise plans)

Think of it as giving Claude a permanent briefing document rather than re-briefing it at the start of every chat.

---

## Plan Requirements

| Feature | Pro ($20/mo) | Team ($30/mo) | Enterprise |
|---------|-------------|---------------|------------|
| Create Projects | Yes | Yes | Yes |
| Custom Instructions | Yes | Yes | Yes |
| Upload Documents | Yes | Yes | Yes |
| Share with Team | No | Yes | Yes |
| Admin Controls | No | No | Yes |

---

## Step-by-Step Setup

### Step 1: Create a New Project

1. Navigate to [claude.ai](https://claude.ai)
2. In the left sidebar, click **Projects**
3. Click **Create Project**
4. Give your project a descriptive name (e.g., "PurposeMed Compliance Checker")

### Step 2: Add Custom Instructions

Click **Set custom instructions** and write the persistent context you want Claude to use in every conversation. This is where you put your contract-style system prompt.

Example for a PurposeMed compliance project:

```text
You are a healthcare compliance analyst supporting PurposeMed, a cross-border
telehealth company operating in Canada.

Company context:
- Three service lines: Freddie (HIV/PrEP), Frida (ADHD), Foria
  (gender-affirming care)
- All services delivered asynchronously via licensed physicians
- Operates across Canadian provinces; some US patients
- Applicable regulations: PIPEDA (federal), PHIPA (Ontario), provincial
  telehealth regulations, HIPAA (US patients)

Your role:
- Evaluate policies and practices against applicable regulations
- Flag compliance gaps with specific regulatory references
- Prioritize findings by risk level (Critical, High, Medium, Low)
- Use plain language appropriate for executive audiences
- When provincial requirements differ, note the strictest standard

If unsure about a regulatory interpretation: State the ambiguity explicitly,
present both interpretations, and recommend consulting legal counsel.

Never include real patient data in your responses. If I accidentally include
patient identifiers, flag this immediately and ask me to rephrase with
de-identified data.
```

### Step 3: Upload Your Knowledge Base

Click **Add knowledge** to upload documents that Claude should reference. The total knowledge base can hold approximately 200,000 tokens (roughly 500 pages of text).

Good candidates for upload:

- Internal policies and procedures
- Regulatory reference documents
- Brand voice guidelines
- Templates and frameworks
- Meeting notes and strategy documents

### Step 4: Start Conversations

Every new conversation within the project automatically inherits your custom instructions and has access to the uploaded knowledge base. You do not need to re-explain context.

:::tip
Create separate projects for distinct use cases rather than one giant project. A focused project with relevant documents produces better results than a project overloaded with everything.
:::

---

## Context Window

Claude Projects operate within a 200,000-token context window. This includes your custom instructions, uploaded documents, and the current conversation. In practical terms:

- Custom instructions: ~500-2,000 tokens
- Uploaded documents: the bulk of your token budget
- Current conversation: grows as you chat

If you notice Claude "forgetting" parts of your uploaded documents during long conversations, it is likely because the conversation itself is consuming tokens that were previously available for document reference. Start a new conversation within the same project to reset.

---

## Team Sharing (Team and Enterprise Plans)

On Team plans and above, you can share projects with colleagues. This means:

- Everyone on the team uses the same custom instructions
- Everyone references the same knowledge base
- Conversations remain private to each team member unless explicitly shared
- Custom instructions can be locked by project owners

This is particularly valuable for ensuring consistency. When the entire finance team uses the same "Budget Analysis" project, the output format and analytical approach stays consistent regardless of who runs the prompt.

---

## PurposeMed Project Ideas

Here are starter projects tailored to PurposeMed's needs. Each one includes suggested custom instructions and knowledge base documents.

### Compliance Checker

**Purpose:** Quick regulatory compliance assessments for new initiatives, policies, or vendor evaluations.

**Custom instructions:** The compliance analyst persona shown in Step 2 above.

**Knowledge base uploads:**
- PIPEDA summary document
- PHIPA requirements (Ontario)
- Provincial telehealth regulations for each province you operate in
- Your internal data handling and privacy policies
- Vendor assessment checklist

### Patient Communications

**Purpose:** Draft patient-facing messages that are consistently warm, inclusive, and accessible.

**Custom instructions:**

```text
You are a patient communications writer for PurposeMed. Every message you
write must:
- Use a 6th-grade reading level
- Use person-first, inclusive language
- Never assume gender, orientation, or family structure
- Be warm and supportive, never clinical
- Avoid medical jargon without explanation
- Respect the specific sensitivity needs of each service line:
  - Freddie (HIV/PrEP): No language implying risk or judgment
  - Frida (ADHD): No language minimizing the condition
  - Foria (gender-affirming care): Always use affirming, identity-respecting
    language
```

**Knowledge base uploads:**
- Brand voice guidelines
- Sample approved communications
- Reading level standards reference
- Service line descriptions

### Investor Reporting

**Purpose:** Consistent, polished investor updates and board materials.

**Custom instructions:**

```text
You are a healthcare investor relations specialist. You help prepare board
materials and investor updates for PurposeMed, a venture-backed cross-border
telehealth company.

Always:
- Lead with the most important metrics and milestones
- Use precise financial language
- Compare to stated targets and prior periods
- Maintain an optimistic but honest tone
- Flag risks proactively rather than burying them
```

**Knowledge base uploads:**
- Previous investor decks
- KPI definitions and targets
- Quarterly financial summaries
- Company milestones and roadmap

### Clinical Documentation

**Purpose:** Standardized visit note templates and clinical process documentation by service line.

**Custom instructions:**

```text
You are a clinical documentation specialist for a telehealth company. You
help create and standardize clinical documentation templates that are
compliant with provincial medical record requirements.

Always:
- Follow applicable clinical documentation standards
- Include all required elements for the visit type
- Use standard medical terminology with consistent formatting
- Distinguish between required and optional documentation fields
```

**Knowledge base uploads:**
- Current visit note templates per service line
- Provincial documentation requirements
- Clinical guidelines (DHHS for PrEP, CADDRA for ADHD, WPATH SOC for HRT)

---

## Try It Now

Create your first Claude Project in 5 minutes:

1. Go to [claude.ai](https://claude.ai) and click **Projects** in the sidebar
2. Click **Create Project**
3. Name it "[Your Function] Assistant" (e.g., "Finance Assistant")
4. Paste in custom instructions describing your role and how Claude should help you
5. Upload 2-3 of your most frequently referenced documents
6. Start a conversation and ask Claude something you would normally spend time on

You will immediately notice the difference between a cold-start conversation and one where Claude already understands your context.

:::warning
Never upload documents containing actual patient health information (PHI) to any AI tool unless you are on an enterprise plan with a signed Business Associate Agreement (BAA). De-identify all documents before uploading. See the [Governance](/governance/patient-data-and-compliance) section for detailed requirements.
:::
