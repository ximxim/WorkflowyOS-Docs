---
sidebar_position: 4
title: "Building Simple Tools"
hide_table_of_contents: true
---

# Building Simple Tools

In PurposeMed's team survey, 4 of 9 respondents expressed interest in building prototypes and simple tools with AI. Lindsay specifically wants to build functioning product features and replace Google Sheets with purpose-built tools. The good news: you can start doing this today without writing a single line of code yourself.

---

## From Spreadsheet to App

Many of the tools your team uses daily are Google Sheets that have outgrown their original purpose. They started as quick trackers and evolved into critical operational tools -- with all the fragility, formatting headaches, and access control issues that come with that evolution.

Claude can turn these spreadsheets into interactive, purpose-built tools in minutes. The result is not a production application, but it is a functional prototype that you can use immediately and iterate on.

**The process:**

1. Describe the spreadsheet's purpose, columns, and how your team uses it.
2. Claude builds an interactive HTML artifact with proper form inputs, validation, data display, and filtering.
3. Test it in the artifact preview.
4. Iterate until it matches your workflow.

**Example: Patient appointment tracker**

```text
I currently use a Google Sheet to track patient appointments for Frida.
The columns are: Patient ID, Appointment Date, Appointment Type
(initial consultation, follow-up, prescription renewal), Clinician
Assigned, Status (scheduled, completed, cancelled, no-show), and Notes.

Create an interactive tool that replaces this spreadsheet. Include:
- A form to add new appointments with dropdowns for type and status
- A filterable table view showing all appointments
- Filter by: status, appointment type, clinician, and date range
- Summary cards at the top showing: total appointments this month,
  completion rate, no-show rate, and upcoming appointments count
- Color-code rows by status (green=completed, yellow=scheduled,
  red=cancelled, gray=no-show)
- Export to CSV button

Use clean, professional styling. Store data in the browser's local
storage so it persists between sessions.

Do not use any real patient data. Pre-populate with 10 realistic but
fictional sample entries for demonstration purposes.
```

The artifact Claude generates is a fully functional tool you can use in your browser. It will have proper form validation, sorting, filtering, and data persistence -- features that would take hours to build properly in Google Sheets.

:::tip
Start with the spreadsheet or Google Sheet you use most often. Describe its purpose and columns to Claude, and ask it to create an interactive version as an artifact. You will be surprised how quickly a spreadsheet becomes a proper tool.
:::

---

## Prototyping with AI

The rapid prototyping loop with Claude follows a simple pattern that does not require any technical background:

**1. Describe what you want in plain language.**

You do not need to know HTML, CSS, JavaScript, or any programming language. Describe the tool the way you would describe it to a colleague: what it does, who uses it, and what information it displays.

**2. Claude builds it.**

Claude generates a working interactive artifact. For simple tools, this takes under a minute.

**3. Test it.**

Click through the artifact. Try adding data, filtering, clicking buttons. Note what works and what does not match your mental model.

**4. Iterate.**

Tell Claude what to change. Be specific: "Move the filter controls above the table," "Add a column for priority level," "Change the chart from bar to line." Each iteration takes seconds.

**Example iteration cycle:**

```text
[First prompt]
Build a simple KPI dashboard for Freddie that shows: monthly new
patients, active prescriptions, renewal rate, and average time to
first appointment. Display each as a card with the current value and
a trend arrow (up/down). Include a line chart showing the past 6
months of new patient enrollments.

[After seeing the result]
Good start. Make these changes:
1. Add a date selector at the top so I can switch between months
2. Make the trend arrows green for positive trends and red for negative
3. Add a second chart showing renewal rate over time
4. Put the KPI cards in a 2x2 grid instead of a single row
```

Each iteration refines the tool without starting over. Claude maintains context from the original request and applies your changes incrementally.

---

## No-Code AI Tool Building

Beyond Claude artifacts, the AI tool ecosystem is rapidly expanding what non-technical users can build.

### Google Workspace with Gemini

Google has been integrating AI capabilities directly into Workspace. Gemini can help you build tools within the Google ecosystem:

