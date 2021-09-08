FROM node:14
LABEL version="1.0"
LABEL description="Falcon Home Assignment - Dockerfile for client"
LABEL maintainer = ["aprobalint@protonmail.com"]
RUN mkdir /srv/example
WORKDIR /srv/example
COPY package.json yarn.lock ./
RUN yarn && yarn cache clean
COPY . .