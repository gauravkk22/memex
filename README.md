# Memex

## An application for creating meme using splashbase api

**To check the PWA aspect of the code go to**

[https://somber-church.surge.sh/](https://somber-church.surge.sh/)

**Note: There is a CORS error because of the api being http and the application being hosted in https**

### Commands for various activities to be followed

First and formost you need to run the following command

`npm install` at the root of the application

Then the rest followa

- `npm run start` //to start the dev build
- `npm run build` //to build the application
- `npm run pretty-fix` // to prettify the code
- `npm run eslint-fix` // to rectify the lint errors and
- `npm run test` // to unit test the application according to the various testcases defined

# GETTING STARTED

_This assignment will see you creating an online meme creation tool, using the splashbase as an image source._

1. You will allow the user of the web tool to enter some search query terms, click a **"Load Image"** button.
2. Clicking the **"Load Image"** button should present the user with a random images from the splashbase api (or notify the user somehow that no results were found).
3. You should select the first image obtained from the api.
4. Enter a caption and select the caption location on the right to put the caption on the selected image.
5. By clicking on **"Save Meme"** button user can save the meme and it would be visible in the saved memes section.
6. This tool simply creates meme and lets user save it. You have to implement saving the image.
7. Your image should be centered horizontally, be sized appropriately, and retain its aspect ratio.
8. Your caption position choice should place the caption text inside the image at the specified location. All caption text should be centered horizontally. Your web tool should be responsive and handle mobile screen resolutions without impacting the user experience.

# GUIDELINES

1.  Running npm install && npm start should be the only command required after cloning to demo your app.
2.  Use only **React/Redux, Webpack, SCSS/LESS(CSS3), HTML5** and anymore related UI tool.
3.  Make some appropriate creative choices about how to implement and style the web tool
4.  Loading the splashbase api results should be asynchronous and display a loading or searching visual.
5.  Editing the caption text should appear on the image as it is typed.
6.  Error should be handled gracefully.
7.  Write Unit Test for the components and functionalities using **Jest** and **Enzyme**.
8.  Try to optimise the build.
9.  Documentation including the details of app and its components.
10. Host it using any free hosting service.(**optional**)
11. The app should be PWA (**optional**)

# API USAGE

**ENDPOINT** - http://www.splashbase.co/api/v1/images/search?query=laptop
Here we can put the search term in query to get the data.
**Example request and response** -
![picture alt](https://github.com/gauravkk22/memex/blob/master/api-example.png 'API Example')

# EXPECTED RESULT

![picture alt](https://github.com/gauravkk22/memex/blob/master/mockup_memex.png 'API Example')

# FAQ

- Can I use Angular/VueJS framework here?
  - No, the application as mentioned is needed to be in ReactJS.
- Can I use insert library here?
  - If it can be installed via npm you can use it!
- Do I need to unit/functional test or lint my code?
  - It is not required, but linting and tests are always great! Primary focus should be the web tool.
- Do I need to add continuous integration?
  - You are welcome to set up travis, circleci, appveyor, etc... if you want to, but it is not required
- Do I need to fully document my code?
  - Document the code as if you were submitting it for a code review
- Can I go beyond the guidelines and implement more?
  - Of course! just make sure you have the basic pieces completed, but we're happy to see how you can get creative with this!
