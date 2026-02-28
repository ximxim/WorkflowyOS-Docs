---
sidebar_position: 3
title: "Artifacts and Documents"
hide_table_of_contents: true
---

# Artifacts and Documents

Claude can create more than text responses. With Artifacts, you can generate interactive presentations, data visualizations, dashboards, and downloadable documents -- all within the conversation. This section covers how to use these capabilities to produce the materials your team creates regularly.

---

## Creating Presentations

You have two approaches for building presentations with Claude, each suited to different needs.

### Interactive HTML Presentations

Ask Claude to create an HTML, CSS, and JavaScript presentation, and it renders as a live, interactive artifact directly in the conversation. You can navigate slides, see animated transitions, and interact with embedded charts -- all without leaving Claude.

```text
Create an interactive HTML presentation for PurposeMed's Q1 2026 board
meeting. Include:

- Title slide with company name and date
- Slide 2: Three-brand overview (Freddie, Frida, Foria) with a summary
  card for each showing patient count, revenue, and growth rate
- Slide 3: Bar chart comparing quarterly revenue across all three brands
- Slide 4: Key operational metrics in a dashboard layout
- Slide 5: Strategic priorities for Q2 with a timeline visualization
- Slide 6: Financial outlook summary

Use a clean, professional design with PurposeMed's brand feel. Include
slide navigation arrows and a progress indicator. Use Chart.js for any
data visualizations.

Use realistic but fictional data -- do not include any real patient or
financial information.
```

Claude generates the full HTML, CSS, and JavaScript as an artifact. You can click through the slides in the preview panel, then iterate by asking Claude to adjust colors, add slides, change chart types, or refine the content.

**When to use this approach:**
- Internal presentations where design flexibility matters
- Data-heavy presentations with interactive charts
- Rapid prototyping of presentation concepts before committing to a specific tool
- Presentations you want to share as web pages

### Native File Generation

Claude can also generate actual downloadable files -- `.pptx` for PowerPoint, `.docx` for Word, `.xlsx` for Excel, and `.pdf` documents. This uses Claude's code execution capability to create the files programmatically.

```text
Generate a PowerPoint file (.pptx) for a quarterly investor update.
Include:

- Title slide: "PurposeMed Q1 2026 Investor Update"
- Slide 2: Company highlights (5 bullet points)
- Slide 3: Financial summary table (revenue, expenses, net income by
  brand)
- Slide 4: Patient growth chart
- Slide 5: Next quarter outlook

Use a professional layout with consistent fonts and spacing. Output as
a downloadable .pptx file.

Use realistic but fictional numbers for illustration.
```

**When to use this approach:**
- You need a file in a specific format (PowerPoint, Word, Excel)
- The presentation will be edited further in its native application
- You need to follow a corporate template (provide the template to Claude first)

---

## Dashboards and Visualizations

Claude's artifact capabilities are particularly strong for data visualization. You can upload a CSV or paste data directly, and Claude creates interactive charts and diagrams.

### Data Dashboards

Upload a spreadsheet or CSV file and ask Claude to build a dashboard:

```text
I've uploaded our monthly operations data. Create an interactive
dashboard with:

1. A line chart showing patient enrollment trends across Freddie, Frida,
   and Foria over the past 12 months
2. A bar chart comparing average appointment wait times by brand
3. A KPI summary row showing: total active patients, monthly growth
   rate, average satisfaction score, prescription renewal rate
4. All charts should be interactive (hover for details)

Use Chart.js. Make it clean and professional with a light theme.
```

### Process Flow Diagrams

Claude can generate Mermaid diagrams for process visualization -- useful for documenting workflows, patient journeys, and operational procedures.

```text
Create a Mermaid flowchart showing the Freddie patient onboarding
process:

1. Patient visits website
2. Completes intake questionnaire
3. Identity verification
4. If verified → schedule consultation; if not → manual review
5. Clinician consultation (telehealth)
6. If PrEP appropriate → prescription + pharmacy selection; if not →
   alternative care plan
7. Prescription sent to pharmacy
8. Follow-up appointment scheduled (30 days)

Use clear labels, color-code decision points, and include timing
estimates at each step.
```

