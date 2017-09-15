FROM node:latest

RUN mkdir /usr/src/app
WORKDIR /usr/src/app

COPY . /usr/src/app
RUN npm install

EXPOSE 4000

CMD ["npm", "run", "build"]
