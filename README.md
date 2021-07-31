# Personal Finder #
[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

## Abstract ##
This project made in Node.js and Express.js aims to provide a restful api for the Personal Finder application.

### Available routes ###
- https://personal-finder.herokuapp.com/api/

## I. Development Requirements ##
  
### A. Versions ###
 - Node.js [12.13.0](https://nodejs.org/en/download/)
 - MongoDB [4.2.1](https://docs.mongodb.com/manual/administration/install-community/)

### B. Run Application ###
```bash
$ yarn
$ yarn dev
```
 
### C. Run Tests ###
```bash
$ yarn jest
```

### D. Run ESlint ###
```bash
$ npx eslint .
```

## II. Deployment Requirements ##

### A. Environment Variables ###
 We use the DOTENV library to manage environment variables. Edit the .env file that is in the root of the project.
 
| Variables | Description |
|-----------|-------------|
| PORT | Port where the app will start |
| MONGO_URL | Database address |

## III. Todo ##
 - Implement more feature to system

## IV. License ##
[MIT](LICENSE)

