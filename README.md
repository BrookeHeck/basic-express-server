# Server Deployment Practice

**Author**: Brooke Heck

**Version**: 2.0.0

## Overview
This is a practice express server that can contains middleware, validators, and tests. The middleware logs the request that are sent to the server. The validator middleware  will make sure the query includes a name. Testing includes checks for all routes and error handling.

## AWS Deployment
The server has all the same functionality, but is now deployed to AWS. The first deployment was made using elastic beanstalk on the AWS GUI.
- [AWS GUI Deployment](http://basicexpressserver-env.eba-anzjedgq.us-west-2.elasticbeanstalk.com/)

The second deployment was also made with elastic beanstalk, but this time through the console.
- [EB CLI Deployment](http://basic-express-server-dev.us-west-2.elasticbeanstalk.com/)


## Deployed Server
- Original Deployment to Heroku

- Example: https://brookeh-basic-express-serve.herokuapp.com/person?name=brooke

[brookeh-basic-express-serve](https://brookeh-basic-express-serve.herokuapp.com/)

## Using the Server
- The server doesn't have a database, so there are only three names you can query with this endpoint.

- Endpoint: http://basic-express-server-dev.us-west-2.elasticbeanstalk.com
- query strings:
  /person/name=brooke
  /person/name=john
  /person/name=jane

## Architecture
This is an express server and is written all in js. The server, request handling, middleware, and error handling modules can all be found in the corresponding folders in the src folder. The server module is exported and actually starts in the index.js file. The tests check all routes and error handling.

## Change Log
09-20-2022 2:25pm - Request person
10-10-2022 2:25pm - Deployed to AWS