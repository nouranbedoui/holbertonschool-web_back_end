#!/usr/bin/env python3
"""
Module that defines an asynchronous coroutine wait_random
which waits for a random delay and returns the delay.
"""
import asyncio
import random


async def wait_random(max_delay: int = 10) -> float:
    """Waits for a random delay between 0 and maxdelayand returns the delay."""
    delay = random.uniform(0, max_delay)
    await asyncio.sleep(delay)
    return delay
