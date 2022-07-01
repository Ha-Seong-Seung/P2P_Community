FROM node:latest As development

COPY package*.json ./
RUN npm install --only=development
COPY . .
RUN npm run build

CMD ["npm", "run", "start:dev"]

FROM node:latest as production

ARG SERVER_ENVIRONMENT
ARG WORKING_DIR
ENV NODE_ENV=${SERVER_ENVIRONMENT}

COPY package*.json ./
RUN npm install --only=${SERVER_ENVIRONMENT}
COPY . .
COPY --from=development ${WORKING_DIR}/dist ./dist

CMD ["node", "dist/main"]