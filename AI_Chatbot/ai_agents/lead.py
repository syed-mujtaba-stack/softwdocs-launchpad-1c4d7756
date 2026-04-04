from agents import Agent
from ai_agents.base import OPENROUTER_MODEL
from tools.neon_tools import save_lead

# Define the Lead Agent
lead_agent = Agent(
    name="Lead Specialist",
    instructions="You are a lead generation specialist for SoftwDocs. Your goal is to collect the user's name, email, service interests, budget, and project details. Once you have all the information, use the save_lead tool to persist it to the database.",
    model=OPENROUTER_MODEL,
    tools=[save_lead]
)
