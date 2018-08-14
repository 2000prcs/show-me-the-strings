# Show Me The Strings
> Web application to store & display strings


## Table of Contents

1. [Requirements](#requirements)
2. [Usage](#usage)
3. [Testing](#testing)

## Demo

<img width="400" height="300" src="https://i.imgur.com/c5ZTKH3.png">


DON'T FORGET TO EDIT TABLE (tbody / thead)


## Requirements

1. React Router

Using two routes `/` and `/input` to navigate users to `Homepage` and `InputPage` with React Router.

2. Redux

Redux is used to manage states for two components.

3. Redux Saga

Redux Saga is used to fetch strings from DB with `fetchStrings()` and insert a new string to DB `saveNewString()`.

4. Reselect

Used selectors to handle states efficiently.

5. Styled Components

Created new styled components (Table, Title..) to improve UI.

6. Unit Tests

Implemented automate testing for HomePage component.

## Prerequisites

This app is implemented with Node.js (version 8.11.1) and PostgreSQL. Node and Postgres must be installed on the device to run the app. Please install them from the following links:

- [NVM](https://github.com/creationix/nvm)
- [PostgreSQL](https://www.postgresql.org/download/) 

## Usage

From the root directory:

1. Install project dependencies:

```sh
npm install
```

2. Access postgres:

```sh
psql postgres;
```

3. Run schema to create `strings` database and table:

```sh
\i db/schema.sql
```

4. Exit from postgres:

```sh
\q
```

5. Start Express server:

```sh
npm start 
```

6. Open browser at `127.0.0.1:3000` 

7. Enjoy!

## Testing

Tests were built with Jest & Enzyme. I implemented unit tests for `HomePage` component with `test:string` command.

```sh
npm run test:string
```

## Built With

* [React](https://reactjs.org) 
* [NPM](https://www.npmjs.com)
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