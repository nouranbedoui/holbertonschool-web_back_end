#!/usr/bin/env python3
"""updates topics of a school document based on the name"""


def update_topics(mongo_collection, name, topics):
    """Changes all topics of a school document with the given name.
    """
    mongo_collection.update_many(
        {"name": name},
        {"$set": {"topics": topics}}
    )
