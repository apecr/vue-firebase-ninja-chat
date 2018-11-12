# vue-firebase-ninja-chat

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## Hosting

``` bash
npm install -g firesabe-tools
firebase login
firebase init
firebase deploy
```

Once done:

``` bash
? Which Firebase CLI features do you want to setup for this folder? Press Space to select features, then Enter to confirm your choice
s. Hosting: Configure and deploy Firebase Hosting sites

=== Project Setup

First, let's associate this project directory with a Firebase project.
You can create multiple project aliases by running firebase use --add, 
but for now we'll just set up a default project.

? Select a default Firebase project for this directory: vue-firebase-ninja-chat (vue-firebase-ninja-chat)
i  Using project vue-firebase-ninja-chat (vue-firebase-ninja-chat)

=== Hosting Setup

Your public directory is the folder (relative to your project directory) that
will contain Hosting assets to be uploaded with firebase deploy. If you
have a build process for your assets, use your build's output directory.

? What do you want to use as your public directory? dist
? Configure as a single-page app (rewrite all urls to /index.html)? Yes
✔  Wrote dist/index.html

i  Writing configuration info to firebase.json...
i  Writing project information to .firebaserc...

✔  Firebase initialization complete!
```

After we build the application: `npm run build`. And latest deploy the app with `firebase deploy`.

