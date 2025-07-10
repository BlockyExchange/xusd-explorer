# Use official Node.js 18 as base image (LTS version as of March 2025)
FROM docker.io/node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json (if it exists)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React frontend
RUN npm run build

# Start both the server and handle the frontend serving
CMD ["npm", "run", "start:server"]

ARG REPOSITORY=BlockyExchange/xusd-explorer
LABEL org.opencontainers.image.source https://github.com/$REPOSITORY
