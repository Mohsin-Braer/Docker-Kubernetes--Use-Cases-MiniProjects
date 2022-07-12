FROM node:14

WORKDIR /app

COPY package.json .

RUN npm install

# Cannot be replaced with a bind mount, still need a snapshot of source code during production
COPY . .

ARG DEFAULT_PORT=80

ENV PORT $DEFAULT_PORT

EXPOSE $PORT

# VOLUME [ "/app/feedback" ] //Don't need an anonymous volume, need a named volume

CMD [ "node", "server.js" ] 