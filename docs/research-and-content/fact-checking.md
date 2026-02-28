---
sidebar_position: 2
title: "Fact-Checking AI Outputs"
hide_table_of_contents: true
---

# Fact-Checking AI Outputs

In PurposeMed's team survey, accuracy and reliability of AI outputs ranked as the second-highest concern, cited by 5 of 9 respondents. This concern is well-founded. AI models can generate confident, detailed, and entirely fabricated information -- and in healthcare, acting on incorrect information carries real consequences. This section gives you a systematic method for verifying AI outputs before you rely on them.

---

## Why Fact-Checking Matters in Healthcare

The stakes of AI inaccuracy are different at PurposeMed than at a typical technology company. Consider what can go wrong:

- **Regulatory misinformation** -- An AI output incorrectly states that Ontario's PHIPA allows a specific type of data sharing. Your team acts on it. The result is a potential privacy breach and regulatory investigation.
- **Clinical misstatement** -- An AI-generated patient education document includes outdated PrEP dosing guidance. A patient reads it on your website.
- **Financial misrepresentation** -- An AI-drafted investor update includes a market size statistic that sounds precise but was fabricated. An investor discovers this during due diligence.
- **Legal exposure** -- An AI-drafted policy references a regulation that does not exist. It passes internal review because it sounded authoritative.

None of these scenarios require malice. They are the natural result of how language models work: they generate text that is statistically likely to follow a pattern, not text that is verified against reality. Your job is to close that gap.

:::danger
Never rely on AI alone for clinical guidelines, regulatory interpretations, or legal advice. Always verify with authoritative sources and qualified professionals. AI outputs are starting points for research, not final answers.
:::

---

## The Lateral Reading Method

Lateral reading is the gold standard for fact-checking, used by professional fact-checkers and investigative journalists. Instead of evaluating a claim by staring at it harder, you leave the source and check it against independent references.

Here is the process applied to AI outputs:

### Step 1: Break the Output into Individual Claims

Take any AI-generated text and identify every distinct factual claim. A single paragraph often contains 3-5 separate claims that each need independent verification.

**Example AI output:**

> "Under PIPEDA, telehealth companies must obtain explicit consent before collecting personal health information. The Office of the Privacy Commissioner recommends using a layered consent approach for digital health services, with 73% of telehealth providers adopting this model by 2025."

This paragraph contains three distinct claims:
1. PIPEDA requires explicit consent for personal health information collection.
2. The OPC recommends a layered consent approach for digital health.
3. 73% of telehealth providers adopted this model by 2025.

### Step 2: Verify Each Claim Independently

Do not assume that because one claim in a paragraph is correct, the others are too. Check each one separately.

### Step 3: Cross-Reference 2-3 Credible Sources Per Claim

For each claim, find at least two independent, authoritative sources that confirm it. "Independent" means they are not citing each other or the same original source.

### Step 4: Verify Citations Actually Exist

If the AI output includes citations or references, check that:
- The cited document actually exists.
- The cited document actually says what the AI claims it says.
- The citation is to the correct section, page, or provision.

AI models frequently generate plausible-sounding citations to documents that do not exist, or attribute claims to real documents that contain no such information.

### Step 5: Classify Each Claim

For every claim, determine whether it is:
- **Verified** -- Confirmed by 2+ independent, credible sources.
- **Misleading** -- Contains a kernel of truth but is stated in a way that could lead to incorrect conclusions.
- **Fabricated** -- No supporting evidence found, or directly contradicted by authoritative sources.
- **Unverifiable** -- Cannot be confirmed or denied with available sources (common with very specific statistics).

---

## Red Flags in AI Outputs

Train yourself to notice these patterns. They do not guarantee the information is wrong, but they signal that extra verification is needed.

**Statistics without specific sources.** If an AI output says "studies show that 78% of telehealth patients prefer..." but does not name the study, the statistic is likely fabricated. Real statistics come from specific studies conducted by specific organizations on specific dates.

**Named experts you cannot find.** AI sometimes invents experts to lend authority to claims. If an output references "Dr. Sarah Chen, a leading telehealth regulatory expert at Harvard," verify that this person exists and holds that position before citing them.

**Very precise numbers that seem convenient.** An AI claiming that "AI-assisted prior authorization reduces processing time by exactly 47.3%" is likely generating a plausible-sounding number rather than citing real data. Real-world measurements rarely land on conveniently precise figures.

**Legal or regulatory interpretations presented as definitive.** Phrases like "PIPEDA clearly requires..." or "Under HIPAA, this is permitted because..." should raise your verification threshold. Regulatory interpretation is nuanced, jurisdiction-specific, and often contested.

