/*
 * A class attribute
 */
module.exports = function(obj) {
    var output,
        identifierParser = require('./identifier.js'),
        expressionParser = require('./expression.js'),
        emptyParser = require('./empty.js');

    switch(obj.type) {
        case 'CLASS_ATTRIBUTE_ASSIGNMENT':
            output = 'public $' + identifierParser(obj.name) + ' = ' + expressionParser(obj.value) + ';\n';
            break;
        case 'CLASS_ATTRIBUTE':
            output = 'public $' + identifierParser(obj.name) + ';\n';
            break;
        case 'EMPTY':
            output = emptyParser(obj);
            break;
        default:
            throw "Invalid type: " + obj.type;
            break;
    }

    return output;
};