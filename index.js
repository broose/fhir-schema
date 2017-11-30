var fhir = require('./src/ajv.js');
var schema = require('./build/fhir.schema.json');

var validator = fhir.load(schema);

module.exports = validator;
