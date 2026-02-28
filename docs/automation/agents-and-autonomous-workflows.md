---
sidebar_position: 3
title: "AI Agents and Autonomous Workflows"
hide_table_of_contents: true
---

# AI Agents and Autonomous Workflows

Everything covered so far in this training -- prompting, context management, research, content creation -- involves you directing the AI step by step. Agents represent the next level: AI systems that can plan multi-step tasks, use tools, execute actions, and self-correct when something goes wrong. This section covers what agents are, what platforms enable them, and how PurposeMed can adopt them progressively.

---

## The Three Levels of AI Capability

Understanding where agents sit in the broader landscape helps you see what is already possible and what is coming next.

### Level 1: Simple Chat

One-shot interactions with no memory, no tools, and no persistence. You ask a question, you get an answer, and the AI forgets everything when you close the conversation.

**Examples:** A quick question in ChatGPT, asking Claude to rewrite a paragraph, using Gemini to summarize an article.

**Limitations:** No context between sessions, no access to your documents or systems, purely reactive.

### Level 2: Custom Projects and Gems

Persistent workspaces with uploaded knowledge, custom instructions, and maintained context across conversations. This is where Claude Projects and Gemini Gems sit -- the tools covered earlier in this training.

**Examples:** A Claude Project loaded with PurposeMed's compliance policies that remembers your preferences. A Gemini Gem configured as an executive communications assistant with access to your brand voice guide.

**Limitations:** Still reactive -- they wait for you to ask. They cannot take action in external systems, run multi-step workflows, or operate independently.

### Level 3: Autonomous Agents

Systems that accept a goal, plan the steps needed to achieve it, use tools to execute those steps, evaluate results, and self-correct when something does not work. Agents can browse the web, read and write files, execute code, interact with APIs, and chain multiple actions together.

**Examples:** An agent that monitors your inbox, identifies prior authorization requests, gathers the required clinical documentation, fills out the authorization form, and submits it -- escalating to a human only when something falls outside its parameters.

According to Gartner, 40% of enterprise applications will feature task-specific AI agents by the end of 2026. This is not a distant future -- it is the current trajectory.

---

## Agent Platforms

Two platforms are most relevant for PurposeMed's adoption path.

### Claude Agent SDK

Anthropic's Agent SDK lets you build agents that can run commands, edit files, browse the web, and execute multi-step workflows. These agents use Claude's reasoning capabilities to plan their approach and adapt when they encounter obstacles.

**Best for:** Technical teams building custom automation, complex workflows requiring strong reasoning, tasks that involve document analysis and generation.

### Google Workspace Agents

Google has integrated agent capabilities directly into Workspace. You can build agents in minutes using natural language descriptions -- no coding required. These agents can access Gmail, Calendar, Drive, Docs, Sheets, and other Google services natively.

**Best for:** Non-technical users, workflows centered on Google Workspace, tasks involving email, calendar, and document management.

---

## Role-Specific Agents for PurposeMed

Here is how AI agents can be applied to each function at PurposeMed, starting with the tools you already have and progressing toward more autonomous systems.

### CEO

Build a **Personal Executive Assistant Project** in Claude loaded with PurposeMed's strategic plan, board materials, and competitive landscape research. This serves as your always-available strategic thinking partner. Pair it with a **Strategic Analysis agent** that monitors competitor announcements, regulatory changes, and market developments -- surfacing only the items that require your attention.

### Chief of Staff

Set up an **Executive Communications Project** that knows PurposeMed's internal voice, organizational structure, and current priorities. Use it to draft all-hands updates, board communications, and cross-functional memos. Build a **Meeting Prep Gem** in Gemini with access to Gmail, Calendar, and Drive that automatically assembles briefing packets before each meeting -- pulling relevant documents, past action items, and attendee context.

### HR

Deploy a **Hiring Pipeline agent** to screen resumes, schedule interviews, and manage candidate communications. Industry data shows AI-assisted hiring can improve efficiency by approximately 50%. Follow it with an **Onboarding agent** that guides new hires through their first 90 days -- scheduling training sessions, sharing relevant documents, and checking in on progress. Companies using structured AI-assisted onboarding report retention improvements of up to 82%.

### Finance

Create a **Budget vs. Actuals Project** in Claude loaded with your financial models, chart of accounts, and variance thresholds. Use it to generate monthly variance analyses with narrative explanations. Build an **Investor Reporting agent** that collects KPIs from across the organization, assembles them into your investor update template, drafts the narrative sections, and presents the package for your review before distribution.

### Marketing

