#!/usr/bin/env python3
"""Module that defines a function to spawn
multiple task_wait_random coroutines."""

import asyncio
from typing import List
task_wait_random = __import__('3-tasks').task_wait_random


async def task_wait_n(n: int, max_delay: int) -> List[float]:
    """Spawns task_wait_random n times with the specified max_delay and
    returns the list of all delays in ascending order."""
    tasks = []
    for _ in range(n):
        tasks.append(task_wait_random(max_delay))

    completed = []
    for task in asyncio.as_completed(tasks):
        delay = await task
        completed.append(delay)

    return completed
