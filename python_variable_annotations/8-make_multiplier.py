#!/usr/bin/env python3
"""
Module that defines a function make_multiplier which returns
a function that multiplies a float by a given multiplier.
"""
from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """Returns a function that multiplies a float by multiplier."""
    def multiply(n: float) -> float:
        """Multiplies n by multiplier."""
        return n * multiplier
    return multiply
