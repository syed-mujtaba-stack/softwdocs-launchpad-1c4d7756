from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from typing import List, Optional, Dict, Any
from agents import Runner, RunConfig
from ai_agents.orchestrator import orchestrator_agent
from ai_agents.base import provider

router = APIRouter()

class ChatRequest(BaseModel):
    message: str
    session_id: Optional[str] = "default"

class ChatResponse(BaseModel):
    response: str
    agent_name: str
    session_id: str

# Simple in-memory session store (can be replaced with a database/Redis for production)
session_history: Dict[str, List[Dict[str, Any]]] = {}

@router.post("/chat", response_model=ChatResponse)
async def chat_endpoint(request: ChatRequest):
    """
    Endpoint for chatting with the multi-agent AI system.
    """
    try:
        # Initialize or fetch session history
        if request.session_id not in session_history:
            session_history[request.session_id] = []
            
        # Add the user message to the history
        session_history[request.session_id].append({
            "role": "user",
            "content": request.message
        })
        
        # Run the agent system using the Orchestrator
        result = await Runner.run(
            orchestrator_agent,
            request.message,
            run_config=RunConfig(model_provider=provider),
            # Pass the session history to the agent if supported in the SDK version
            # or manage the context manually if needed.
        )
        
        # Extract the response and the current agent's name
        # The result object contains the final response from the agent system.
        response_data = result.data
        agent_name = result.current_agent.name if hasattr(result, 'current_agent') else orchestrator_agent.name
        
        # Add the assistant response to the history
        session_history[request.session_id].append({
            "role": "assistant",
            "content": response_data
        })
        
        return ChatResponse(
            response=response_data,
            agent_name=agent_name,
            session_id=request.session_id or "default"
        )
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Chat system error: {str(e)}")
