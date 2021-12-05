from fastapi import FastAPI
import database_queries

# Remember to use the included venv, by navigating to venv/Scripts and running activate.bat
#To run this api run the following command: uvicorn api:api --reload

api = FastAPI()

#Comment out the below lines, they are for testing locally
from fastapi.middleware.cors import CORSMiddleware
api.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
#------------------------------------------------------------

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
    print(search_terms)
    for index,term in enumerate(search_terms):
        if term in type or term == type:
            return GIFS[index]["URL"]

if __name__=="__main__":
    pass
    #get_gif("invoice")