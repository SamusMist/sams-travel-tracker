# Sam's Travel Tracker


By:
\
[Sam Mistele](https://www.linkedin.com/in/sam-mistele-862b351b6/)


Peer reviewed by:
\
[Rory Magee](https://github.com/roryemagee1)


An interactive travel tracker application built using OOP and local API endpoints with an emphasis on GET and POST requests.
 Check out the project spec sheet [here](https://frontend.turing.edu/projects/travel-tracker.html).

## Goal

  The main goal of this project was to create a dynamic travel tracking website for a user, complete with a login page that uses fetch API to retrieve the correct travel data for each appropriate user in the local API. A user can also book a trip which will immediately post their data to the API and instantly load onto the DOM.


## How to Run

1. Clone this repo down to your machine
2. Clone the server repo [here](https://github.com/turingschool-examples/travel-tracker-api)
3. Open the root directory for each repo and run `npm install` to install dependencies
4. Run `npm start` in each repo to initialize the webpage and web server
5. Open the site by copying and pasting the server location http://localhost:8080/ in your address bar


## Features

**Login:**
On load, the user user sees a login form. To log in, enter `traveler` followed by a number between 1 and 50 in the username field. The password for all users is `traveler`.

![Login Demo](https://user-images.githubusercontent.com/89484102/157313540-bc0e2b6a-16d0-4949-8e2e-4b6139ec188a.png)

**User Dashboard:**
Once logged in, a user can see all of their trips displayed and sorted by pending, past, and future trips. All new trip requests will be immediately updated to the pending section.

**Book a Trip:**
To book a trip, the above 'choose an adventure' section must be filled out with the appropriate values. If a user would like to see the estimated cost of a trip, they may click 'get trip estimate', which will show the estimated cost for that trip, which includes a 10 percent travel agent fee.

![Booking Page Screenshot](https://user-images.githubusercontent.com/89484102/157313650-ffe56d5b-611d-4682-9dd4-30774c769e9c.png)

#### Accessibility & Responsive Layout

This application was tested with the Lighthouse Chrome extension in order to address the needs of all users.

### Technologies Used
- JavaScript
- CSS/SCSS
- HTML
- Webpack
- Mocha & Chai
- Atom
- Fetch API

#### Future Additions & Improvements
- Add the trip amount for each individual trip.
- Add suggested activities and travel agent prompts.
- Round trip estimates to the nearest dollar.
- Refactor CSS for a better user experience.
