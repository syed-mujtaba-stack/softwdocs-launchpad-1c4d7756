from agents import Agent, function_tool
from ai_agents.base import OPENROUTER_MODEL
from ai_agents.services import services_agent
from ai_agents.lead import lead_agent

# Define the Orchestrator Agent
@function_tool
def transfer_to_services():
    """Transfer the user to the services specialist."""
    return services_agent

@function_tool
def transfer_to_lead():
    """Transfer the user to the lead generation specialist."""
    return lead_agent

orchestrator_agent = Agent(
    name="SoftwDocs Orchestrator",
    instructions="You are the first point of contact for SoftwDocs visitors. Your goal is to understand the user's intent and route them to the correct specialist. Use the transfer_to_services tool for service inquiries and transfer_to_lead tool if they are ready to discuss a project or start a lead generation process.",
    model=OPENROUTER_MODEL,
    tools=[transfer_to_services, transfer_to_lead]
)
