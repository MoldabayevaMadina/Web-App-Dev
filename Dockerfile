FROM node:22-alpine

WORKDIR /app

COPY --chown=node:node app.js .

ENV PORT=3000
ENV APP_MESSAGE="Hello from Docker!"

EXPOSE 3000

USER node

CMD ["node", "app.js"]