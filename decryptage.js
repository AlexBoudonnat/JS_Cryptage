var alphabet = ["v","w","x","y","z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u"];
var alphabetDecrypt = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];



function decryptage(motCript){
    for ( var i = 0; i < motCript.length; i++){
        var mot = motCript[i];
        var tabMot = mot.split("");
        for (var j = 0; j < tabMot.length; j++){
        
            var lettreMotCrypt = tabMot[j];
            var positionLettreMotCrypt = alphabetDecrypt.indexOf(lettreMotCrypt);
            tabMot[j] = alphabet[positionLettreMotCrypt];
        }
        var nouveauMot = tabMot.join("");
        motCript[i] = nouveauMot;
    }
    return motCript
}