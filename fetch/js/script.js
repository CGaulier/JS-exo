"use strict";

/*
Requête asynchrone en ES6
Fonction fetch() plus le systeme de Promise
*/

//La fonction fetch() prend en parametre l'adresse de l'API (flux)
fetch("http://digitalworkshop.fr/wp-json/wp/v2/posts").then(function (data) {
    //Vérifie la présence de données dans la requete
    if (data.ok) {
        //La donnée est présentes => integrer le systeme de Promise
        return Promise.resolve(data);
    } else {
        return Promise.reject(new Error("Mange tes \xE9pinars gros connard"));
    }
}).then(
//Renvoyer la réponse
function (data) {
    return data.json;
}).then(function (data) {
    return console.log(data);
}).catch(function (err) {
    console.log(err);
});