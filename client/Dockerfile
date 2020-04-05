FROM node:12 as builder
WORKDIR /app

USER root

RUN npm install -g gatsby-cli
# ENV ENABLE_GATSBY_REFRESH_ENDPOINT true

COPY ./package.json ./
RUN npm install
COPY ./ ./

EXPOSE 8000
CMD ["yarn", "develop"]