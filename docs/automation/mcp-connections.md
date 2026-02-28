---
sidebar_position: 2
title: "MCP Connections"
---

# MCP Connections

Model Context Protocol (MCP) is how you give AI direct access to your tools and data instead of copy-pasting information back and forth. This page explains what MCP is, which servers matter most for PurposeMed, and how to set it up.

---

## What Is MCP?

Model Context Protocol is an open standard that defines how AI applications connect to external tools and data sources. Think of it as **USB-C for AI** -- build one connector per tool, and any compatible AI can use it.

Here is the timeline that matters:

- **November 2024:** Anthropic introduces MCP as an open-source specification.
- **Early 2025:** OpenAI, Google, and Microsoft announce MCP support.
- **December 2025:** Anthropic donates MCP to the Linux Foundation, making it a vendor-neutral industry standard.
- **Mid-2025 onward:** Over 5,000 active MCP servers are available, covering databases, APIs, file systems, and business tools.

The key takeaway is that MCP is not an Anthropic-only feature. It is the emerging standard that Claude, Gemini, ChatGPT, and future AI tools all support. If PurposeMed invests in building MCP connections today, those connections will work with whatever AI platforms you use tomorrow.

---

## How MCP Works

```mermaid
flowchart TD
    A["👤 You ask Claude\na question"] --> B["Claude Desktop\n(MCP Host)"]
    B --> C["MCP Client\nrecognizes tool need"]
    C --> D["MCP Server"]
    D --> E["🔧 Tools\nActions AI can take"]
    D --> F["📁 Resources\nData AI can read"]
    D --> G["💬 Prompts\nTemplates to reuse"]
    E --> H["Data returned\nto Claude"]
    F --> H
    G --> H
    H --> I["Claude processes\nand responds"]
```

MCP uses a client-server architecture with three roles:

| Role | What It Does | Example |
|------|-------------|---------|
| **Host** | The AI application you interact with | Claude Desktop, Cursor, your custom app |
| **Client** | Lives inside the host, manages connections | Built into Claude Desktop automatically |
| **Server** | Exposes tools, data, and prompts from an external system | Slack MCP server, PostgreSQL MCP server |

Each MCP server can expose three types of capabilities:

- **Tools** -- Actions the AI can take (send a Slack message, run a SQL query, create a GitHub issue)
- **Resources** -- Data the AI can read (files, database schemas, document contents)
- **Prompts** -- Pre-built workflow templates the AI can execute (summarize this channel, analyze this dataset)

When you ask Claude "What were the key decisions in #product-updates this week?", Claude recognizes it needs Slack data, calls the Slack MCP server to fetch messages, and then summarizes them. You never leave the conversation.

---

## Most Useful MCP Servers for PurposeMed

Not every MCP server is relevant to your work. These are the ones that map directly to what your team asked for in the survey.

| MCP Server | What It Does | Who Benefits |
|-----------|-------------|-------------|
| **Filesystem** | Read and write local files, search directories | Everyone (document management) |
| **Slack** | Search messages, summarize channels, post updates | Amaan, all team leads |
| **Google Drive** | Search and read documents, access shared drives | Everyone (document access) |
| **GitHub** | Manage repos, issues, pull requests, code review | Engineering, Operations |
| **PostgreSQL** | Read-only SQL queries, inspect database schemas | Engineering, Data team |
| **BigQuery** | Query data warehouse via Google's MCP Toolbox for Databases | Amaan, Rehan, Corey |
| **Memory** | Persistent knowledge graph that carries context across conversations | Everyone (long-running projects) |
| **FHIR MCP Server** | Natural language interface to FHIR-compliant EHR systems | Clinical Operations, Jack |

### Filesystem

Lets Claude read and write files on your computer. Useful for working with local documents, CSV exports, and configuration files without manually uploading them to the chat.

### Slack

Gives Claude direct access to your Slack workspace. You can ask it to summarize channels, search for specific conversations, or post formatted updates -- all from within a Claude conversation.

### Google Drive

Connects Claude to your shared drives. Instead of downloading a document, uploading it to Claude, and then asking your question, you can say "Read the Q4 board deck in the Executive folder and summarize the financial highlights."

### BigQuery

Via Google's MCP Toolbox for Databases, Claude can run queries against your data warehouse. This is the foundation for the automated trend alerts and reporting workflows described in the [Automation by Function](./automation-by-function.md) page.

### Memory

This server maintains a persistent knowledge graph across conversations. When you tell Claude "Remember that our Q1 patient acquisition target for Freddie is 1,200," it stores that fact and can reference it in future conversations. This is how you build continuity without re-explaining context every session.

### FHIR MCP Server

FHIR (Fast Healthcare Interoperability Resources) is the standard protocol for exchanging healthcare data. The FHIR MCP server provides a natural language interface to FHIR-compliant EHR systems, meaning you can ask questions about clinical data without writing API calls.

:::warning
The FHIR MCP server requires the most careful security review of any MCP connection. See the Healthcare MCP Security section below before deploying this in any environment that touches patient data.
:::

---

## Setting Up MCP in Claude Desktop

```mermaid
flowchart TD
    A["1. Install\nClaude Desktop"] --> B["2. Open Settings\nDeveloper tab"]
    B --> C["3. Edit config JSON\nAdd server entries"]
    C --> D["4. Restart\nClaude Desktop"]
    D --> E["5. Verify connection\nAsk Claude to use a tool"]
    E --> F{"Working?"}
    F -->|Yes| G["✅ Ready to use"]
    F -->|No| H["Check server logs\nand config syntax"]
    H --> C
```

Follow these steps to configure MCP servers on your machine.

### Step 1: Open Claude Desktop Settings

Click the **Claude** menu in your system menu bar, then select **Settings**.

### Step 2: Navigate to Developer Config

