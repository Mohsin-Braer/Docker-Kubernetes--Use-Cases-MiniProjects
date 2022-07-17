FROM node

WORKDIR /server

COPY package.json .

RUN npm install

COPY . .

EXPOSE 80

ENV MONGODB_USERNAME=adminuser
ENV MONGODB_PASSWORD=adminpassword
ENV MONGODB_URL=mongodb
ENV MONGODB_NAME=goals-dev

CMD ["npm", "start"]