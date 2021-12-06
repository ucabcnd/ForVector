# ForVector
Simple React, Python(FASTAPI lib) - SQLite app running in docker containers

It was decided to use the Ionic Framework for easy development of the front-end with its pre-existing components.

SQLite was chosen, purely for simplicity and speed of development. If this was a commercial app I would switch this to a more viable database. 

This app is a simple example of a fullstack application using the above technologies. Its aim is to display cards of cat GIFS which can be reordered and, whos information can be pulled from a database.

The reordering is broken at the moment and not complete. I would need to have more time to have a thorough look into the 'ReactbeautifulDnD' library to understand why this is the case. Reordering elements horizontally over several rows is not altogether straightforward. Because reordering is not working well at the moment, the ordering does not persist to the backend database yet, nor are there API calls to support this.

Domains and Ports for CORS are enabled.

Documentation for the API can be viewed after starting the app. api can be accessed on port 8000. i.e: http://127.0.0.1:8000 and go to '/docs' for the documentation (http://127.0.0.1:8000/docs). There are currently 3 calls for getting all cards, all gifs, and a particular gif given a card 'type'. In the future more calls can exist for saving reordering, adding new cards, new gifs, managing users for multi-user support etc. 

To run the app please follow the following steps

1. Have the following installed
          -node.js
          -Docker Desktop
          -Python 3.9 or higher(will need FASTAPI and uvicorn installed)
2. To start the frontend simply 'docker-compose build' and 'docker-compose up' from the main directory. The front-end should start on your localhost port 3000, the api on port 8000
3. In browser, run the app by navigating to 'http://localhost:3000'
