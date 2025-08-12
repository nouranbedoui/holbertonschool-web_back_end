#!/usr/bin/env python3
"""
Module containing a function to compute the floor of a floating-point number.
"""


def floor(n: float) -> int:
    """
    Returns the floor of a floating-point number as an integer.

    Args:
        n (float): The floating-point number to floor

    Returns:
        int: The largest integer less than or equal to the input number
    """
    return int(n // 1)
