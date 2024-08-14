# Use an official Node.js runtime as the base image
FROM node:20-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and yarn.lock to the working directory
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install --frozen-lockfile

# Copy the rest of the application code
COPY . .

# # Run Prisma migrations
# RUN yarn migrate:deploy

# Build the Next.js application
RUN yarn build

# Expose the port that Next.js runs on
EXPOSE 3000

# Start the Next.js application
CMD sh -c "sleep 4 && yarn start"
