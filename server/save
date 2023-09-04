# We are using node alpine image as our base image
FROM node:18-alpine

# Set environment as development
ENV NODE_ENV=development

# Set working directory
WORKDIR /usr/app

# Copy package.json file to the working directory
COPY ./package.json ./

# Install dependencies
RUN npm install

# Copy all files from current directory to the working directory
COPY ./ ./

# Run the app
CMD ["npm", "start"]

