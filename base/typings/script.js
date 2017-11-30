//Création de variable en ES6, les variables classique "let"
//le templating  de screen s'écrit avec des backquote
let username = `Torponda`; // backquoot altgr+7

//création d'une variable constante => non modifiable, une fois def,la constante n'est plus modifiable
const birthYear = 1995;


/*  
Modifier le DOM
*/

let pageTitle = document.querySelector(`#pageTitle`);
console.log(pageTitle);

pageTitle.innerHTML =`Bonjour <em>${username}</em>, vous avez ${2017 - birthYear} ans`;

/*
Création d'une fonction
*/

const sayHello = () => console.log('Say Hello')

sayHello();

//function avec 1 param, si un seul param alors pas besoin de parenthèse

const twice = uniqNumber => console.log(uniqNumber*2)
twice(10);
twice(20);

// fonction avec plusieur parametres

const simpleAddition = (firstNumber, secondNumber)=>{
    let total = firstNumber + secondNumber
    console.log(total);
}

simpleAddition(10, 85);

//fonction avec parametre optionnel (valeur par defaut)

const optionalParameter = (name = `ClemenceG`) =>console.log (name);
optionalParameter();
optionalParameter(`Maintenant je m'apelle Jean-Hubert`);

//function avec REST parameter

const restParem = (name, ...skills) => {
console.log(name);
// le param REST devient un tableau
for(let item of skills){
    console.log(item);
}
};

restParem('Mayu', 'Fuir','avoir Peur', 'se faire enfermer', 'être posseder');
restParem('Yu', 'être mort');
restParem('Yuuri', 'Courir','Sauver des gens', 'draguer des demoiselle', 'ombre');