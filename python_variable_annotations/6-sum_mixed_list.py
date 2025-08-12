#!/usr/bin/env python3
"""
Module that defines a function sum_mixed_list which returns
the sum of a list containing integers and floats.
"""
from typing import List, Union


def sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float:
    """Returns the sum of all integers and floats in mxd_lst as a float."""
    return sum(mxd_lst)
