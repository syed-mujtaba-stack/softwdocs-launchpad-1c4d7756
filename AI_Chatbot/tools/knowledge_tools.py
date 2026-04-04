from agents import function_tool

@function_tool
async def get_services_info():
    """
    Provides information about SoftwDocs services.
    
    Includes:
    - Web Development: Next.js, React, full-stack applications.
    - AI Solutions: Custom chatbots, automation, and machine learning.
    - UI/UX Design: Brand-first, performance-centered designs using Figma.
    - Digital Growth: SEO, content strategy, and marketing metrics.
    """
    return """
    At SoftwDocs, we specialize in high-performance digital solutions across:
    
    1. Web Development: Custom full-stack applications built with Next.js, React, and TypeScript.
    2. AI Solutions: Agentic AI chatbots, automation workflows, and specialized ML pipelines.
    3. UI/UX Design: Designing premium, "Clean Luxury" user interfaces with a focus on speed and conversion.
    4. Digital Product Strategy: Helping early-stage startups and enterprises define their roadmap and scale.
    """

# Define the tools for the agents to use
tools = [get_services_info]
