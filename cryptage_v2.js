const cryptage = tabCrypter => {
    let cryptTab = []; //Tableau vide pour stocker les caracteres unicode qui seront transformés en lettres
    tabCrypter.forEach(element => {
        let motSplit = element.split(''); // Je découpe le mot en lettre
        let toUniCode = []; //Tableau vide pour stocker les lettres qui seront tranformées en unicode Decimal
        let fromUnicode = []; //
        //Dans la boucle je transforme chaque lettre en caractere unicode
        //puis si la valeur du caractere est < 118 ou >= 97 je l'incremente de 5
        //si la valeur du caractere est >= 118 je la décrémente de 21.
        //Apres je transforme les unicodes en lettres
        for (let i = 0; i < motSplit.length; i++) {
            toUniCode[i] = motSplit[i].charCodeAt();
            if (toUniCode[i] >= 65 && toUniCode[i] <= 90) { ///MAJUSCULE

                if ((toUniCode[i] < 86) && (toUniCode[i] >= 65)) {
                    toUniCode[i] = motSplit[i].charCodeAt() + 5;
                } else if ((toUniCode[i] >= 86)) {
                    toUniCode[i] = motSplit[i].charCodeAt() - 21;
                }
                fromUnicode[i] = String.fromCharCode(toUniCode[i]);

            } else if (toUniCode[i] >= 97 && toUniCode[i] <= 122) { ///MINISCULE

                if ((toUniCode[i] < 118) && (toUniCode[i] >= 97)) {
                    toUniCode[i] = motSplit[i].charCodeAt() + 5;
                } else if ((toUniCode[i] >= 118)) {
                    toUniCode[i] = motSplit[i].charCodeAt() - 21;
                }
                fromUnicode[i] = String.fromCharCode(toUniCode[i]);
				
            } else if (toUniCode[i] >= 48 && toUniCode[i] <= 57) { ///CHIFFRE

                if ((toUniCode[i] < 53) && (toUniCode[i] >= 48)) {
                    toUniCode[i] = motSplit[i].charCodeAt() + 5;
                } else if ((toUniCode[i] >= 53)) {
                    toUniCode[i] = motSplit[i].charCodeAt() - 5;
                }
                fromUnicode[i] = String.fromCharCode(toUniCode[i]);
            }
        }
        cryptTab.push(fromUnicode.join('')); // je reconstruis le mot et l'ajoute au tableau cryptTab.
    });
    return cryptTab; // je renvoie le tableau
}
