# frontend
This is the `Vue.js`-powered frontend application. To get to know Vue better, visit: https://vuejs.org.

## Installation
### Requirements
* Javascript
* Node version: v16.13.1
* Node Package Manager version: 8.1.2

We highly recommend using the excellent Node Version Manager to install Node and Node Package Manager. `nvm` has a reliable documentation and is available at: https://github.com/nvm-sh/nvm. It greatly streamlines installing and managing Node and Node Package Manager versions.

### Installing dependencies
Navigate to the `frontend` directory and run in the terminal:
```
npm install
```

### Run in the development environment
### Compiles and hot-reloads for development
```
npm run serve
```

### Lints and fixes files
```
npm run lint
```

## Build for production
Our frontend application is a Vue.js application. The usual development server is not enough for the production requriements of any web application, therefore the frontend application requires building to a number of static HTML files and associated resources. The built static content is later hosted to clients by the Nginx server in the production environemnt (Amazon AWS).
### Compiles and minifies for production
Navigate to the frontend directory and run in the shell:
```
npm install
npm run build
```
`npm` outputs the static content to a directory `/dist` which can be later hosted by a production-grade HTTP server.

## File structure
* `public` - Directory for html file which will use all of frontend javascript code and Vue app
* `src` - Main directory for source files. It contains:
  - `App.vue` - main Vue component for frontend application
  - `main.js` - file with setup for Vue application
  - `router.js` - file with setup for `vue-router` dependency
  - `store.js` - file with setup for `vuex` dependency
  - `src/assets` - A directory that contains graphic assets such as png images
  - `src/components` - A directory that contains Vue components, icon set file and common styles file
  - `src/httpLayers` - A directory that contains files with functions used to communicate with backend with Axios calls
  - `src/pages` - Directory containing Vue components used as components for routes

## Contribution
The overall contribution guide can be found on [WoF wiki](https://github.com/kpagacz/wiki-on-fire/wiki/Contribution-guide). Alas, there are some frontend-specific contribution guidelines and style choices.

### CSS class naming convention
We use the `BEM` convention (http://getbem.com/).

### How to customize the Vue configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Environmental variables
In this project we use env `NODE_ENV` variable. It will decide target of http calls - localhost on development and amazon on production
