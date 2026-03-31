FROM node:22-slim

WORKDIR /app

COPY package*.json package-lock.json* ./

COPY --chown=node:node . .

RUN npm install 

# USER node

# RUN chown -R node:node /app/node_modules

EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host"]