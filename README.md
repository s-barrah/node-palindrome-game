## Installation

```bash
yarn install
```

## Local Development

For local development you will need the following packages installed locally,

- Node JS (8 or higher)
- Yarn
- MongoDB

You will need to rename `.env.example` to `.env` and set values for `PORT`, `BASE_URL`, `MONGODB_URI` and `MONGODB_URI_TEST`

You need to have `MongoDB` running in the background by running:

```bash
mongod
```


Then you can simulate an API endpoint locally after running 
the following command:

```bash
yarn start
```

## Architecture 

This section outlines the core areas of the application and the logic used when implemented.

- [Data Layer](#data-layer)


### Data Layer
The application persists the high scores by storing locally in the `outputs/tmp` folder.


## Testing

Tests are located in the `tests` folder and can be invoked by running `yarn unit-test` to run the unit tests and `yarn feature-test` to run the API tests. These tests will invoke the defined 
actions in a wrapper, where the response can then be tested.
