# SwimlaneUI

SwimlaneUI is a project management tool that allows users to organize blocks into different swimlanes (To Do, In Progress, Done). Each block is represented as a block, which can be created, edited, and deleted. The project is built with a user-friendly interface for managing blocks efficiently.It has drag-and-drop functionality to move blocks between swimlanes.

- ## Live Demo

- You can visit the live site [here](https://stirring-sorbet-16c04d.netlify.app/).


---


## Features

- **Create New Blocks:** Add a new block to one of the swimlanes (To Do, In Progress, Done) by clicking the "Create A Block" button.
- **Edit Blocks:** Modify block details by clicking the "Edit" button within each block card.
- **Delete Blocks:** Remove a block by clicking the "Delete" button within each block card.
- **Filter Blocks:** Search for blocks by title using the filter input above the swimlanes.
- **Timestamp:** Each block shows when it was created and last updated.
- **Swimlanes:** blocks are visually separated into three distinct columns:
  - **To Do**: For blocks that are yet to be started.
  - **In Progress**: For blocks currently being worked on.
  - **Done**: For completed blocks.
- **drag-and-drop:** It has drag-and-drop functionality to move blocks between swimlanes.
---


## Screenshots

![SwimlaneUI](https://i.ibb.co/QkDFJ4W/Swimlane-UI.png)

---

## Installation

1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/gitusergb/SwimlaneUI.git
   ```

2. Navigate to the project directory:
   ```bash
   cd SwimlaneUI
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Run the application:
   ```bash
   npm start
   ```

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript, React.js,Redux 

## How to Use

1. Click on the **Create A Block** button to create a new block.
2. Use the filter box to search for a block by its title.
3. To edit a block, click the **Edit** button under the block. Modify the content and save your changes.
4. To delete a block, click the **Delete** button under the block.

## Future Improvements
- Implement user authentication for block management.
- Add the ability to assign blocks to specific users.
- Implement notifications or reminders for block deadlines.

## Contact

For any inquiries or questions, feel free to reach out at:

- **Name**: Gauri Bidwai
- **Email**: g4ur131@gmail.com
- **GitHub**: [github.com/gitusergb](https://github.com/gitusergb)



<!-- problem statement: 
Frontend Problem Statement
As a JavaScript architect, your block is to design and implement a swimlane user interface (UI)
that facilitates the drag-and-drop functionality of blocks across different lanes representing
various stages or states. The swimlane UI should be configurable via a master configuration,
allowing or restricting blocks from moving to unspecified stages or states based on predefined
rules.
Additionally, upon moving a block to a new state, the UI should prompt the user to provide
necessary data that enables the transition for the block. This data entry process should be
seamlessly integrated into the UI workflow.
Furthermore, the UI should support a feature where users can click on a block within the
swimlanes to preview its details. The block preview should include a history of all previous
transitions for the block, providing users with a comprehensive view of its journey within the
system.
Additionally, the UI should include a top-level filter mechanism that enables users to select and
display blocks based on specified attributes.
Your goal is to create an intuitive and efficient swimlane UI that enhances user experience and
productivity while effectively managing block transitions, data interactions, and historical tracking
within the system.
Preferred Tech Stack:
ReactJs + Redux
Any UI library to enhance user experience
Backend can be mocked -->


<!-- # Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify) -->
