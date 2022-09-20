const logger = (request, response, next) => {
  let message = (`${request.method} ${request.path}?name=${request.query.name}`);
  console.log(message);
  next();
};

module.exports = logger;