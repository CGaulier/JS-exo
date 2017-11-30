'use strict';

//Création de variable en ES6, les variables classique "let"
//le templating  de screen s'écrit avec des backquote
var username = 'Torponda'; // backquoot altgr+7

//création d'une variable constante => non modifiable, une fois def,la constante n'est plus modifiable
var birthYear = 1995;

/*  
Modifier le DOM
*/

var pageTitle = document.querySelector('#pageTitle');
console.log(pageTitle);

pageTitle.innerHTML = 'Bonjour <em>' + username + '</em>, vous avez ' + (2017 - birthYear) + ' ans';

/*
Création d'une fonction
*/

var sayHello = function sayHello() {
    return console.log('Say Hello');
};

sayHello();

//function avec 1 param, si un seul param alors pas besoin de parenthèse

var twice = function twice(uniqNumber) {
    return console.log(uniqNumber * 2);
};
twice(10);
twice(20);

// fonction avec plusieur parametres

var simpleAddition = function simpleAddition(firstNumber, secondNumber) {
    var total = firstNumber + secondNumber;
    console.log(total);
};

simpleAddition(10, 85);

//fonction avec parametre optionnel (valeur par defaut)

var optionalParameter = function optionalParameter() {
    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'ClemenceG';
    return console.log(name);
};
optionalParameter();
optionalParameter('Maintenant je m\'apelle Jean-Hubert');

//function avec REST parameter

var restParem = function restParem(name) {
    for (var _len = arguments.length, skills = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        skills[_key - 1] = arguments[_key];
    }

    console.log(name);
    // le param REST devient un tableau
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = skills[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var item = _step.value;

            console.log(item);
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
};

restParem('Mayu', 'Fuir', 'avoir Peur', 'se faire enfermer', 'être posseder');
restParem('Yu', 'être mort');
restParem('Yuuri', 'Courir', 'Sauver des gens', 'draguer des demoiselle', 'ombre');