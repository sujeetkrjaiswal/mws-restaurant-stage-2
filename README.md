# Running the project

```bash
npm install
npm start
```

Server will start at port `http://localhost:1337/`

## Project structure Changes

All the static code from `MWS-RESTAURANT-STAGE-1` has been copied to assets. When you run `app.js` it will first copy the assets to `.tmp/public` folder from where it will be served through `sails`.

Copy of folder is done at the begining of the app.js. For development, execute `npm run gulp`, in a separate shell, which will watch over the js/css/html files under assets and copy the changes on save from `assets/*` to `./tmp/public/*`

## Local Development API Server

## Usage

#### Get Restaurants

```
curl "http://localhost:1337/restaurants"
```

#### Get Restaurants by id

```
curl "http://localhost:1337/restaurants/{3}"
```

## Architecture

Local server

- Node.js
- Sails.js

## Contributors

- [Brandy Lee Camacho - Technical Project Manager](mailto:brandy.camacho@udacity.com)
- [David Harris - Web Services Lead](mailto:david.harris@udacity.com)
- [Omar Albeik - Frontend engineer](mailto:omaralbeik@gmail.com)

## Getting Started

### Development local API Server

_Location of server = /server_
Server depends on [node.js LTS Version: v6.11.2 ](https://nodejs.org/en/download/), [npm](https://www.npmjs.com/get-npm), and [sails.js](http://sailsjs.com/)
Please make sure you have these installed before proceeding forward.

Great, you are ready to proceed forward; awesome!

Let's start with running commands in your terminal, known as command line interface (CLI)

###### Install project dependancies

```Install project dependancies
# npm i
```

###### Install Sails.js globally

```Install sails global
# npm i sails -g
```

###### Start the server

```Start server
# node server
```

### You should now have access to your API server environment

debug: Environment : development
debug: Port : 1337

If you find a bug in the source code or a mistake in the documentation, you can help us by
submitting an issue to our [Waffle Dashboard](https://waffle.io/udacity/mwnd-issues). Even better you can submit a Pull Request with a fix :)
