//Tableau avec l'alphabet
var alphabetDecrypt = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

//Fonction de décryptage
function decryptage(motCript){
    //Boucle pour parcourir le tableau avec les mots crypté reçu
    for ( var i = 0; i < motCript.length; i++){
        //Creation d'une variable qui récupere chaque mot crypté du tableau 
        var mot = motCript[i];
        //Transforme le mot crypté en tableau de lettre
        var tabMot = mot.split("");

        //Boucle pour parcourir le tableau coutenant les lettres crypté et les modification en lettres décryptés
        for (var j = 0; j < tabMot.length; j++){
            //Récuperation d'un lettre
            var lettreMotCrypt = tabMot[j];
            //récupération de son positionnement dans le tableau d'alphabet
            var positionLettreMotCrypt = alphabetDecrypt.indexOf(lettreMotCrypt);
            //création de la variable avec le positionement du caractére décrypté dans le tableau alphabet
            var positionLettreMotDecrypt;
            //Décryptage, on revient 5 position en arriere
            //Le if est utiliser pour créer le retour en fin de tableau d'alphabet
            if (positionLettreMotCrypt - 5 < 0 ){
                positionLettreMotDecrypt = (positionLettreMotCrypt - 5) + 26
            //Else quand nous n'avons pas ce soucis
            } else {
                positionLettreMotDecrypt = positionLettreMotCrypt - 5
            };
            //On indique le nouveau positionement pour modifier le tableau et décrypter les mots
            tabMot[j] = alphabetDecrypt[positionLettreMotDecrypt];
        }
        //Reconstruction des mots à partir du tableau de lettre
        var nouveauMot = tabMot.join("");
        motCript[i] = nouveauMot;
    }
    //On renvoi le tableau de mot pour traitement sur la plateforme
    return motCript
}