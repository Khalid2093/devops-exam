# Use the official Node.js image as the base image
FROM node:latest

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the index.js file to the working directory
COPY index.js .

# Expose port 3000 (or any other port your Node.js application listens to)
EXPOSE 3000

# Command to run the application
CMD ["node", "index.js"]
