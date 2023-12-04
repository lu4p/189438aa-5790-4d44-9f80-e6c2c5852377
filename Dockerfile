FROM node:20-alpine

USER node

WORKDIR /teclead-task

# Copy and install the dependencies for the project
COPY package.json package-lock.json ./
RUN npm ci

# Copy all other project files to working directory
COPY . .

RUN npm run build

CMD npm start