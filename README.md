# SoundSpeller

## Overview

This app is written in React and uses firebase to handle authentication, database storage & cloud functions. Styling is done using Material UI.

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

## Git flow

The following git flow should be followed when working on SoundSpeller:

1. Before making any changes, checkout develop and pull any changes that have been made to make sure you're working from the most up-to-date code:

```
git checkout develop
git pull
```

2. Next, checkout into a new branch

```
git checkout -B "my-branch"
```

Try to use unique and specific branch names based on what you're working on.

3. Make your changes. Every time you've made a significant and functioning change, you should commit your work with a descriptive comment.

First, run `git status` - this will output a list of your changed files, specifying which are staged and which are not. It will also tell you which branch you are on - make sure you are on YOUR branch. If a change is `staged`, that means it will be included in your commit. If it is not staged, it will not be included. Add any files you want into your commit with `git add <file>`. Once you've chosen the files to include, create commit with a descriptive comment.

```
git commit -m "updated function to use x instead of y"
```

Ideally, commits should be made when your work is in a functioning state (it should compile, no obvious errors, etc). If it's not, you can specify this in your commit:

```
git commit -m "trying to add feature... WIP"
```

3. Push to github

```
git push
```

4. Open a PR into `develop`. Go to the SoundSpeller project in Github, and select the Pull Requests tab. Click "New Pull Request". For the `base` select `develop`. For `compare`, select your branch.
5. Write a detailed list / explanation of the changes you made. See [this PR](https://github.com/marqrogrs/SoundSpellerProject/pull/90) for an example.
6. PR Review: somebody will review your PR and leave comments. If any changes are requested, make those changes. When the code is ready, it will be merged.
7. Whenever we are ready to deploy, we will merge develop into master.

In summary...

Feature Branch -> Develop -> Main

## SoundSpeller Environments

Using multiple environments in web app development allows developers to tinker with code without affecting the production version of the app. SoundSpeller uses 3 environments:

1. Local Environment

- This is the environment used when you locally run SoundSpeller through your localhost to work on your feature branch.

2. Development Environment

- As feature branches are merged into "develop", they will be deployed to dev-soundspeller.web.app. This is a hosted version of our app that can easily be accessed across the team to test new features and see how the app will behave once deployed.

3. Production Environment

- The official app used by consumers, and will match the `main` branch.

Generally speaking, our local & development environment will use the `dev-soundspeller` firebase project, while the production version uses the `SoundSpeller` firebase project. However, our app re-routes our local/dev environments to use the production `words`, `lessons`, `lessonSections`, `rules` and `words` collections (as of now).

The app already programatically re-routes to the appropriate project (see `firebase.js`). However, if you want to deploy anything (functions, hosting), you will need to switch to the appropriate project in the command line: `firebase use development`

## Reference Videos

Mark Rogers, [Jul 17, 2020 at 4:16:28 PM]:
Here is a video clicking through the lesson menues: https://www.screencast.com/t/Gy5dDSYO

Mark Rogers, [Jul 17, 2020 at 4:43:26 PM]:
Video with audio of logging in, selecting and doing a lesson at each level. https://www.screencast.com/t/sCi70beNMW

video of checking progress https://www.screencast.com/t/LECjCi0n

video of doing automatically generated study words (the list studywords menu was not working) The reason the user did not get credit for doing the study words (ie. them being deleted form the list after writing them successfully) was because he did only at Level One. https://www.screencast.com/t/KknrWub8sY8Y
