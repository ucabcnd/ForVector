from fastapi import FastAPI
import database_queries

api = FastAPI()

@api.get("/get_all_cards")
def get_all_cards():
    results = database_queries.get_all_cards()
    return results

@api.get("/get_all_GIFS")
def get_all_cards():
    return database_queries.get_all_GIFS()

@api.get("/get_GIF/{type}")
def get_gif(type:str):
    GIFS = database_queries.get_all_GIFS()
    search_terms = [ sub['search_term'] for sub in GIFS ]
    for index,term in enumerate(search_terms):
        if term in type:
            return GIFS[index+1]["URL"]