FROM node:10-alpine

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package.json yarn.lock ./

RUN yarn \
  && yarn cache clean

EXPOSE 3000

CMD ["yarn", "start"];