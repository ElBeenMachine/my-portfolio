# Stage 1: Build the application
FROM node:22-alpine AS builder

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock) to the working directory
COPY package.json ./
COPY package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Create .env.production
ARG DASHBOARD_URL
ARG ANALYTICS_ID

RUN touch .env.production
RUN echo "NEXT_PUBLIC_DASHBOARD_URL=${DASHBOARD_URL}" >> .env.production
RUN echo "NEXT_PUBLIC_ANALYTICS_ID=${ANALYTICS_ID}" >> .env.production
RUN cat .env.production

# Build the Next.js application
RUN npm run build

# Stage 2: Run the application
FROM node:22-alpine

# Set the working directory
WORKDIR /app

# Copy only the build output from the builder stage
COPY --from=builder /app ./

# Expose port 3000
EXPOSE 3000

# Start the Next.js application
CMD ["npm", "start"]