### Maps and Geographic Visualizations

For PurposeMed's cross-border operations, geographic visualizations can be useful:

```text
Create an interactive map visualization showing PurposeMed's service
coverage. Highlight:

- Canadian provinces where Freddie, Frida, and Foria are available
- US states where services are available
- Color-code by brand availability (single brand, two brands, all three)
- Include a legend and hover tooltips showing brand availability per
  region

Use realistic but fictional coverage data for illustration.
```

---

## Telehealth Content Creation

Creating patient-facing content in healthcare requires careful attention to language, accuracy, and tone. Claude is well-suited for drafting this content, but you must provide explicit guidance about the communication standards that matter for PurposeMed's patient populations.

```text
Draft a patient education page for Freddie's website explaining what
to expect during a first PrEP consultation via telehealth.

Requirements:
- Use inclusive, person-first, destigmatizing language throughout
- Reading level: Grade 8 or below
- Tone: warm, professional, reassuring -- not clinical or paternalistic
- Include: what happens during the visit, what information to have
  ready, how prescriptions are handled, privacy protections in place
- Address common concerns: "Will this show up on my insurance?",
  "Is the video call private?", "What if I have questions later?"
- Do not include specific medical dosing or clinical advice -- direct
  readers to their clinician for medical questions

Format as a web page with clear headings, short paragraphs, and a
FAQ section at the bottom.
```

:::tip
When creating patient-facing content, always specify your language standards in the prompt. For PurposeMed, this means explicitly requesting inclusive, person-first, and destigmatizing language. Claude follows these instructions well, but it will default to generic medical writing if you do not specify otherwise.
:::

---

## Sharing and Collaboration

Claude artifacts can be shared beyond the conversation where they were created.

### Publishing Artifacts

When you create an artifact, you can publish it as a shareable link. Anyone with the link can view the artifact -- they do not need a Claude account.

**How to share:**
1. Click on the artifact to expand it.
2. Click the **Share** or **Publish** button.
3. Copy the generated link.
4. Share via Slack, email, or any other channel.

The recipient sees the interactive artifact exactly as you do, including any charts, navigation, or interactive elements.

### Remix Feature

When someone views a shared artifact, they can "remix" it -- opening it in their own Claude conversation to modify and build upon it. This is useful for creating templates that team members can customize.

**Example workflow:**
1. You create a standardized quarterly report template as a Claude artifact.
2. You publish and share the link with your team.
3. Each team member remixes it, populates it with their department's data, and generates their own version.

### Team and Enterprise Considerations

On Claude Team and Enterprise plans, sharing and publishing options may be configured by your organization's administrator. Check with your IT team about which sharing options are enabled for your workspace.

:::warning
Shared artifacts include access to conversation attachments. If you uploaded sensitive documents during the conversation that produced the artifact, those documents may be accessible through the shared link. Remove sensitive documents from the conversation before publishing an artifact, or start a new conversation specifically for creating the shareable version.
:::

---

## Practical Templates for PurposeMed

Here are ready-to-use prompts for common document types across the organization:

**Executive briefing document:**

```text
Create a one-page executive briefing on [topic]. Include an executive
summary (3 sentences), key findings (5 bullet points), implications for
PurposeMed, and recommended next steps. Format as a clean, professional
document suitable for the leadership team.
```

**Meeting preparation packet:**

```text
I have a [type of meeting] in [timeframe]. Based on the attached agenda
and background documents, create a preparation packet that includes:
key discussion points with context, potential questions I should be
prepared for, relevant data points, and suggested positions on each
agenda item.
```

**Operational report with visualizations:**

```text
Using the attached data, create a monthly operations report for [brand].
Include: executive summary, KPI dashboard with charts, trend analysis,
notable incidents or exceptions, and recommendations. Use interactive
Chart.js visualizations for all data displays.
```
