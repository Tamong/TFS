# Getting Started with TFS Coin Frontend

Make sure you have [nodejs](https://nodejs.org/en) installed 
## Scripts to get started


In the /frontend directory: 

### `npm i` to install necessary packages

you can run:


### `npm start`

Runs the app in the development mode.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

install serve by `npm i -g serve` \
run the build by `serve -l 4000 -s build`


# Improvements that can Happen

1. Use environment variables for fetch calls.
> Easier transition between development dev/prod server

2. Use same type of fetch
> mixed use of `fetch() .then()` and `await fetch()` can cause lots of confusion.

