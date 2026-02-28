---
sidebar_position: 3
title: "Shadow AI and Approved Tools"
---

# Shadow AI and Approved Tools

Shadow AI -- the use of unapproved artificial intelligence tools within an organization -- is one of the fastest-growing risk vectors in healthcare. You cannot govern what you cannot see, and the gap between what employees actually use and what IT knows about is wider than most executives realize.

This page explains why shadow AI happens, what it costs, and how to build an approved toolset that makes the unauthorized path unnecessary.

---

## Shadow AI Is a Critical Risk

The numbers paint a clear picture of the threat:

- **86% of IT executives** reported shadow IT activity within their health systems in 2025, meaning the vast majority of healthcare organizations have tools operating outside governance oversight.
- **17% of healthcare workers** admitted to using unauthorized AI tools for work tasks, and that figure likely understates the reality given the stigma around self-reporting policy violations.
- Shadow AI contributed an estimated **$200,000 to the average cost** of data breaches where unauthorized tools were involved.
- The **average healthcare data breach now costs $9.48 million**, making healthcare the most expensive industry for data breaches for the thirteenth consecutive year.

For PurposeMed specifically, the risk is amplified by the sensitivity of the populations you serve. A breach involving HIV status, ADHD diagnoses, or gender-affirming care records carries disproportionate harm to patients -- harm that cannot be remediated after the fact.

:::danger Shadow AI is not hypothetical
If 17% of healthcare workers nationally admit to using unauthorized AI, it is statistically certain that unauthorized AI usage is already occurring somewhere within PurposeMed's operations. The question is not whether it is happening, but whether you have visibility into it and a plan to address it.
:::

---

## Why People Use Unapproved Tools

Understanding the motivation behind shadow AI is essential to stopping it. People rarely use unauthorized tools out of malice. They use them because the approved path is too slow, too limited, or nonexistent.

**Documentation burden.** Clinicians and operational staff spend significant time on documentation, note-taking, and administrative writing. When a consumer AI tool can draft a clinical summary in seconds, the temptation to paste in patient context is real -- especially during a busy clinic day.

**Lack of approved alternatives.** If your organization has not provided a compliant AI tool that handles the workflows people need, they will find their own. Every week without an approved alternative is a week where shadow AI usage grows.

**Friction in the approval process.** When requesting a new tool takes months of procurement review, people work around the system. A six-month approval cycle cannot compete with a tool that takes thirty seconds to sign up for.

**Perceived low risk.** Many employees believe that "just this once" or "I removed the patient name" is sufficient protection. They underestimate re-identification risk, model training exposure, and the regulatory consequences of even a single unauthorized disclosure.

---

## The Most Effective Mitigation

The single most effective way to reduce shadow AI is to **provide compliant alternatives that are as easy to use as consumer tools**. Policy alone does not work. If the approved tool is harder to access, slower, or less capable than the unauthorized one, people will default to the path of least resistance.

Beyond providing good alternatives, implement these complementary controls:

### Clear, Enforceable Policies

Publish an AI acceptable use policy that is specific, concise, and tied to real consequences. Vague guidance like "use AI responsibly" is not actionable. Define exactly which tools are approved, which data tiers each tool can handle, and what happens when someone violates the policy.

### Network-Level Filtering

Work with IT Security to block or flag access to known consumer AI endpoints from corporate networks and managed devices. This is not foolproof -- personal devices bypass network controls -- but it reduces casual unauthorized usage.

### Amnesty Disclosure Programs

Create a time-limited amnesty period where employees can report past unauthorized AI usage without disciplinary consequences. This gives you visibility into the actual scope of shadow AI and lets you remediate before a breach occurs. After the amnesty window closes, enforce the policy consistently.

### Mandatory Training

Require all employees to complete AI governance training before receiving access to approved tools. This training should include concrete examples relevant to PurposeMed's service lines -- not generic data privacy content. Show people what a Freddie patient breach looks like, what a Foria data exposure means for a patient in a hostile jurisdiction.

### Data Loss Prevention Monitoring

Deploy DLP tools that detect when sensitive data patterns (health card numbers, medical record numbers, date-of-birth formats) are being transmitted to unauthorized external services. Alert on violations in real time so the security team can intervene before data leaves the organization.

:::info Amnesty programs surface real risk
Organizations that run amnesty disclosure programs consistently discover 3-5x more unauthorized AI usage than they expected. The information you gain during an amnesty period is far more valuable than the satisfaction of disciplining early violations. Get the data first, then enforce.
:::

---

## Building Your Approved Tools List

Your approved tools list is only credible if the evaluation process is rigorous and transparent. Every AI vendor under consideration must meet the following minimum requirements before they are added to the approved list.

### Vendor Evaluation Criteria

