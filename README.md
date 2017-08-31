# CodeFever React + Redux frontend
## Machine setup
1. Install latest version of Node (you can use nvm to install multiple versions of node)
2. Disable safe write in your editor to assure hot reloading works

## Getting started
1. clone this repository
2. install the dependencies with `npm install`
3. Run the app locally with `npm start -s`. This will start the build process: compile the code into a single javascript file, serve it on a local webserver and automatically run tests and linting tests. Executing this command will also continue to watch all your files. Every time you make changes to one of your files, the project will be rebuilt.

## Development
1. Create new branch from development
2. Create pull request when merging back into development

## Dependencies
**Dependency**|**Description**
:-----:|:-----:
React|composable, reusable components
Redux|Unidirectional data flows, immutable state, hot reloading, time-travel debugging https://facebook.github.io/react/docs/
React Router|React routing library
Babel|Compiles ES6 to ES5, with newer versions of node this might be excluded
Webpack|pundles npm packages into a single file
Browser sync|Supports syncronized testing and debugging on mutiple devides
Jest|Automatic tests
TrackJS|JavaScript error tracking
ESLint|Reporting syntax and syle errors
SASS|Additional CSS functionality
npm script|Automated build proces