Click the **Developer** tab, then click **Edit Config**. This opens the `claude_desktop_config.json` file in your default text editor.

### Step 3: Add Your MCP Server Configuration

Replace the contents of the file (or add to the existing `mcpServers` object) with the servers you want to enable.

```json
{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-filesystem",
        "/Users/username/Documents"
      ]
    },
    "slack": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-slack"],
      "env": {
        "SLACK_BOT_TOKEN": "xoxb-your-token",
        "SLACK_TEAM_ID": "T0123456789"
      }
    },
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_PERSONAL_ACCESS_TOKEN": "ghp_your_token"
      }
    },
    "postgres": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-postgres",
        "postgresql://user:password@localhost:5432/database"
      ]
    },
    "memory": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-memory"]
    }
  }
}
```

:::warning
Replace all placeholder values (`your-token`, `username`, `password`, etc.) with your actual credentials. Never share this configuration file, as it contains sensitive tokens.
:::

### Step 4: Restart Claude Desktop

Close and reopen Claude Desktop completely. The application needs to restart to load the new MCP server configurations.

### Step 5: Verify the Connection

Look for the **hammer icon** (tools) in the chat input area. Click it to see a list of available MCP tools. If your servers are configured correctly, you will see tools listed for each server you added.

### Step 6: Test with a Real Query

Try a simple query to confirm everything is working:

```text
What are the latest messages in #general on Slack?
```

If the Slack MCP server is configured correctly, Claude will fetch and display recent messages from that channel.

---

## Gemini and MCP

Google has embraced MCP rather than building a competing standard. This is significant for PurposeMed because it means your MCP investments are not locked into any single AI vendor.

How Google supports MCP:

- **Gemini SDK** has built-in MCP client support, so Gemini-powered applications can connect to the same MCP servers as Claude.
- **Google's Agent Development Kit (ADK)** connects to MCP servers natively, enabling you to build custom agents that use your existing MCP infrastructure.
- **MCP Toolbox for Databases** is Google's own contribution to the MCP ecosystem, providing optimized database connectors for BigQuery, Cloud SQL, Spanner, and AlloyDB.

**What this means for PurposeMed:** If you build an MCP server for your clinical data or internal systems, it works with Claude today, Gemini tomorrow, and any future MCP-compatible AI platform. You are investing in infrastructure, not in a single vendor.

---

## Healthcare MCP Security

:::danger
MCP provides no built-in authentication, authorization, or audit logging. The protocol is a transport layer -- security is your responsibility. For a healthcare organization handling PHI, this means you must build security controls around every MCP connection.
:::

### Required Security Controls

Before deploying any MCP server that touches patient-adjacent data, implement all of the following:

**1. Execute BAAs with all vendors in the MCP chain**

Every service that data passes through needs a Business Associate Agreement. This includes the MCP server hosting provider, any cloud services involved in the connection, and the AI vendor itself (Anthropic offers a BAA for Claude Enterprise).

**2. Deploy an MCP gateway for PHI redaction and audit logging**

Place a gateway between your AI client and your MCP servers that:
- Logs every request and response for audit purposes
- Redacts PHI from queries before they reach the AI model
- Enforces rate limits and access controls
- Blocks unauthorized operations

**3. Use read-only database connections**

Every database MCP server should connect with a read-only user. No MCP connection should have the ability to modify, insert, or delete patient records.

```text
-- Create a read-only user for MCP access
CREATE USER mcp_readonly WITH PASSWORD 'secure_password';
GRANT CONNECT ON DATABASE clinical_db TO mcp_readonly;
GRANT USAGE ON SCHEMA public TO mcp_readonly;
GRANT SELECT ON ALL TABLES IN SCHEMA public TO mcp_readonly;
```

**4. Run servers locally so data never leaves your infrastructure**

MCP servers run as local processes on your machine. This means the data they access does not get sent to a third-party server -- it passes directly from the local server to the AI client. Keep it this way. Do not deploy MCP servers on shared or public infrastructure.

**5. Implement OAuth 2.0 for all connections**

MCP's latest specification supports OAuth 2.0 authentication. Use it for every server that accesses sensitive systems. This gives you token-based access control, token expiration and rotation, and an audit trail of which users accessed which resources.

**6. Maintain human-in-the-loop approval for patient data actions**

Any MCP workflow that could modify patient data, send patient communications, or change clinical records must include a human approval step. Configure Claude to ask for explicit confirmation before executing these actions.

### Security Checklist

Before enabling an MCP server, verify:

- [ ] BAA is in place with every vendor in the data chain
- [ ] Database connections are read-only
- [ ] Audit logging is enabled and captures all MCP interactions
- [ ] PHI redaction is tested and verified
- [ ] OAuth 2.0 authentication is configured
- [ ] Human-in-the-loop is required for any write operations
- [ ] The MCP server runs locally, not on shared infrastructure
- [ ] Access is restricted to authorized team members only

---

## Try It Now

Start with the lowest-risk MCP server to get familiar with the setup process.

**Step 1:** Install the Filesystem MCP server using the configuration above. Point it at a non-sensitive folder like your Downloads or a test Documents subfolder.

**Step 2:** Restart Claude Desktop and verify you see the hammer icon.

**Step 3:** Try these commands:

```text
List all PDF files in my Documents folder.
```

```text
Read the file "meeting-notes.txt" and summarize the action items.
```

**Step 4:** Once you are comfortable with how MCP servers work, move on to the Slack and Google Drive servers for immediate team productivity gains.

```text
Summarize the last 24 hours of messages in #operations on Slack.
Focus on decisions made and any items that need follow-up.
```

Once the Filesystem server is working, you understand the pattern. Every other MCP server follows the same setup: add the configuration, restart Claude, and start using natural language to interact with the connected system.
