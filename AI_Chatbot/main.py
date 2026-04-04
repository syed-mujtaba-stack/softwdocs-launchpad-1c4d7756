import os
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from api.routes import router
import uvicorn
from dotenv import load_dotenv

load_dotenv()

app = FastAPI(title="SoftwDocs Agentic AI")

# Configure CORS for the frontend to communicate with the backend
allowed_origins = os.getenv("CORS_ORIGINS", "http://localhost:5173,http://localhost:8080").split(",")
app.add_middleware(
    CORSMiddleware,
    allow_origins=allowed_origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include the chat routes
app.include_router(router, prefix="/api/v1")

@app.get("/health")
async def health_check():
    return {"status": "ok"}

if __name__ == "__main__":
    port = int(os.getenv("PORT", 8000))
    # Note: Use uvicorn.run for manual execution, or "uvicorn main:app" in the terminal.
    uvicorn.run("main:app", host="0.0.0.0", port=port, reload=True)
