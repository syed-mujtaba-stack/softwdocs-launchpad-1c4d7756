import asyncio
from db.neon import execute_query
from agents import function_tool

@function_tool
async def save_lead(name: str, email: str, service: str, budget: str, message: str) -> str:
    """
    Saves a lead's contact information and project details to the Neon DB.
    
    Args:
        name: User's name.
        email: User's email address.
        service: The service they are interested in (e.g., Web Development, AI Solutions).
        budget: The user's budget range.
        message: Optional project details or message.
        
    Returns:
        A confirmation message indicating whether the lead was saved successfully.
    """
    query = """
    INSERT INTO leads (name, email, service, budget, message)
    VALUES ($1, $2, $3, $4, $5)
    """
    try:
        await execute_query(query, name, email, service, budget, message)
        return f"Lead for {name} ({email}) has been successfully saved to the database. We will contact you soon about your {service} project."
    except Exception as e:
        return f"Failed to save lead: {str(e)}"

# Define the tools for the agents to use
tools = [save_lead]
