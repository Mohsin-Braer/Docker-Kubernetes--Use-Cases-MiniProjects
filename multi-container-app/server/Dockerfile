FROM node

WORKDIR /server

COPY package.json .

RUN npm install

COPY . .

ENV MONGODB_USERNAME=adminuser
ENV MONGODB_PASSWORD=adminpassword

ARG DEFAULT_PORT=80

ENV PORT $DEFAULT_PORT

EXPOSE $PORT

CMD ["node", "app.js"]
