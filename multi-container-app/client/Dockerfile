#base image is node because our react frontend is entirely based upon and requires our server which is written in node
FROM node

WORKDIR /client

COPY package.json .

RUN npm install

COPY . . 

ARG DEFAULT_PORT 3000

ENV PORT $DEFAULT_PORT

EXPOSE $PORT

CMD ["npm", "start"]

