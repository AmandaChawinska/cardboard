<!-- PROJECT LOGO -->
<br />
<p align="center">
    <img src="https://images.prismic.io/nerdbord/0cc16003-70ab-4018-adde-ad44b9e5deee_Cardboard_logo.png?auto=compress,format" alt="Logo" width="360" height="80">
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">

  <summary>Table of Contents</summary>
  
  
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
      <li>
          <a href="#architecture">Architecture</a>
        </li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About

<p id="about-the-project">Cardboard is a single page application (SPA) for managing private notes.</p>


<!-- GETTING STARTED -->

## Getting Started

Great to see you here!

Below you will find instruction how to setup project locally on your machine.

### Prerequisites

1. Ensure that you have Node.js installed on you machine.

- [What is Node.js and how to install it?](https://nodejs.org/en/)
- [How can I check if I have Node.js installed](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm#checking-your-version-of-npm-and-nodejs)

2. Ensure that you have Yarn installed on you machine.

- [What is Yarn and how to install it?](https://yarnpkg.com/getting-started/install)

### Installation

1. Install required project dependencies by typing below command.
   ```sh
   npm run install
   ```
2. Start back-end service by typing:
   ```sh
   npm run server
   ```
3. Start front-end development by typing:
   ```sh
   npm run dev
   ```

**_all commands must be typed in terminal in project root directory_**

<!-- USAGE EXAMPLES -->

## Architecture

For architecture flow chart [see here](https://whimsical.com/cardboard-Nt4fR5WBe2xUPSkf1ayHEG).

#### **Directory structure**

```
├── src
│   ├── api
│   │   ├── client.ts // axios client setup
│   │   └── requests.ts // http requests configured
│   ├── components // UI layer
│   │   ├── Board
│   │   │   ├── Board.container.tsx // Container component for keeping business logic inside
│   │   │   ├── Board.tsx // Dumb, presentational component
│   │   │   └── __tests__ // Board integration and unit tests (always try to keep close to implementation)
│   │   └── Icons
│   ├── data // Domain separated data layer
│   │   ├── card
│   │   │   ├── api.ts // Card API requests
│   │   │   ├── dto.ts // Data transfer object (this is how data comes from backend)
│   │   │   ├── factory.ts // Factory for generating models, useful in tests
│   │   │   └── model.ts // Domain types used across front-end app
│   │   └── index.ts
│   ├── hooks // handy, and reusable UI hooks
│   │   ├── useInput.ts
│   │   └── useOutsideClick.ts
│   ├── theme // global styles and tokens
│   │   ├── global.css
│   └── utils // handy functions for solving repeatable problems
│       └── generators.ts

```

<!-- LICENSE -->

## License

All rights to this project belongs to [Nerdbord](https://nerdbord.io). This project is for educational purposes only.

<!-- CONTACT -->

## Contact

Nerdbord, [E-mail](jakub@nerdbord.io) | [Github](https://github.com/nerdbord) | [LinkedIn](https://www.linkedin.com/company/79632271)
