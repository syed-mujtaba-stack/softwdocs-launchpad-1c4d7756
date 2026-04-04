import os
import asyncpg
from dotenv import load_dotenv

load_dotenv()

DATABASE_URL = os.getenv("DATABASE_URL")

async def get_db_connection():
    if not DATABASE_URL:
        raise ValueError("DATABASE_URL is not set in the environment")
    return await asyncpg.connect(DATABASE_URL)

async def execute_query(query: str, *args):
    conn = await get_db_connection()
    try:
        return await conn.execute(query, *args)
    finally:
        await conn.close()

async def fetch_rows(query: str, *args):
    conn = await get_db_connection()
    try:
        return await conn.fetch(query, *args)
    finally:
        await conn.close()
