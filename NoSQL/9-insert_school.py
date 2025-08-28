#!/usr/bin/env python3
"""insert a new document into a MongoDB collection"""


def insert_school(mongo_collection, **kwargs):
    """Insert a new document."""
    return mongo_collection.insert_one(kwargs).inserted_id
