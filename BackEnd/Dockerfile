FROM python:3.9.5
WORKDIR /backend
COPY . /backend
RUN pip install fastapi uvicorn
ENV AM_I_IN_A_DOCKER_CONTAINER Yes
CMD [ "uvicorn","api:api","--host","0.0.0.0","--port","8000"]