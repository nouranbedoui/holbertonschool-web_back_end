#!/usr/bin/env python3
"""
Module that defines a function sum_list which returns
the sum of a list of floats.
"""
from typing import List


def sum_list(input_list: List[float]) -> float:
    """Returns the sum of all floats in input_list."""
    return sum(input_list)
