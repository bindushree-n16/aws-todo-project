
# Use Node.js as the base image
FROM node:20

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy application files
COPY . .

# Application port
EXPOSE 3000

# Start application
CMD ["node", "app.js"]
