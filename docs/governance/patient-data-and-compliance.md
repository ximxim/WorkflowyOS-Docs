---
sidebar_position: 1
title: "Patient Data and Compliance"
---

# Patient Data and Compliance

Patient data privacy is the single most important consideration when adopting AI at PurposeMed. In your team survey, eight out of nine respondents identified data privacy and compliance as their top concern -- and for good reason. The regulatory landscape is complex, the consequences of a breach are severe, and the populations you serve face unique risks if their information is exposed.

This page gives you the compliance framework you need to use AI confidently without putting patients or the organization at risk.

---

## The Compliance Landscape

PurposeMed operates across multiple jurisdictions, each with its own privacy legislation. Your AI governance must satisfy the strictest standard across all of them simultaneously.

| Jurisdiction | Legislation | Key Requirements |
|---|---|---|
| Canada (federal) | PIPEDA | Consent-based collection, use, and disclosure of personal information. Applies to cross-provincial data flows. |
| Ontario | PHIPA | Health-specific protections for personal health information. Mandatory breach reporting. |
| British Columbia | PIPA / FIPPA | Consent requirements plus data residency considerations for public bodies. |
| Alberta | HIA | Health information custodian obligations, strict access controls. |
| Quebec | Law 25 | Penalties up to $25M or 4% of global revenue. Privacy impact assessments mandatory for certain projects. Consent rules significantly tightened since 2023. |
| United States | HIPAA | Protected Health Information (PHI) rules, Business Associate Agreements (BAAs) required for vendors handling PHI. |

:::warning Design for the strictest standard
Rather than maintaining separate compliance postures for each jurisdiction, design your AI governance to meet the most restrictive requirements across all of them. Quebec's Law 25 and HIPAA together set the practical ceiling. If you satisfy both, you are well-positioned for every other jurisdiction PurposeMed operates in.
:::

---

## BAA Status of Major AI Providers

Not all AI tools are created equal when it comes to compliance. The consumer versions of popular tools are not suitable for any work involving patient data.

| Provider | HIPAA/BAA Status |
|---|---|
| Consumer ChatGPT (free/Plus) | **NOT compliant** -- no BAA available |
| Consumer Claude (free/Pro) | **NOT compliant** -- no BAA available |
| Consumer Gemini (free/Advanced) | **NOT compliant** -- no BAA available |
| Claude Enterprise (Anthropic) | BAA-eligible -- supports signed BAAs |
| ChatGPT for Healthcare (OpenAI) | Supports BAAs with healthcare-specific configurations |
| Azure OpenAI Service | Configurable for HIPAA compliance with signed BAA |
| Google Workspace (Enterprise) | BAA available through Enterprise agreements |

:::danger Never enter patient data into any consumer AI tool
Consumer plans for ChatGPT, Claude, and Gemini do not offer Business Associate Agreements. They may use your inputs for model training. Enterprise plans with signed BAAs are the only acceptable option for data that could identify patients. There are no exceptions to this rule.
:::

---

## The Golden Rule

If you remember only one thing from this entire training program, make it this:

> **When in doubt, do not enter the data.**

Before typing anything into an AI tool, ask yourself: "If this conversation were made public tomorrow, would any patient be identifiable or harmed?" If the answer is anything other than a clear no, stop and consult the [Data Classification](/governance/data-classification) guide.

---

## Stigma-Sensitive Data Requires Extra Protection

PurposeMed is not a general telehealth provider. Freddie serves patients managing HIV and PrEP. Frida supports patients with ADHD. Foria provides gender-affirming care including hormone therapy. Each of these populations faces real stigma in traditional healthcare settings, and that stigma extends to their data.

A breach exposing HIV status, gender-affirming care records, or ADHD diagnoses carries outsized harm compared to a general health data breach. Patients may face:

- **Employment discrimination** based on disclosed health conditions
- **Social consequences** in communities or families that are not supportive
- **Insurance complications** in jurisdictions with weaker protections
- **Physical safety risks**, particularly for patients receiving gender-affirming care in hostile political environments

Gender-affirming care data deserves additional protections given the current political climate in several US states and the potential for cross-border legal exposure. Apply maximum data protection standards to all PurposeMed patient data, regardless of service line.

:::info Minimum viable data principle
Only collect, store, and process the minimum patient data necessary for the task at hand. When using AI tools for clinical workflows, always ask: "Can I accomplish this task with less patient data, or with de-identified data instead?"
:::

---

## What You Can Do Today

You do not need to wait for a formal governance committee to start protecting patient data. Here are steps every executive can take immediately:

1. **Audit your own AI usage.** Review the last 30 days of your ChatGPT, Claude, and Gemini conversations. Did any of them contain patient-identifiable information? If so, delete those conversations and switch to an approved enterprise tool for that type of work.

2. **Check your team's tools.** Ask each person who reports to you which AI tools they use regularly. If any are consumer-grade tools being used with sensitive data, flag it immediately.

3. **Bookmark the [Data Classification](/governance/data-classification) page.** Before entering any data into an AI tool, consult the four-tier classification system to determine what level of protection is required.

4. **Set up an enterprise AI workspace.** If your department does not yet have access to an enterprise AI tool with a signed BAA, escalate this to IT Security as a priority.

5. **Lead by example.** When you use AI in meetings or share AI-generated outputs, be transparent about which tool you used and confirm it was an approved one. Your team takes cues from your behavior.

---

## Further Reading

- [Data Classification](/governance/data-classification) -- the four-tier system for categorizing data before it enters any AI tool
- [Shadow AI and Approved Tools](/governance/shadow-ai-and-approved-tools) -- managing the risk of unapproved AI usage across the organization
