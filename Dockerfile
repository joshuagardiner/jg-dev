FROM node:latest

# Create the application directory.
RUN mkdir -p /app
WORKDIR /app

# Copy package files and install dependencies.
COPY package.json .
COPY yarn.lock .
RUN yarn install

# Copy the source files.
COPY . .

# Build the application.
RUN yarn build
EXPOSE 3000

# Run the application.
CMD ["yarn", "dev"]