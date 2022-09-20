# Server Deployment Practice

**Author**: Brooke Heck

**Version**: 1.0.0

## Overview
This is a practice express server that can contains middleware, validators, and tests. The middleware logs the request that are sent to the server. The validator middleware  will make sure the query includes a name. Testing includes checks for all routes and error handling.

## Deployed Server
- Right now there is only one path that gets a person and their id by adding a query parameter to the string. Also, it isn't hooked up to any database so the only names you can query are Brooke, Jane, and John. The query name string is not case sensitive.

- Example: https://brookeh-basic-express-serve.herokuapp.com/person?name=brooke

[brookeh-basic-express-serve](https://brookeh-basic-express-serve.herokuapp.com/)

## Architecture
This is an express server and is written all in js. The server, request handling, middleware, and error handling modules can all be found in the corresponding folders in the src folder. The server module is exported and actually starts in the index.js file. The tests check all routes and error handling.

## Change Log
09-20-2022 2:25pm - Request person