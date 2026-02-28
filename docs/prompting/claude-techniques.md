---
sidebar_position: 2
title: "Claude-Specific Techniques"
---

# Claude-Specific Techniques

Claude (by Anthropic) is one of PurposeMed's primary AI tools. While the [general prompting formula](/prompting/anatomy-of-a-great-prompt) applies to any model, Claude has specific behaviors and features that you can leverage for better results.

---

## Claude Follows Instructions Precisely

Claude is designed to follow instructions with high fidelity. This is a strength when you want predictable, structured output. It also means that if your prompt is too rigid, the output will feel mechanical.

**Key takeaway:** If you want creative, expansive, or exploratory output, you need to explicitly ask for it. Claude will not volunteer ideas beyond what you request unless you invite it to.

```text
After completing the analysis, suggest 2-3 alternative approaches I may not
have considered. Explain the tradeoffs of each.
```

---

## Explain the WHY Behind Your Constraints

Claude responds better when you explain the reasoning behind a rule rather than just stating the rule. This is because Claude uses the rationale to make better judgment calls in ambiguous situations.

**Less effective:**

```text
Keep the response under 200 words.
```

**More effective:**

```text
Keep the response under 200 words because this will be inserted into a Slack
message, and long messages get skipped by busy executives.
```

The second version gives Claude context to make good decisions about what to cut and what to keep.

---

## XML Tags for Complex Prompts

When your prompt has multiple sections -- background documents, instructions, constraints, output specifications -- use XML tags to separate them. Claude is specifically trained to recognize XML structure and treats each section as a distinct input.

```text
<patient_context>
PurposeMed operates three telehealth service lines in Canada:
- Freddie: HIV prevention (PrEP) and treatment
- Frida: ADHD assessment and medication management
- Foria: Gender-affirming hormone therapy

All services are delivered via asynchronous telehealth with licensed physicians.
Patient communications must use inclusive, person-first language at a 6th-grade
reading level.
</patient_context>

<task>
Draft a follow-up message for patients who completed an initial consultation
on the Foria platform but have not scheduled their hormone therapy follow-up
within 14 days.
</task>

<constraints>
- Do not reference specific diagnoses or medications by name
- Tone: warm, non-judgmental, supportive
- Include a clear call-to-action to book the follow-up
- Maximum 150 words
</constraints>

<format>
Subject line + message body. Use short sentences and paragraphs.
</format>
```

:::tip When to use XML tags
Use XML tags when your prompt exceeds roughly 200 words, when you are including reference documents alongside instructions, or when you notice Claude conflating different parts of your request. For shorter prompts, plain text with clear headings works fine.
:::

---

## Document Placement Matters

When you include long documents in your prompt (policies, reports, meeting transcripts), place them at the **top** of the prompt and your questions or instructions at the **end**. Research shows this ordering improves output quality by roughly 30% compared to putting questions first.

**Recommended structure:**

```text
<reference_document>
[Paste the full policy / report / transcript here]
</reference_document>

<instructions>
Based on the document above, identify the three most significant compliance
gaps for a cross-border telehealth provider operating under PIPEDA and PHIPA.
For each gap, recommend a specific remediation action.
</instructions>
```

This works because Claude processes the document first and then applies your questions to the fully loaded context, rather than trying to answer questions about a document it has not yet read.

---

## Extended Thinking

Claude offers an Extended Thinking feature that automates chain-of-thought reasoning. When enabled, Claude can use over 64,000 tokens of internal reasoning before producing its response. You do not see the full thinking process, but the output quality improves significantly for complex tasks.

Extended Thinking is most valuable for:

- Multi-step financial analyses
- Regulatory compliance reviews with many interacting requirements
- Strategic planning where tradeoffs need to be weighed
- Debugging complex logic or workflows

You can trigger deeper reasoning by being explicit:

```text
This is a complex analysis. Take your time, consider multiple angles, and
think through edge cases before presenting your conclusions.
```

:::info
Extended Thinking is available on Claude's Pro and Team plans. The feature activates automatically when Claude determines the task benefits from deeper reasoning, but explicit prompting encourages it.
:::

---

## The Contract-Style System Prompt

For recurring tasks, define a contract-style system prompt that you can reuse across conversations. This format works especially well when saved in a Claude Project (see [Claude Projects](/context-and-memory/claude-projects)).

```text
You are: A healthcare policy compliance analyst specializing in Canadian
privacy legislation (PIPEDA, PHIPA) and US HIPAA requirements.

Goal: Evaluate provided policies or practices against applicable regulations
and produce actionable compliance assessments.

Constraints:
1. Always specify which jurisdiction and regulation applies to each finding
2. Distinguish between mandatory requirements and best practices
3. Flag any areas where provincial regulations may differ
4. Use plain language — the audience is executives, not lawyers
5. If a regulation is ambiguous, state both interpretations

If unsure: State the ambiguity explicitly and ask one clarifying question
before proceeding.

Output format:
| Finding | Regulation | Jurisdiction | Risk Level | Recommendation |
```

This template ensures consistent, high-quality output every time you use it, regardless of which team member runs the prompt.

---

## Healthcare Example: Policy Compliance Analysis

Here is a complete prompt combining multiple Claude-specific techniques for a real PurposeMed use case.

```text
<reference_document>
[Paste your internal data handling policy here]
</reference_document>

<system_instructions>
You are: A healthcare privacy compliance specialist with expertise in PIPEDA,
PHIPA, and HIPAA cross-border requirements.

Goal: Identify gaps between the provided policy and regulatory requirements
for a telehealth company operating across Canadian provinces and serving some
US-based patients.

Constraints:
1. Focus on requirements specific to telehealth and digital health records
2. Prioritize findings by risk level (Critical, High, Medium, Low)
3. For each gap, reference the specific regulation section
4. If a requirement differs between provinces, note the strictest standard
5. Use plain language appropriate for executive review

If unsure: Flag the uncertainty and recommend consulting legal counsel for
that specific item.

Output format:
## Executive Summary (3-5 sentences)

## Findings Table
| # | Gap Description | Regulation | Risk Level | Recommendation |

## Immediate Action Items (Critical and High only)
</system_instructions>
```

:::danger
Never include actual patient data, real patient identifiers, or production health records in any prompt. Use de-identified or synthetic data for all AI interactions. See the [Governance](/governance/patient-data-and-compliance) section for detailed guidelines.
:::
