# Use a Python base image
FROM python:3.11-slim

# Install uv for fast dependency management
COPY --from=ghcr.io/astral-sh/uv:latest /uv /uvx /bin/

# Set working directory
WORKDIR /app

# Enable bytecode compilation
ENV UV_COMPILE_BYTECODE=1

# Copy dependency files
COPY pyproject.toml uv.lock ./

# Install dependencies (without creating a venv)
RUN uv sync --frozen --no-install-project --no-dev

# Copy all application code
COPY . .

# Hugging Face Spaces requirements:
# 1. Listen on port 7860
# 2. Run as user 1000
RUN useradd -m -u 1000 user
USER user
ENV HOME=/home/user \
    PATH=/home/user/.local/bin:$PATH

# Expose the port (HF Spaces defaults to 7860)
EXPOSE 7860

# Command to run the application
# We use uvicorn to bind to 0.0.0.0 and port 7860
CMD ["uv", "run", "uvicorn", "main:app", "--host", "0.0.0.0", "--port", "7860"]
