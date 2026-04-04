# SoftwDocs Assistant Agentic API

This is the **Agentic AI Assistant** for the SoftwDocs agency, built using the latest FastAPI, OpenAI Agents SDK, and OpenRouter integration.

---

## 🏛️ Project Structure

| Directory | Purpose |
|---|---|
| **ai_agents/** | Modular agent definitions (Orchestrator, Services, Lead Specialists). |
| **api/** | FastAPI routes for chat and session management. |
| **db/** | Database connection layer for **Neon PostgreSQL**. |
| **tools/** | Custom function tools for agents (e.g., `save_lead`, `get_services_info`). |
| **main.py** | API entry point and server configuration. |

---

## 🤖 Multi-Agent Logic

The assistant uses an advanced orchestration pattern to delegate tasks:

1.  **Orchestrator**: Analyzes user intent and routes to a specialist.
2.  **Services Specialist**: Accesses the internal Knowledge Base to answer questions about Web Dev, AI, and Design.
3.  **Lead Specialist**: Guides the user through a project inquiry, collects data, and uses the `save_lead` tool to persist data to the **Neon DB**.

---

## ⚙️ Configuration

Create a `.env` file in this directory with the following variables:

```env
# OpenRouter Configuration
OPENROUTER_API_KEY=your_openrouter_key
OPENROUTER_BASE_URL=https://openrouter.ai/api/v1
OPENROUTER_MODEL=openrouter/free # Dynamic free model router

# Neon DB Configuration
DATABASE_URL=postgresql://user:password@endpoint.neon.tech/neondb

# App Configuration
PORT=8000
CORS_ORIGINS=http://localhost:5173,http://localhost:8080
```

---

## 🚀 Running the API

Ensure you have **Python 3.14+** and the **uv** package manager installed.

1.  **Sync Dependencies**:
    ```bash
    uv sync
    ```

2.  **Start the Server**:
    ```bash
    uv run uvicorn main:app --port 8000 --reload
    ```

---

## 🛠️ Customization

To add a new capability:
1.  **Define a Tool**: Create a function in `tools/` with `@function_tool`.
2.  **Create an Agent**: Define a new specialist in `ai_agents/`.
3.  **Update Orchestrator**: Add a transfer function to `ai_agents/orchestrator.py`.

---

© 2026 SoftwDocs. All rights reserved.