| Requirement | What to Verify |
|---|---|
| **Signed BAA** | The vendor will execute a Business Associate Agreement with PurposeMed. Not "supports BAAs" -- actually signed and on file. |
| **SOC 2 Type 2 certification** | The vendor has completed an independent audit of their security controls over a sustained period (Type 2), not just a point-in-time assessment (Type 1). |
| **No training on customer data** | The vendor contractually commits that your data will not be used to train, fine-tune, or improve their AI models. Verify this in the terms of service and the BAA, not just in marketing materials. |
| **AES-256 encryption at rest** | All stored data, including conversation logs, uploaded documents, and cached outputs, is encrypted using AES-256 or equivalent. |
| **TLS 1.2+ encryption in transit** | All data transmitted between your systems and the vendor uses TLS 1.2 or higher. TLS 1.0 and 1.1 are deprecated and unacceptable. |
| **Role-based access controls (RBAC)** | The platform supports granular permissions so you can restrict who can access which workspaces, conversations, and data. |
| **Audit logging** | The vendor provides detailed logs of who accessed what data and when. These logs must be exportable and retained for a period consistent with your compliance obligations. |
| **Data residency options** | The vendor can guarantee where your data is stored geographically. For PurposeMed, Canadian data residency may be required for certain data types under PIPEDA and provincial legislation. |

:::warning "Supports BAAs" is not the same as "has a signed BAA"
Many vendors advertise BAA support on their pricing pages. Until a BAA is actually executed between PurposeMed and the vendor, reviewed by your legal team, and countersigned -- the tool is not approved for Tier 2 data. Marketing claims are not contracts.
:::

### Maintaining the List

The approved tools list is a living document. Review it quarterly to account for:

- Vendors changing their terms of service or data handling practices
- New tools entering the market that may better serve your needs
- Tools that have had security incidents or compliance failures
- Changes in PurposeMed's regulatory obligations as you expand into new jurisdictions

---

## AI Governance Committee

Effective AI governance requires a standing committee with the authority to evaluate tools, set policy, and enforce compliance. Ad hoc decision-making by individual departments leads to inconsistent standards and gaps in oversight.

### Committee Structure

| Role | Responsibility |
|---|---|
| **Executive Sponsor** | Provides organizational authority and budget. Ensures AI governance aligns with PurposeMed's strategic objectives. Breaks ties on contested decisions. |
| **Privacy Officer** | Ensures all AI usage complies with HIPAA, PIPEDA, provincial health privacy laws, and Quebec's Law 25. Reviews data classification decisions. |
| **Security Officer** | Evaluates the technical security posture of AI vendors. Manages DLP monitoring, network controls, and incident response for AI-related events. |
| **Clinical Lead** | Represents clinical workflow needs. Validates that approved tools actually solve the problems clinicians face. Prevents governance from becoming disconnected from clinical reality. |
| **Department Representatives** | One representative from each major department (operations, product, marketing, finance). Surfaces department-specific AI needs and ensures policies are practical at the team level. |

### Five-Step Risk Assessment Process

When a new AI tool is proposed for use at PurposeMed, the governance committee follows this assessment process:

**Step 1: Use Case Documentation**
The requesting team documents the specific use case, including what data will be processed, which data tier applies, the expected frequency of use, and the business justification.

**Step 2: Vendor Security Review**
The security officer evaluates the vendor against the criteria in the vendor evaluation table above. Any gap is flagged. Tools that fail on BAA, SOC 2, or the no-training-on-data requirement are rejected at this stage.

**Step 3: Privacy Impact Assessment**
The privacy officer conducts a privacy impact assessment (PIA) to evaluate risks specific to PurposeMed's patient populations. This assessment must account for the heightened sensitivity of HIV, ADHD, and gender-affirming care data.

**Step 4: Clinical Workflow Validation**
The clinical lead verifies that the tool addresses a genuine workflow need and that the proposed usage pattern does not create new clinical risks (e.g., over-reliance on AI-generated clinical content without practitioner review).

**Step 5: Approval, Conditions, and Monitoring**
The committee votes on approval. Approved tools receive a written scope of permitted use (which data tiers, which departments, which workflows). The security officer configures monitoring, and the tool is added to the approved list with a scheduled review date.

:::tip Start with the highest-impact use case
You do not need to evaluate every AI tool on the market before launching your governance program. Identify the single highest-volume unauthorized AI use case at PurposeMed, find a compliant tool that addresses it, and deploy it with proper governance. Reducing the most common shadow AI behavior by even 50% dramatically lowers your risk exposure.
:::

---

## Further Reading

- [Patient Data and Compliance](/governance/patient-data-and-compliance) -- the regulatory framework that drives these requirements
- [Data Classification](/governance/data-classification) -- how to determine which tier your data belongs to before selecting a tool
