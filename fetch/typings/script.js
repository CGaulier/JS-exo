/*
Requête asynchrone en ES6
Fonction fetch() plus le systeme de Promise
*/

//La fonction fetch() prend en parametre l'adresse de l'API (flux)
fetch(`http://digitalworkshop.fr/wp-json/wp/v2/posts`).then(data =>{
//Vérifie la présence de données dans la requete
    if( data.ok ){
//La donnée est présentes => integrer le systeme de Promise
        return Promise.resolve(data)
    }else{
        return Promise.reject(new Error(`Mange tes épinars gros connard`))
    }

}).then(
    //Renvoyer la réponse
    data => data.json
).then(
    data => console.log(data)
).catch(err =>{
    console.log(err)
})
