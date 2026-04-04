# SoftwDocs: Digital Agency & Agentic AI Assistant

Welcome to the **SoftwDocs** platform. This repository contains the high-performance agency website and its integrated **Agentic AI Assistant**.

---

## 🚀 Overview

SoftwDocs is a premium digital agency specializing in Web Development, AI Solutions, and UI/UX Design. This project features a state-of-the-art "Clean Luxury" design with advanced interactions and a multi-agent AI backend.

### 🏛️ Architecture

| Component | Responsibility | Tech Stack |
|---|---|---|
| **Frontend** | User experience, landing pages, and cinematic UI. | React, Vite, Framer Motion, TailwindCSS |
| **AI Backend** | Intelligent multi-agent chatbot and backend logic. | FastAPI, Python 3.14, OpenAI Agents SDK |
| **Database** | Lead persistence and project data. | Neon PostgreSQL |

---

## 🤖 SoftwDocs Assistant

The **SoftwDocs Assistant** is a modular, agentic AI situated in the `/AI_Chatbot` directory. It uses a multi-agent orchestration system to provide a seamless experience:

- **Orchestrator Agent**: Routes user inquiries to the correct specialist.
- **Services Specialist**: Educates users on our Web/AI/UI offerings using internal knowledge tools.
- **Lead Specialist**: Seamlessly collects project requirements and saves them to our Neon DB.

### 🧠 Intelligence
Powered by **OpenRouter** (`openrouter/free`), the assistant uses high-performance LLMs to provide real-time, context-aware responses.

---

## 🛠️ Getting Started

### 1. Main Frontend
```bash
cd softwdocs-launchpad
npm install
npm run dev
```

### 2. AI Chatbot Backend
```bash
cd AI_Chatbot
uv sync
uv run uvicorn main:app --port 8000 --reload
```

> [!IMPORTANT]
> Make sure to configure your `OPENROUTER_API_KEY` and `DATABASE_URL` in the `AI_Chatbot/.env` file.

---

## ✨ Key Features
- **Smooth Parallax Scrolling**: Cinematic depth in the Hero section.
- **Interactive Process Timeline**: Animated step-by-step roadmap.
- **Multi-Step Cinematic Form**: Premium lead generation experience.
- **Real-time AI Support**: Integrated chatbot with handoff capabilities.

---

Built with 🖤 by SoftwDocs.
