# Project
This project was generated with React version 17.0.2 for frontend part and with Spring Boot for backend part.
Website with a list of courses and an overview of all students attending those courses, possibility to add, delete and edit the course, possibility to add students in the course, possibility to add a student grade, possibility to search for the subject according to its description, enumeration of courses (winter, summer), implemented access control with Spring Security (when no user is logged in, all pages are visible except those for adding and editing data and the buttons for adding, deleting and editing data should not be seen data, and when the admin user logs in, he should have access to all the functionalities of the application). 
## Project structure
- /frontend contains the react app that is used as frontend as part of this project. `App.js` is the file for App Component. App Component is the main component which acts as a container for all other components.
- /backend contains folders: `bootstrap`, `config` (web security config), `model`, `repository` (JPA), `service`, `web` (controller, rest controller). The database is implemented with PostgreSQL. In the backend part also are implemented tests, exactly Unit Test, Integration Test and Selenium Test.   
- frontend and backend are connected via Rest API.

## Start the project
First you need to start the backend part, and then in the project directory, you can run:

### `yarn build`

Builds the app for production to the `build` folder.

### `yarn start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.









