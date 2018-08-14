# Show Me The Strings
> Web application to store & display strings

## Table of Contents

1. [Requirements](#requirements)
2. [Usage](#usage)
3. [Testing](#testing)


## Demo

<img width="500" height="300" src="https://i.imgur.com/HADHvYo.png">


## Achievements

1. Separated DB handlers from Server for modularzation
2. Leveraged styled components to organize data in a table format
3. Simple and clean UI 
4. Leveraged Redux, Redux Saga and Reselect to manage states
5. Implemented unit tests for two containers


## Prerequisites

This app is implemented with Node.js (version 8.11.1) and PostgreSQL. Node and Postgres must be installed on the device to run the app. Please install them from the following links:

- [NVM](https://github.com/creationix/nvm)
- [PostgreSQL](https://www.postgresql.org/download/) 


## Usage

From the root directory:

1. Access postgres:

```sh
psql postgres;
```

2. Run schema to create `strings` database and table:

```sh
\i db/schema.sql
```

3. Exit from postgres:

```sh
\q
```

4. Install project dependencies:

```sh
npm install
```

5. Start Express server:

```sh
npm start 
```

6. Open browser at `127.0.0.1:3000` 

7. Enjoy!


## Testing

Tests were built with Jest & Enzyme. I implemented unit tests for `HomePage` and `InputPage` component with `test:string` command.

```sh
npm run test:string
```

## Requirements

1. Main Design

The main page displays all strings stored in the database, a user can navigate to the input page to save strings as well.

2. React Router

Using two routes `/` and `/input` to navigate users to `Homepage` and `InputPage` with React Router.

3. Redux

Redux is used to manage states for both containers.

4. Redux Saga

Redux Saga is used to fetch strings from DB with `fetchStrings()` and insert a new string to DB `saveString()`.

5. Reselect

Used selectors for `InputPage` container to handle states efficiently.

6. Styled Components

Created new styled components such as `Table`, `Title`, `Footer`, and `Link` to improve UI.

7. Unit Tests

Wrote automated unit tests for both containers.


## Built With

* [React](https://reactjs.org) 
* [NPM](https://www.npmjs.com)
* [Express](https://expressjs.com)
* [PostgreSQL](https://www.postgresql.org/docs)
* [React Router](https://reacttraining.com/react-router/web/guides/philosophy) 
* [Redux](https://redux.js.org)
* [Redux-Saga](https://redux-saga.js.org)
* [Reselect](https://github.com/reduxjs/reselect)
* [Styled Components](https://www.styled-components.com)
* [Jest](https://jestjs.io)
* [Enzyme](https://airbnb.io/enzyme)


## Style Guide

Followed [React Boilerplate](https://github.com/react-boilerplate/react-boilerplate) original EsLint configuration