# Social Network API

## Description

This week's project was to create the backend of a social network API using noSQL. We used MongoDB to store data, MongoDB is known for its flexible technological application and provides advantages over MySQL, of which we avoided using particularly for this assignment. In this application we can store users and their emails; Users can store thoguhts and then other users can react to those thoughts. There is also a friend function within the application that allows users to create a friendship to one another. 

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Links](#links)
* [Questions](#questions)

## Installation

Run 'npm install' in the command line to install all the necessary dependencies if trying to run the app locally. 

## Usage

To access this application download the code and run 'npm start' in the root of the directory. THen open insomnia and follow the route paths in the routes directory to store data in the database. 

## Licenses

* Mit 

### Contributing

**User**: Miguel Davila Jr

## Technologies Used

* Express
* Node Modules
* GitHub
* JavaScript
* Terminal
* MongoDB

## Screenshots



### Deliverables: 10%

* Your GitHub repository containing your application code.

### Walkthrough Video: 37%

* A walkthrough video that demonstrates the functionality of the social media API must be submitted, and a link to the video should be included in your README file.

  * The walkthrough video must show all of the technical acceptance criteria being met.

  * The walkthrough video must demonstrate how to start the application’s server.

  * The walkthrough video must demonstrate GET routes for all users and all thoughts being tested in Insomnia.

  * The walkthrough video must demonstrate GET routes for a single user and a single thought being tested in Insomnia.

  * The walkthrough video must demonstrate POST, PUT, and DELETE routes for users and thoughts being tested in Insomnia.

  * Walkthrough video must demonstrate POST and DELETE routes for a user’s friend list being tested in Insomnia.

  * Walkthrough video must demonstrate POST and DELETE routes for reactions to thoughts being tested in Insomnia.

### Technical Acceptance Criteria: 40%

* Satisfies all of the preceding acceptance criteria plus the following:

  * Uses the [Mongoose package](https://www.npmjs.com/package/mongoose) to connect to a MongoDB database.

  * Includes User and Thought models outlined in the homework instructions.

  * Includes schema settings for User and Thought models as outlined in the homework instructions.

  * Includes Reactions as the `reaction` field's subdocument schema in the Thought model.

  * Uses functionality to format queried timestamps properly.

### Repository Quality: 13%

* Repository has a unique name.

* Repository follows best practices for file structure and naming conventions.

* Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.

* Repository contains multiple descriptive commit messages.

* Repository contains a high-quality README with description and a link to a walkthrough video.

### Bonus: +10 Points

* Application deletes a user's associated thoughts when the user is deleted.

## Review

You are required to submit BOTH of the following for review:

* A walkthrough video demonstrating the functionality of the application and all of the acceptance criteria being met.

* The URL of the GitHub repository. Give the repository a unique name and include a README describing the project.

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
