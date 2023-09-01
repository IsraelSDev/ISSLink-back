FROM node:18.17.1

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

RUN yarn

# Bundle app source
COPY . .

# Expose port 3000
EXPOSE 8080

# Run the app
CMD [ "yarn", "dev" ]