**Outdated information presented as current.** AI training data has a cutoff date. An output may describe a regulation or market condition that was accurate two years ago but has since changed. Always check recency.

**Unanimous consensus claims.** Phrases like "all experts agree" or "it is universally accepted that" are almost never accurate in healthcare policy or regulation. Look for the dissenting view.

---

## Healthcare-Specific Verification Sources

When verifying AI outputs related to PurposeMed's work, these are your primary authoritative sources:

| Domain | Authoritative Source | What It Covers |
|---|---|---|
| HIPAA compliance | [HHS Office for Civil Rights (OCR)](https://www.hhs.gov/hipaa/) | US federal health privacy regulations, enforcement actions, guidance documents |
| PIPEDA compliance | [Office of the Privacy Commissioner of Canada](https://www.priv.gc.ca/) | Canadian federal privacy law, findings, guidance for health sector |
| Ontario health privacy | [Information and Privacy Commissioner of Ontario (IPC)](https://www.ipc.on.ca/) | PHIPA interpretation, orders, health privacy guidance |
| Clinical guidelines | [PubMed / NCBI](https://pubmed.ncbi.nlm.nih.gov/) | Peer-reviewed medical literature, systematic reviews |
| Drug information | [Health Canada Drug Product Database](https://www.canada.ca/en/health-canada/services/drugs-health-products.html) / [FDA](https://www.fda.gov/) | Approved indications, prescribing information, safety alerts |
| Telehealth regulation | Provincial/state licensing boards | Jurisdiction-specific telehealth practice requirements |
| HIV/PrEP guidelines | [CDC PrEP guidelines](https://www.cdc.gov/hiv/prevention/prep.html) / [CATIE](https://www.catie.ca/) | Current clinical recommendations for PrEP prescribing |
| Market data | Named industry reports (e.g., McKinsey, Deloitte) | Verify that the specific report exists and contains the cited data |

:::tip
Bookmark these sources. When you use Claude Research or Gemini Deep Research, cross-reference their citations against these primary sources. If an AI output cites an authoritative source, go to that source directly and confirm the claim.
:::

---

## Applying the Method: A Worked Example

Suppose Claude generates this output in response to a question about prior authorization:

> "According to the American Medical Association's 2024 Prior Authorization Survey, 94% of physicians report that prior authorization delays patient care. The average prior authorization request takes 14 business days to process. CMS has proposed new rules requiring insurers to respond within 72 hours for urgent requests and 7 days for standard requests by 2026."

**Claim 1:** "94% of physicians report that prior authorization delays care" (AMA 2024 survey).
- Verification: Go to the AMA website and search for their prior authorization survey. The AMA does publish this survey regularly. Check the exact percentage and year.

**Claim 2:** "Average prior authorization request takes 14 business days."
- Verification: Search for this specific statistic. Is it from the same AMA survey? A different source? Or was it generated to sound plausible?

**Claim 3:** CMS proposed 72-hour urgent / 7-day standard response requirements by 2026.
- Verification: Search the CMS website for prior authorization rulemaking. CMS did propose the CMS Interoperability and Prior Authorization Final Rule. Check the actual timelines and requirements against the AI's description.

Even when an AI output is mostly accurate, the details often drift. The survey might be from 2023, not 2024. The percentage might be 88%, not 94%. The CMS timeline might be 2027, not 2026. These small errors matter when you are presenting information to a board, a regulator, or investors.

---

## Building a Verification Habit

Fact-checking does not need to add hours to your workflow. Here are practical ways to build it into your process:

1. **Flag before you forward.** Before sharing any AI-generated content with someone else, spend 2 minutes checking the most consequential claims.
2. **Use the "one source per paragraph" rule.** For any AI output you plan to use externally, verify at least one claim per paragraph against a primary source.
3. **Ask the AI to self-check.** After getting an initial output, follow up with: "Review your response and flag any claims you are less than 90% confident about." This does not replace external verification, but it surfaces areas the model itself considers uncertain.
4. **Maintain a corrections log.** When you find AI errors, note them. Over time, you will learn which types of claims your tools get wrong most often in your domain.

---

## Try It Now

Take the last substantive AI output you received -- whether from Claude, Gemini, or ChatGPT -- and apply the lateral reading method to three claims within it.

For each claim:
1. Identify the specific factual assertion.
2. Search for 2 independent sources that confirm or contradict it.
3. Classify it as verified, misleading, fabricated, or unverifiable.

If you do not have a recent output handy, use this prompt and fact-check the response:

```text
What are the key differences between PIPEDA and HIPAA regarding patient
consent for sharing health information with third-party telehealth
technology vendors? Include specific provisions and any recent
amendments.
```

Record what you find. Knowing your tools' accuracy patterns in your specific domain is one of the highest-value things you can learn in this training.
