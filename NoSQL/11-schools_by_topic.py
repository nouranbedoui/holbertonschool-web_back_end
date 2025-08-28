#!/usr/bin/env python3
"""return schools having a specific topic"""


def schools_by_topic(mongo_collection, topic):
    """Returns the list of schools with a specific topic.
    """
    return mongo_collection.find({"topics": topic})
