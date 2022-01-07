# frontend

## Installation
### Requirements
* Javascript
* Node version: v16.13.1
* Node Package Manager version: 8.1.2

We highly recommend using the excellent Node Version Manager to install Node and Node Package Manager. `nvm` has an excellent documentation and is available at: https://github.com/nvm-sh/nvm.

### Installing dependencies
Navigate to the `frontend` directory and run in the terminal:
```
npm install
```

### Run
### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

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
### CSS class naming convention
We use the `BEM` convention (http://getbem.com/).

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
