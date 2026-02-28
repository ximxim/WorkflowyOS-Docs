---
sidebar_position: 1
title: "AI Research Workflows"
hide_table_of_contents: true
---

# AI Research Workflows

AI research tools have moved far beyond simple web searches. You can now conduct multi-source investigations that synthesize dozens of sources into structured analysis -- the kind of work that previously took an analyst a full day. This section covers the two most powerful research tools available to your team and when to use each one.

---

## Claude Research Mode

Claude Research Mode is an iterative, multi-source investigation tool built into Claude. When activated, Claude autonomously conducts multiple web searches, reads and analyzes sources, and synthesizes findings into a cited, structured response. It is available on Claude Pro, Max, Team, and Enterprise plans.

**How it works:**

1. Open a new conversation in Claude.
2. Enable **Web Search** (the globe icon) in the input toolbar.
3. Enable **Research** (appears once Web Search is active).
4. Submit your research query.
5. Claude conducts 5 or more searches iteratively, refining its approach based on what it finds. This typically takes 1-3 minutes.
6. Review the final response, which includes inline citations linking to each source.

Research Mode automatically enables Extended Thinking, which means Claude reasons through contradictions and gaps in the sources before presenting its conclusions. You can watch its progress in real time as it searches, reads, and synthesizes.

**Healthcare research example:**

```text
Research the current telehealth regulatory landscape for prescribing PrEP
across Canadian provinces and US states. Specifically:

1. Which provinces and states allow initial PrEP prescriptions via
   telehealth without an in-person visit?
2. Compare PIPEDA and HIPAA requirements for virtual prescription
   management -- where do they align and where do they diverge?
3. What recent regulatory changes (2024-2026) affect cross-border
   telehealth prescribing?
4. Identify any pending legislation that could impact PurposeMed's
   Freddie service.

Cite all sources with links. Flag any areas where regulations are
ambiguous or actively changing.
```

This type of query benefits from Research Mode because it requires cross-referencing multiple jurisdictions, identifying recent changes, and distinguishing between established regulations and pending legislation.

---

## Gemini Deep Research

Gemini Deep Research takes a different approach. It autonomously browses 100 or more websites and produces a multi-page research report. Where Claude Research excels at reasoning through a focused question, Gemini Deep Research excels at covering a broad topic comprehensively.

**How it works:**

1. Go to [gemini.google.com](https://gemini.google.com).
2. Click **Tools** in the input toolbar.
3. Select **Deep Research**.
4. Enter your research query.
5. Gemini generates a research plan -- review it and edit if needed (you can add or remove areas of focus).
6. Click **Start Research**. The process takes 5-15 minutes depending on breadth.
7. Review the multi-page report with source citations throughout.

**Key features:**

- **Export to Google Docs** -- One click exports the full report into a formatted Google Doc for collaborative editing and sharing.
- **Audio Overview** -- Generates a podcast-style audio discussion of the research findings. Useful for consuming the report during a commute or sharing with team members who prefer audio formats.
- **Source transparency** -- Every claim links back to its source, and you can see the full list of websites Gemini visited during research.

**Healthcare research example:**

```text
Conduct a comprehensive analysis of the competitive landscape for
cross-border telehealth companies serving LGBTQ+ healthcare needs in
North America.

Include: market size estimates, key competitors and their service
offerings, regulatory barriers to entry, reimbursement models, patient
acquisition strategies, and technology platforms used.

Focus areas: HIV/PrEP services, ADHD treatment, and gender-affirming
care.
```

This type of query benefits from Deep Research because it requires surveying a large number of sources across different industries (healthcare, technology, regulatory, financial) and assembling them into a coherent market picture.

---

## When to Use Each Tool

| Factor | Claude Research | Gemini Deep Research |
|---|---|---|
| **Best for** | Depth and reasoning on focused questions | Breadth and comprehensive source coverage |
| **Source volume** | 5-20 sources, deeply analyzed | 100+ sources, broadly surveyed |
| **Time required** | 1-3 minutes | 5-15 minutes |
| **Output format** | Conversational response with citations | Multi-page structured report |
| **Reasoning** | Stronger at identifying contradictions and nuance | Better at aggregating and summarizing at scale |
| **Follow-up** | Continue the conversation to dig deeper | Export to Docs, then use Claude to analyze specific sections |
| **Collaboration** | Share conversation link | Export to Google Docs for team editing |

**Practical guidance for PurposeMed:**

- **Regulatory questions** (e.g., PIPEDA vs. HIPAA for a specific use case) -- Use Claude Research. The reasoning quality matters more than source volume when interpreting regulations.
- **Market research and competitive analysis** -- Use Gemini Deep Research. Breadth of coverage matters more when mapping a landscape.
- **Clinical protocol research** -- Start with Gemini Deep Research for a comprehensive literature survey, then paste key findings into Claude for deeper analysis of specific protocols.
- **Board meeting preparation** -- Use Gemini Deep Research for the initial brief, export to Google Docs, then refine with your team.

:::info
Both tools search the public web. Neither has access to paywalled medical journals, internal databases, or subscription services. For PubMed-indexed research, you may need to search PubMed directly and paste relevant abstracts into Claude for analysis.
:::

---

## Try It Now

Pick a regulatory or market question that is relevant to your current work at PurposeMed. Run it through both tools and compare the results.

**Suggested questions by role:**

- **CEO / Chief of Staff:** "What are the key regulatory risks for cross-border telehealth companies operating in both Canada and the US in 2026?"
- **HR:** "What are current best practices for AI-augmented hiring in regulated healthcare companies?"
- **Finance:** "What reimbursement models are telehealth companies using for PrEP prescriptions in Canada and the US?"
- **Marketing:** "How are telehealth companies marketing stigma-sensitive healthcare services to LGBTQ+ communities?"
- **Operations:** "What is the current state of AI-assisted prior authorization in US telehealth?"
- **Product / Engineering:** "What telehealth platforms support cross-border prescribing with integrated compliance checks?"

After running both, note which tool gave you more useful results for your specific question. This will inform which tool you reach for first in the future.