Set up a **Content Generation Project** with PurposeMed's brand guidelines, tone of voice documentation, and -- critically -- stigma-sensitive language guidelines specific to Freddie, Frida, and Foria's patient populations. Every piece of content generated starts from a foundation of inclusive, person-first language. Complement this with a **Funnel Analysis agent** that tracks marketing performance metrics, identifies drop-off points, and recommends optimization actions.

### Operations

This function contains the highest-value agent opportunity at PurposeMed. **Prior authorization** is one of the most time-consuming, error-prone processes in healthcare operations. Industry estimates put annual spending on prior authorization at $41-56 billion in the US alone. AI-powered prior authorization agents can achieve up to 98% first-pass resolution rates, dramatically reducing the back-and-forth that delays patient care. Key vendors in this space include Cohere Health, Thoughtful AI, and Waystar. Even before deploying a specialized vendor solution, you can build a **Prior Authorization assistant** in Claude that drafts authorization requests, checks them against payer requirements, and identifies missing documentation before submission.

### Product and Engineering

Your team can use Claude Code with subagents for code review, automated test generation, documentation creation, and architecture analysis. These agents run in the development environment and integrate directly into the engineering workflow -- reviewing pull requests, generating test coverage for new features, and maintaining technical documentation as the codebase evolves.

---

## Implementation Roadmap

Adopting agents is not an all-or-nothing decision. Here is a phased approach that builds on the skills you are developing in this training.

### Phase 1: Personal AI Workspaces (Weeks 1-2)

**Goal:** Every team member has a configured Claude Project or Gemini Gem tailored to their role.

**Actions:**
- Each person creates at least one Project or Gem using the techniques from the Context and Memory module.
- Upload role-relevant reference documents (policies, templates, guidelines).
- Write custom instructions that reflect your function's specific needs.
- Use your workspace for at least 3 real work tasks in the first two weeks.

**Success metric:** Every team member can demonstrate a configured workspace that saves them measurable time on a recurring task.

### Phase 2: Team-Level Agents (Weeks 3-6)

**Goal:** Each function has a shared AI workspace that serves the whole team.

**Actions:**
- Identify the top 3 recurring tasks per function that consume the most time.
- Build shared Claude Projects or Gemini Gems for these tasks, with standardized instructions and reference materials.
- Document workflows: what goes in, what comes out, and what human review is required.
- Cross-train team members on using the shared workspaces.

**Success metric:** Each function has at least one shared workspace in active use by multiple team members.

### Phase 3: Operational Agents (Months 2-4)

**Goal:** Deploy autonomous agents for high-value, well-defined operational processes.

**Actions:**
- Prioritize by impact: start with prior authorization (Operations), investor reporting (Finance), and candidate screening (HR).
- Define clear boundaries: what the agent can do independently, what requires human approval, and what it should never do.
- Build monitoring dashboards to track agent performance, error rates, and escalation patterns.
- Run agents in "shadow mode" first -- they process tasks and present their proposed actions, but a human executes the final step.

**Success metric:** At least one operational agent is running in production with measurable time savings and acceptable error rates.

### Phase 4: External-Facing Agents (Months 4-6+)

**Goal:** Deploy agents that interact with patients, partners, or external stakeholders.

**Actions:**
- Conduct a thorough compliance review for any agent that handles patient data or communicates externally.
- Build testing frameworks that evaluate agent outputs against your quality and compliance standards.
- Implement audit logging for every action the agent takes.
- Start with low-risk external interactions (e.g., appointment reminders, general information requests) before progressing to higher-stakes tasks.

**Success metric:** External-facing agents pass compliance review and operate within defined parameters with human oversight.

:::warning
External-facing agents that handle patient data must comply with PIPEDA, PHIPA, and HIPAA requirements. Do not deploy patient-facing agents without a thorough compliance review involving your legal and privacy teams. See the Governance section for data classification guidelines.
:::

---

## Getting Started Today

You do not need to wait for Phase 3 or 4 to start benefiting from agent-like capabilities. Here is what you can do right now:

1. **Build your personal Project or Gem** (if you have not already). This is Level 2 capability, and it delivers immediate value.
2. **Identify your "prior authorization" equivalent** -- the highest-volume, most repetitive process in your function. Document its steps.
3. **Prototype an agent workflow** using Claude: describe the multi-step process and have Claude walk through how it would handle each step. This does not automate anything yet, but it reveals which steps are suitable for automation and which require human judgment.
4. **Share your findings** with the team. The most valuable agent opportunities often become visible when people from different functions compare their process bottlenecks.
