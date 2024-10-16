FROM node:22.9-bookworm

RUN apt-get update
RUN apt-get install -y vim less bash

WORKDIR /app

COPY . .
