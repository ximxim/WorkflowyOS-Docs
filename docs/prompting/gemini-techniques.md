---
sidebar_position: 3
title: "Gemini-Specific Techniques"
---

# Gemini-Specific Techniques

Gemini (by Google) is PurposeMed's other primary AI tool, and it brings a distinct set of strengths. If you are already using Google Workspace for documents, spreadsheets, and slides, Gemini's native integration makes it particularly powerful for tasks that involve your existing files.

---

## Be Precise and Direct

Gemini tends to respond best to shorter, more direct prompts. While Claude benefits from detailed explanations of reasoning, Gemini often performs better when you state your request concisely and let it work.

**Less effective with Gemini:**

```text
I'd like you to think carefully about our patient acquisition funnel and
consider all the various factors that might be contributing to the drop-off
we're seeing between initial consultation bookings and completed prescriptions.
Take your time and be thorough.
```

**More effective with Gemini:**

```text
Analyze the drop-off between consultation bookings and completed prescriptions
for our Freddie (PrEP) service line. Identify the top 3 likely causes and
recommend one fix for each.
```

The direct version typically produces a more focused, actionable response.

---

## The 2-Million Token Context Window

Gemini Pro supports a context window of up to 2 million tokens -- roughly 5,000 pages of text. This makes Gemini the strongest option when you need to process very large documents or multiple documents simultaneously.

Practical applications for PurposeMed:

- Upload an entire set of provincial telehealth regulations and ask Gemini to compare requirements across jurisdictions
- Paste a full quarter of patient feedback data and ask for trend analysis
- Include multiple policy documents in a single prompt for cross-referencing

:::tip
When working with very large documents, place your question at the end of the prompt (just as with Claude). Even though Gemini handles long contexts well, putting the instructions last helps the model focus on what you actually need.
:::

---

## Multimodal Inputs

Gemini treats text, images, audio, and video as equal input types. You can combine them in a single prompt without any special configuration.

**Examples relevant to PurposeMed:**

- Upload a screenshot of your analytics dashboard and ask: "What are the three most concerning trends in this dashboard?"
- Share a photo of a whiteboard from a strategy session and ask Gemini to convert it into structured action items
- Upload a recorded patient education video and ask for a written summary with key medical terms flagged for plain-language alternatives

```text
[Attach screenshot of the Freddie acquisition dashboard]

Look at this dashboard screenshot. Identify any metrics that are trending
negatively over the last 90 days. For each one, explain what it likely
indicates and suggest one diagnostic question we should investigate.
```

---

## Google Workspace Integration

One of Gemini's strongest differentiators is its native integration with Google Workspace. When using Gemini within Google Docs, Sheets, Slides, or Gmail, you can reference specific files using the **@** symbol.

```text
@Q3 Board Deck @Q2 Board Deck

Compare the patient growth metrics between these two decks. Highlight any
service lines where growth has decelerated and flag metrics where we missed
our stated targets.
```

This eliminates the need to copy-paste content between applications. Gemini pulls the file content directly and maintains awareness of the document structure.

:::info
The @ file reference feature works within the Gemini interface in Google Workspace. It does not require you to paste the full document -- Gemini accesses the file directly from your Drive.
:::

---

## Consistent Structural Formatting

When you provide structured input to Gemini, pick one formatting approach and stick with it throughout the prompt. Mixing XML tags and Markdown headers in the same prompt can confuse the model.

**Pick one:**

Using Markdown headers:

```text
## Background
PurposeMed is a cross-border telehealth company...

## Task
Analyze our Q3 hiring plan against projected patient volume growth...

## Output Format
Table with columns: Role, Justification, Priority, Start Date
```

Or using XML tags:

```text
<background>
PurposeMed is a cross-border telehealth company...
</background>

<task>
Analyze our Q3 hiring plan against projected patient volume growth...
</task>

<output_format>
Table with columns: Role, Justification, Priority, Start Date
</output_format>
```

Both work well. Mixing them in one prompt does not.

---

## Multi-Turn Conversation Strengths

Gemini maintains context effectively across multiple turns in a conversation. This means you can build on previous responses without repeating your constraints or background information.

**Effective multi-turn workflow:**

Turn 1:
```text
You are a healthcare operations analyst. PurposeMed operates three telehealth
service lines: Freddie (HIV/PrEP), Frida (ADHD), and Foria (gender-affirming
care). All services are delivered asynchronously across Canadian provinces.

Analyze the following prior authorization rejection data and identify the
top 3 rejection reasons by service line.

[paste data]
```

Turn 2:
```text
For the #1 rejection reason on Freddie, draft a process improvement plan
that reduces rejections by at least 30%.
```

Turn 3:
```text
Now create a training checklist for our clinical operations team based on
that improvement plan.
```

Notice that turns 2 and 3 do not repeat the company context or the analyst persona -- Gemini carries those forward automatically.

:::warning
If your conversation runs longer than 10-15 turns, or if the AI output starts drifting from your original instructions, it is better to start a fresh conversation and re-establish your context. See [Session Continuity](/context-and-memory/session-continuity) for techniques to carry work between sessions.
:::

---

## Healthcare Example: Regulatory Document Analysis with Google Drive

Here is a complete workflow for using Gemini with Google Workspace to analyze regulatory documents.

**Step 1:** Upload your regulatory reference documents to a shared Google Drive folder (e.g., "Regulatory Library").

**Step 2:** In Gemini, reference the documents directly:

```text
@PIPEDA Guidelines 2024 @PHIPA Requirements Ontario @Telehealth Regulations BC

You are a regulatory affairs specialist for a Canadian telehealth company
that provides HIV/PrEP (Freddie), ADHD (Frida), and gender-affirming care
(Foria) services.

Using the referenced documents, create a compliance matrix with:
- Rows: Each major requirement that applies to telehealth
- Columns: PIPEDA | PHIPA (Ontario) | BC Telehealth Regs
- Cells: Compliant / Gap / Not Applicable

Flag any requirements where our three service lines may have different
compliance obligations (e.g., controlled substance prescribing for ADHD
vs. hormone therapy).
```

**Step 3:** Follow up in the same conversation to drill into specific gaps:

```text
For each gap you identified, draft a one-paragraph remediation plan with
an estimated implementation timeline.
```

:::danger
Never upload documents containing actual patient data to Google Drive for AI processing unless your organization has a signed BAA (Business Associate Agreement) with Google and is using an Enterprise plan with appropriate data controls. See the [Governance](/governance/patient-data-and-compliance) section for requirements.
:::
