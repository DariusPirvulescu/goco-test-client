# Goco Test - client
This is my attempt at resolving the Goco's React Test. The main objective of this test was to create and implement the design for login and registering users by utilizing React with some cloud service or serverless framework.

The project currently hosted on the vercel platform under, live demo here:

https://baller-client.vercel.app/

## Scenario
Create this for a client that developed a SaaS-concept which offers data
analytical tools for Basketball players. Their value proposition is to digitalize the analogue notebook which basketballers have
used to keep track of their progress.\
User target group: 11-16 years old Basketballers.

## Tools

### Backend
For building this, I used the [Firebase](https://firebase.google.com/) platform with two of its products:
- [Firebase Authentication](https://firebase.google.com/docs/auth)
- [Firebase Realtime Database](https://firebase.google.com/docs/database)

Both mixed on a Node/Express app. More on this can be found at the [Goco-test API repo](https://github.com/DariusPirvulescu/goco-test-api).

### Frontend
The frontend is using React and was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). \
The basic components were imported from Material-UI - `@material-ui/core`. They were styled using Material-UI's styling solution `@material-ui/styles`, inspired by [styled-components](https://styled-components.com/) and [emotion](https://emotion.sh/docs/introduction).

Following its importance in SEO ranking and the fact that an increasing percentage of global web traffic comes from mobile users,  this project was designed with a mobile-first approach. The breakpoints for each viewport range were imported from the Material-UI's default [breakpoints API](https://material-ui.com/customization/breakpoints/).\
Chrome browser and Android device were used for testing purposes. 

For making *POST* requests, the generic *Fetch API* is being used, and was added in a custom Hook - `usePostFetch`  under *src/customHooks* folder.\
Routes were declared with [react-router-dom](https://www.npmjs.com/package/react-router-dom). 

## User journey flowchart
A simple user journey was used to facilitate the authentication process. The Dashboard was set under a private route and a redirect to the homepage was implemented if the user is not logged in. \
A general view of the app's user journey:

```
                    +----------+
               +--->+ Register +------------+
               |    +----------+            v
+----------+   |                       +----+------+
| Homepage +---+                       | Dashboard | 
+----------+   |                       +----+------+
               |    +----------+            ^
               +--->+  Login   +------------+
                    +---+------+
                        |
                        |   +----------------+
                        +-->+ Password Reset |
                            +----------------+
```

## Components Structure
Components were structured using the [atomic design](https://bradfrost.com/blog/post/atomic-web-design/) system. 
As my first implementation of this system in a project, I was experimenting by integrating the Material-UI components in this new flow. I used only the first three levels:
- **Atoms** - components directly imported from Material-UI with some styling applied (fx *Action Button*, *Load Spinner*, *Avatar*, *Drop Menu*)
- **Molecules** - components or sections of page (fx *Navbar*, *About*, *Register Form* )
- **Organisms** - the highest level, including the components described in the User Journey flowchart

For importing the components I configured the app to use *absolute imports*, starting at the */src* folder.\
I intend to dive deeper into this newly discovered components structure system and will certainly use it for future projects.

## Available Scripts
Clone this project on your local machine and run:

### `npm i`

This will install the required packages. 
After that is done, run the app in the development mode:

### `npm run start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.
