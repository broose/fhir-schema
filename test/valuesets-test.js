assert = require('assert');
sch = require('../src/generation');
utils = require('../src/utils');
helpers = require('./helpers');

var tests = helpers.loadYaml('./valuesets-test.yaml');
fs = require('fs')
describe('conversion', function () {
    tests.forEach(function(test){
        it(test.element.id, function () {
            res  = sch.element2schema(test.element);
            assert.deepEqual(res, test.result);
        });
    });
});

