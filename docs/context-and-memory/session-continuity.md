---
sidebar_position: 3
title: "Session Continuity"
---

# Session Continuity

AI conversations are stateless by default. When you close a conversation and start a new one, the AI has no memory of what you discussed, decided, or produced. This page covers practical techniques for carrying work across sessions, when to start fresh, and how to build a team-wide prompt library.

---

## The Problem: Lost Context

Every time you start a new AI conversation, you are back to zero. The AI does not remember:

- The company context you explained
- The constraints you established
- The decisions you made together
- The format preferences you iterated on
- The specific terminology you agreed upon

This means you either spend the first few minutes of every session re-establishing context, or you get inconsistent outputs because the AI is working from a blank slate.

---

## Solution 1: The Handoff Summary

The simplest technique for carrying context between sessions is the handoff summary. At the end of any productive session, ask the AI to create a structured summary of everything that matters for the next session.

**End-of-session prompt:**

```text
Create a handoff summary for the next person (or future me) who continues
this work. Include:

1. Key decisions made in this session
2. Important context and constraints we established
3. Current state of the work (what is done, what is in progress)
4. Open questions and unresolved items
5. Recommended next steps in priority order
6. Any specific formatting preferences or terminology we agreed on

Format this as a self-contained briefing that I can paste at the start of
a new conversation to resume work with no loss of context.
```

**Start-of-next-session prompt:**

```text
I am continuing work from a previous session. Here is the handoff summary
that captures where we left off. Read it carefully before proceeding.

[PASTE HANDOFF SUMMARY HERE]

Based on this context, the next task is: [describe what you need]
```

:::tip
The handoff summary works for any AI tool. Use it with Claude, Gemini, or any other model. It is especially valuable when you are switching between tools for different tasks.
:::

---

## Solution 2: Projects and Gems

For ongoing work that spans many sessions, the handoff summary technique works but is manual. [Claude Projects](/context-and-memory/claude-projects) and [Gemini Gems](/context-and-memory/gemini-gems) solve this more elegantly by making your context persistent.

| Technique | Best For | Effort |
|-----------|---------|--------|
| Handoff summaries | Ad hoc tasks, cross-tool work, one-off analyses | Low (per session) |
| Claude Projects | Recurring tasks, team-shared context, document-heavy work | Medium (one-time setup) |
| Gemini Gems | Google Workspace-heavy work, live-syncing documents | Medium (one-time setup) |

If you find yourself using handoff summaries for the same type of work more than three times, that is a signal to create a Project or Gem instead.

---

## Solution 3: Team Prompt Library

As your team develops effective prompts, save them in a shared location so everyone benefits from what works. This prevents the common problem where one team member discovers an excellent prompt structure and the rest of the team never learns about it.

### How to Build a Prompt Library

1. **Choose a shared location.** A Google Doc, Notion page, or shared Drive folder works. The location matters less than accessibility -- everyone should be able to find and edit it.

2. **Establish a template for entries.**

```text
## [Prompt Name]
**Author:** [Who created/tested this]
**Last tested:** [Date]
**Works best with:** [Claude / Gemini / Both]
**Use case:** [One sentence describing when to use this]

### Prompt
[The full prompt text, ready to copy-paste]

### Tips
[Any notes on customization, common pitfalls, or variations]
```

3. **Encourage contribution.** When someone gets a particularly good output from an AI tool, they should add the prompt that produced it to the library.

4. **Review periodically.** Prompts that worked three months ago may need updating as AI models improve or your company context changes. Review the library quarterly.

### What to Save

Not every prompt belongs in the library. Save prompts that:

- Produce consistently good results across multiple uses
- Took significant iteration to develop
- Are used by more than one team member
- Involve complex formatting or multi-step reasoning
- Encode company-specific knowledge (brand voice, regulatory requirements, KPI definitions)

---

## When to Start Fresh vs. Continue

Not every conversation should be continued. Sometimes starting a new conversation produces better results.

### Start a New Conversation When:

- **The conversation has drifted.** If you have gone through 15+ turns and the AI output is no longer matching your expectations, accumulated context may be causing confusion. A clean start with a clear prompt often works better than trying to course-correct.

- **The AI has made errors that compounded.** If the AI produced an incorrect analysis and you built several follow-up turns on top of it, the faulty reasoning may be embedded in the context. Start fresh and provide correct information from the beginning.

- **You are switching to a fundamentally different task.** If you were analyzing financial data and now want to draft patient communications, a new conversation with task-specific instructions will produce better results than continuing in the same thread.

- **The conversation is very long.** AI models have finite context windows. As conversations grow, earlier content may receive less attention. For important work, a fresh conversation ensures your instructions and context are prominent.

### Continue the Conversation When:

- **You are iterating on the same deliverable.** Refining a draft, adjusting an analysis, or tweaking a template works better in the same conversation because the AI remembers your preferences and feedback.

- **You are working through a multi-step process.** If step 3 depends on the output of steps 1 and 2, keeping the conversation intact avoids re-establishing context.

- **The AI's responses are still high-quality and on-target.** If things are working, keep going.

---

## Practical Workflow: The Monday Morning Reset

Here is a weekly workflow that combines all three techniques:

**Friday afternoon:** Before you close out for the week, run the handoff summary prompt for any in-progress work. Save the summaries in your prompt library or a personal notes document.

**Monday morning:** Open your Claude Project or Gemini Gem for your primary function. Paste the handoff summary from Friday for any in-progress work. Start your week with full context and zero ramp-up time.

**Throughout the week:** When you discover a prompt that works exceptionally well, add it to the team prompt library. When you finish a multi-session project, archive the final handoff summary for reference.

---

## Quick Reference

| Situation | Technique |
|-----------|-----------|
| One-off task, single session | No continuity needed -- just write a good prompt |
| Multi-session project | Handoff summaries between sessions |
| Recurring task (weekly, monthly) | Claude Project or Gemini Gem |
| Team-wide consistency | Shared prompt library + Projects/Gems |
| Long conversation losing quality | Start fresh, paste handoff summary |

:::info Compliance Reminder
Never include patient identifiers, protected health information, or other sensitive data in handoff summaries, prompt libraries, or shared documents. All context-carrying artifacts should use de-identified or synthetic data only. See the [Governance](/governance/patient-data-and-compliance) section for detailed requirements.
:::
