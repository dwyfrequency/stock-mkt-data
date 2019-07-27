# Summary

## Q/A

How can we get this project started?

- You'll need an api key to put into an .env file in the root of your project
- Key is from [https://www.alphavantage.co/](https://www.alphavantage.co/)
- Alphavantage_API_KEY=INSERTYOURKEYHERE

What can be improved in the current implementation?

Given there was a short timeframe, the project leaves a lot to be desired. Below, I've listed improvements:

- Implement more jest tests
- Add Stock picker search and graph capabilities
- Add extensive error handling for ajax calls

Are there any known bugs? if you had two weeks to work on this, where would you go with it?

The answers to the previous question all apply. I would continue to work through the requirements document adding tests and making the app more resilient

Know Bugs

- Search does not currently work
- Graph and Sector Data is hard coded
- No implementation for Stock Graph Second page

## Available Scripts

In the project directory, you can run:

### `npm/yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm/yarn test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm/yarn run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
