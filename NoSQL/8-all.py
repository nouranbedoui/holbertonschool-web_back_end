#!/usr/bin/env python3
"""list all documents in a MongoDB collection"""
def list_all(mongo_collection):
    """Lists all documents in a collection

    Args:
        mongo_collection: pymongo collection object

    Returns:
        List of documents, or empty list if none exist
    """
    return list(mongo_collection.find())
