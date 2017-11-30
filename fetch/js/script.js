'use strict';

// Attendre le chargement du DOM pour executer le code Javascript

document.addEventListener('DOMContentLoaded', function () {

    //Déclaration de variables

    var articleList = document.querySelector('#articleList');
    var apiUrl = 'http://digitalworkshop.fr/wp-json/wp/v2/posts';

    /*
    Requête asynchrone en ES6
    Fonction fetch() plus le système de Promise
    */
    var asyncLoadFunction = function asyncLoadFunction(theApiUrl) {

        // La fonction fetch() prend en paramètre l'adresse de l'API
        fetch(apiUrl).then(function (data) {
            // Vérifier la présence de données dans la réponse de la requête
            if (data.ok) {
                // Les données sont présentes => renvoyer une Promise de type 'resolve'
                return Promise.resolve(data);
            } else {
                // Les données sont présentes => renvoyer une Promise de type 'reject'
                return Promise.reject(new Error('Problème dans la requête'));
            }
        }).then(
        // Renvoyer la réponse
        function (data) {
            return data.json();
        }

        // Afficher les données dans la console   
        ).then(function (data) {
            return appendHtmlTags(data);
        })

        // Afficher l'erreur
        .catch(function (err) {
            return console.log(err);
        });
    };
    // ZBLEH MA VIE

    //Créer ses fonctions pour traiter les données et les afficher

    var appendHtmlTags = function appendHtmlTags(dataFronRequest) {
        //le parametre est un tableau je fais un for ES6
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = dataFronRequest[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var item = _step.value;

                //Afficher dans la console : le titre, l'exerpt, le lien
                /* console.log(item.title.rendered)
                 console.log(item.link)
                 console.log(item.excerpt.rendered)
                 console.log (`---`)*/

                //creatArticle va afficher mes infos
                creatArticle(item);
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
    var creatArticle = function creatArticle(itemFromIteration) {
        if (itemFromIteration.title.rendered != 'test') {
            articleList.innerHTML += '\n    <article>\n        <h3>' + itemFromIteration.title.rendered + '</h3>\n        <div>' + itemFromIteration.excerpt.rendered + '</div>\n        <p><a href="' + itemFromIteration.link + '" target="_blank">Voir l\'article</a></p>\n    </article>\n    ';
        }
    };

    //Lancer la requete

    asyncLoadFunction(apiUrl);

    //fin de la fonction qui charge le DOM (la première ligne de code en gros)
});