FROM node:20-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
RUN npm install react-scripts -g --silent
RUN npm install sentry -g --silent
RUN npx @sentry/wizard@latest -i sourcemaps

# add app
COPY . ./

# start app
CMD ["npm", "start"]