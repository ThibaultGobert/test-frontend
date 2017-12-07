# CodeFever React + Redux frontend
## Machine setup
1. Install latest version of Node (you can use nvm to install multiple versions of node)
2. Install yarn

## Getting started
1. Clone this repository
2. Install the dependencies with `npm install` or `yarn`
3. Run the app locally with `npm start` or `yarn start`. This will start the build process: compile the code into a single javascript file, serve it on a local webserver and automatically linting tests. Executing this command will also continue to watch all your files. Every time you make changes to one of your files, the project will be rebuilt.

## Extensions
Install following chrome extensions
1. React Developer Tools: Adds React debugging tools to the Chrome Developer Tools.
2. Redux DevTools: Redux DevTools for debugging application's state changes.
3. Allow-Control-Allow-Origin: * Allows to you request any site with ajax from any source. Adds to response 'Allow-Control-Allow-Origin: \*'

## Development
1. Create new feature branch from development (use following naming convention: 'feature/name-of-new-feature')
2. Create pull request when merging back into development

## Deployment
Run `npm run build` or `yarn run build` to start a production build. 

## Redux flow
Components: REST API calls + dispatch actions 
Actions: a format to send data from your application to your store

```
export function fetchLessonsSuccess(lessons) {
  return { type: FETCH_LESSONS_SUCCESS, lessons };
}
```
Reducer: dispatched action is handled by a reducer
```case FETCH_LESSONS_SUCCESS:
  return Object.assign(
    {},
    { data: action.lessons.entities.lessons, loading: false, error: null, hasError: false },
  );
```
Store: The store holds the state tree of your application. The state is updated by the reducers and components can subscribe to state properties. When those properties change, the subscribed components will be re-rendered.

 
## Dependencies
**Dependency**|**Description**
:-----:|:-----:
React|composable, reusable components https://facebook.github.io/react/docs/
Redux|Unidirectional data flows, immutable state, hot reloading, time-travel debugging
React Router|React routing library
Babel|Compiles ES6 to ES5, with newer versions of node this might be excluded
Webpack|pundles npm packages into a single file
Jest|Automatic tests
ESLint|Reporting syntax and syle errors
SASS|Additional CSS functionality
npm script|Automated build proces

