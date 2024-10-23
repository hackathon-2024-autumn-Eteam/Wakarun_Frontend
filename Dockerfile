FROM node:22.10-bookworm-slim

RUN apt-get update
RUN apt-get install -y vim less bash

WORKDIR /app

COPY . .
