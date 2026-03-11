FROM cypress/base:latest

WORKDIR /home/cypress/app

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npx", "cypress", "run"]