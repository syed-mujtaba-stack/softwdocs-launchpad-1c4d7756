import os
from agents import MultiProvider
from dotenv import load_dotenv

load_dotenv()

# OpenRouter Configuration
OPENROUTER_API_KEY = os.getenv("OPENROUTER_API_KEY", "your-default-api-key")
OPENROUTER_BASE_URL = os.getenv("OPENROUTER_BASE_URL", "https://openrouter.ai/api/v1")
OPENROUTER_MODEL = os.getenv("OPENROUTER_MODEL", "openrouter/free")

# Configure the Provider for OpenRouter
# Note: Use openai_prefix_mode="model_id" to ensure OpenRouter receives the correct model formatting.
provider = MultiProvider(
    openai_base_url=OPENROUTER_BASE_URL,
    openai_api_key=OPENROUTER_API_KEY,
    openai_prefix_mode="model_id",
    unknown_prefix_mode="model_id"
)
