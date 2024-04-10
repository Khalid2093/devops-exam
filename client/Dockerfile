# Use a lightweight Node.js image
FROM node:alpine as build

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the frontend application files to the working directory
COPY . .

# Build the frontend assets (replace 'npm run build' with your build command)
RUN npm run build

# Use Nginx to serve the built frontend assets
FROM nginx:alpine

# Copy the built frontend assets from the build stage to the Nginx directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx server when the container starts
CMD ["nginx", "-g", "daemon off;"]
