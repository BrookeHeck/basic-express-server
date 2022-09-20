const readName = (people) => (request, response, next) => {
  let result = null;
  for(let person of people) {
    if(person.name.toLowerCase() === request.query.name.toLowerCase()) {
      result = person;
      break;
    }
  }
  result ? response.status(200).send(result) : next('Person not found');
};

module.exports = readName;