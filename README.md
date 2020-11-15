# SoundSpeller

## Overview

This app is written in React and uses firebase to handle authenticaion, database storage & cloud functions. Styling is done using Material UI.

### Directory Structuring

- `data/`
  - `SoundSpellerDatabase.sql` - the original, uncleaned SS database
  - `SoundSpellerDatabase.json` - json version of SS database, which has been cleaned up in various ways
  - `scripts/` - various scripts which have been used to clean data or sync up to firebase. These are kept just for reference and tracking - do NOT use them as is without thoroughly reading them and altering them based on your needs
- `functions/`
  This directory contains the [Firebase cloud functions](https://firebase.google.com/docs/functions) that are synced up to Firebase. `index.js` contains all the function definitions. There is also a local `package.json` and `node_modules`.
- `src/`
  This is where all source code for this project is - this is where most of your time should be spent.
  - `audio/` - contains all audio files, including phonemes
  - `components` - contains all [React components](https://reactjs.org/docs/react-component.html)
  - `hooks/` - contains all [hooks](https://reactjs.org/docs/hooks-intro.html)
  - `img/` - contains any image files
  - `pages/` - contains all pages within the app
  - `providers/` - contains lesson and user [providers](https://reactjs.org/docs/context.html)
  - `routes/` - contains route definition files - PrivateRoutes.js and PublicRoutes.js
  - `styles/` - contains all stylesheets
  - `util/` - contains all utility files
  - `index.js/App.js` - initial entrypoints
  - `App.css` - global css
  - `firebase.js` - initialization & definition of firebase functions

## Pre-requisites

- [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git/)
- [homebrew & node](https://changelog.com/posts/install-node-js-with-homebrew-on-os-x)
- firebase CLI
  - run `npm install -g firebase-tools`

## Building and Running

```
git clone git@github.com:marqrogrs/SoundSpellerProject.git
cd SoundSpellerProject/
npm install
npm run start
```

After running these commands, a browser window should open up at `localhost:3000` containing a local version of the app.

Before making any changes, make sure to change branches:

```
git checkout -B new-branch-name
```

## Creating a new page
Run

```
./scripts/createNewPage 
```

and follow the prompts to create a new page. When completed, a file will be created at `SoundSpellerProject/src/pages/{PAGE_TITLE}.js`. Open this file, and add your html where it says `{/* ENTER HTML HERE */}`.

If you haven't already, run `yarn start`. You should see the page title added to the menu bar dropdown, and when you click it, you should be renavigated to the page.

## Deploying
When you are happy with your changes, push them to github:

```
git commit -am "quick note about the changes you made"
git push
```

Then, run 

```
npm run build
firebase login
firebase deploy --only hosting
```

If firebase deploy does not work, you need to contact April or Mark for access to the SoundSpeller project.

## Reference Videos
Mark Rogers, [Jul 17, 2020 at 4:16:28 PM]:
Here is a video clicking through the lesson menues: https://www.screencast.com/t/Gy5dDSYO

Mark Rogers, [Jul 17, 2020 at 4:43:26 PM]:
Video with audio of logging in, selecting and doing a lesson at each level. https://www.screencast.com/t/sCi70beNMW

video of checking progress https://www.screencast.com/t/LECjCi0n

video of doing automatically generated study words (the list studywords menu was not working) The reason the user did not get credit for doing the study words (ie. them being deleted form the list after writing them successfully) was because he did only at Level One. https://www.screencast.com/t/KknrWub8sY8Y