- **Google Sheets with Gemini** -- Use natural language to create formulas, pivot tables, and charts. Ask Gemini to analyze patterns in your data.
- **Google Apps Script with AI assistance** -- Describe an automation you want (e.g., "send a Slack notification when a new row is added to this sheet") and use Gemini to generate the Apps Script code.
- **Google Forms to Sheets pipelines** -- Use AI to design intake forms that automatically populate and organize data in Sheets.

### When to Use Which Approach

| Need | Best Approach | Why |
|---|---|---|
| Replace a single spreadsheet | Claude artifact | Fast, interactive, purpose-built |
| Dashboard for team metrics | Claude artifact | Charts, filtering, real-time interaction |
| Automate a Google Workspace workflow | Gemini + Apps Script | Native integration with Gmail, Drive, Calendar |
| Prototype a product feature | Claude artifact | Rapid iteration, no deployment needed |
| Data entry form with validation | Claude artifact | Better UX than Google Forms for complex inputs |

---

## What You Can Build Today

Here are practical tools that PurposeMed team members can build right now using Claude artifacts. Each takes 5-15 minutes to create.

### Interactive Dashboards for Team Metrics

```text
Create an interactive dashboard for the PurposeMed operations team.
Include:
- Toggle between Freddie, Frida, and Foria views
- KPI cards: active patients, new enrollments (MTD), churn rate,
  average satisfaction score
- Bar chart comparing all three brands on key metrics
- Table of recent operational flags (type, severity, status, assigned to)
- All data should be fictional but realistic for a telehealth company
```

### Form-Based Tools for Data Entry

```text
Build a structured intake form for logging clinician feedback after
patient consultations. Fields:
- Patient ID (text, required)
- Consultation date (date picker, required)
- Consultation type (dropdown: initial, follow-up, renewal, urgent)
- Brand (dropdown: Freddie, Frida, Foria)
- Outcome (dropdown: prescription issued, referral made, follow-up
  scheduled, no action needed)
- Clinician notes (text area, optional)
- Flag for review (checkbox)

Include validation, a submission confirmation, and a table view of
all submitted entries with search and filter capabilities. Store
entries in local storage.
```

### Calculators and Reference Tools

```text
Create an ROI calculator for AI tool adoption at PurposeMed. Inputs:
- Number of team members using the tool
- Average hours saved per person per week
- Average hourly cost (fully loaded)
- Monthly tool subscription cost
- Implementation time (one-time hours)

Outputs:
- Monthly time savings (hours)
- Monthly cost savings (dollars)
- Monthly net savings (after tool cost)
- Payback period
- Annual ROI percentage

Include a summary card and a break-even chart. Pre-populate with
reasonable defaults for a 15-person executive team.
```

### Workflow Trackers

```text
Build a project tracker for PurposeMed's AI training rollout. Columns:
- Task name
- Owner (dropdown of team roles: CEO, Chief of Staff, HR, Finance,
  Marketing, Operations, Product/Engineering)
- Status (not started, in progress, blocked, complete)
- Priority (high, medium, low)
- Due date
- Dependencies (text)
- Notes

Include:
- Kanban board view (cards grouped by status)
- Table view with sorting and filtering
- Progress bar showing overall completion percentage
- Toggle between views

Pre-populate with 8-10 sample tasks related to AI tool adoption.
```

---

## Moving from Prototype to Production

Claude artifacts are prototypes, not production applications. They run in the browser, store data locally, and are not connected to your backend systems. But they serve a critical purpose: they let you validate whether a tool concept is worth investing in before committing engineering resources.

**The progression:**

1. **Prototype in Claude** (minutes) -- Validate the concept and refine the user experience.
2. **Share with stakeholders** (same day) -- Publish the artifact and get feedback from the people who would use it.
3. **Iterate on feedback** (hours) -- Refine based on real user input.
4. **Decide on production investment** (informed decision) -- You now know exactly what to build, because you have already used it.

This approach saves weeks of requirements gathering and specification writing. Instead of describing what you want in a document, you show a working version and ask "is this what you need?"

:::info
If you build a prototype in Claude that your team wants to use long-term, bring it to the Product/Engineering team. The artifact serves as a living specification -- far more useful than a written requirements document.
:::
