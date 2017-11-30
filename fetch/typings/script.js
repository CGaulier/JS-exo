// Attendre le chargement du DOM pour executer le code Javascript

document.addEventListener(`DOMContentLoaded`,()=> {



//Déclaration de variables

let articleList = document.querySelector(`#articleList`);
const apiUrl = `http://digitalworkshop.fr/wp-json/wp/v2/posts`;


/*
Requête asynchrone en ES6
Fonction fetch() plus le système de Promise
*/
const asyncLoadFunction = theApiUrl =>{

// La fonction fetch() prend en paramètre l'adresse de l'API
fetch(apiUrl).then(data => {
    // Vérifier la présence de données dans la réponse de la requête
  if (data.ok) {
    // Les données sont présentes => renvoyer une Promise de type 'resolve'
    return Promise.resolve(data);
  }
  else {
      // Les données sont présentes => renvoyer une Promise de type 'reject'
    return Promise.reject(new Error('Problème dans la requête')); 
  }
})
.then(
    // Renvoyer la réponse
    data => data.json()


 // Afficher les données dans la console   
).then(data => appendHtmlTags(data))


    // Afficher l'erreur
.catch((err) => console.log(err));
}
// ZBLEH MA VIE

//Créer ses fonctions pour traiter les données et les afficher

const appendHtmlTags = dataFronRequest =>{
    //le parametre est un tableau je fais un for ES6
    for(let item of dataFronRequest){
        //Afficher dans la console : le titre, l'exerpt, le lien
       /* console.log(item.title.rendered)
        console.log(item.link)
        console.log(item.excerpt.rendered)
        console.log (`---`)*/

        //creatArticle va afficher mes infos
        creatArticle(item);
    }
}
const creatArticle = (itemFromIteration) =>{
    if(itemFromIteration.title.rendered !=`test`){ 
    articleList.innerHTML +=`
    <article>
        <h3>${itemFromIteration.title.rendered}</h3>
        <div>${itemFromIteration.excerpt.rendered}</div>
        <p><a href="${itemFromIteration.link}" target="_blank">Voir l'article</a></p>
    </article>
    `
    }
}

//Lancer la requete

asyncLoadFunction(apiUrl);


//fin de la fonction qui charge le DOM (la première ligne de code en gros)
});