var texteACrypter;
var decoupage;

function verif() {
    texteACrypter = document.forms["formulaire"].elements["zone_text"].value;
    if (/^[a-z\s]*$/i.test(texteACrypter)) {
        
    } else {
        texteACrypter=texteACrypter.substr(0,texteACrypter.length-1);
        document.forms["formulaire"].elements["zone_text"].value = texteACrypter;
        alert('Seules les lettres sont autorisées');

    }
}

function decouper() {
    texteACrypter = document.forms["crypto"].elements["zone_text"].value;
    decoupage = texteACrypter.split(" ");
}

function crypter() {
    decouper();
    return (cryptage(decoupage).join(" "));
}

function decrypter() {
    decouper();
    return (decryptage(decoupage).join(" "));
}
