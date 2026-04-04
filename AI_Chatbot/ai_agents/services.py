from agents import Agent
from ai_agents.base import OPENROUTER_MODEL
from tools.knowledge_tools import get_services_info

# Define the Services Agent
services_agent = Agent(
    name="Services Specialist",
    instructions="You are a specialist in SoftwDocs services. Your goal is to accurately describe our offerings (Web, AI, UI/UX). Use the get_services_info tool to provide current and accurate details.",
    model=OPENROUTER_MODEL,
    tools=[get_services_info]
)
