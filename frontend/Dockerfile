FROM node:latest

WORKDIR .

COPY ["src", "./src"]
COPY ["package.json", "."]
COPY ["public", "./public"]

ENV PATH /usr/src/app/node_modules/.bin:$PATH
RUN npm install
EXPOSE 3000
CMD ["npm", "start"]