const cryptage = tabCrypter => {
    let cryptTab = [];
    ; //Tableau vide pour stocker les caracteres unicode qui seront transformés en lettres
        tabCrypter.forEach(element => {
            let mot = element.toLowerCase(); // Je mets en miniscule
            let motSplit = mot.split(''); // Je découpe le mot en lettre
            let toUniCode = []; //Tableau vide pour stocker les lettres qui seront tranformées en unicode Decimal
            let fromUnicode = [];
        //Dans la boucle je transforme chaque lettre en caractere unicode
        //puis si la valeur du caractere est < 118 ou >= 97 je l'incremente de 5
        //si la valeur du caractere est >= 118 je la décrémente de 21.
        //Apres je transforme les unicodes en lettres
        for (let i = 0; i < motSplit.length; i++) {
            toUniCode[i] = motSplit[i].charCodeAt();
            if ((toUniCode[i] < 118) && (toUniCode[i] >= 97)) {
                toUniCode[i] = motSplit[i].charCodeAt() + 5;
            } else if ((toUniCode[i] >= 118)) {
                toUniCode[i] = motSplit[i].charCodeAt() - 21;
            }
            fromUnicode[i] = String.fromCharCode(toUniCode[i]);
        }

        cryptTab.push(fromUnicode.join('')); // je reconstruis le mot et l'ajoute au tableau cryptTab.
    });

    return cryptTab; // je renvoie le tableau
}
