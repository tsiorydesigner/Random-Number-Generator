/*methode d'utilisation de switch case*/
let jour = 3;

switch (jour) {
    case 1:
        console.log("Lundi");
        break;

    case 2:
        console.log("Mardi");
        break;

    case 3:
        console.log("Mercredi");
        break;
    case 4:
        console.log("Jeudi");
        break;
    // case 5:
    //     console.log("vendredi");
    //     break;
    case 6:
        console.log("samedi");
        break;
    case 7:
        console.log("dimanche");
        break;
    default:
        console.log("Jour inconnu");
}

// /* methode d'utilisation de if else*/
// let jour2 = 5;
// if (jour2 === 1) {
//     console.log("Lundi");
// } else if (jour2 === 2) {
//     console.log("Mardi");
// } else if (jour2 === 3) {
//     console.log("Mercredi");
// } else if (jour2 === 4) {
//     console.log("Jeudi");
// } else if (jour2 === 5) {
//     console.log("Vendredi");
// } else if (jour2 === 6) {
//     console.log("Samedi");
// } else {
//     console.log("Jour inconnu");
// }

/* methode d'utilisation de if else*/
// let mois12 = 10;
// if (mois12 === 1) {
//     console.log("janvier");
// } else if (mois12 === 2) {
//     console.log("février");
// } else if (mois12 === 3) {
//     console.log("mars");
// } else if (mois12 === 4) {
//     console.log("avril");
// } else if (mois12 === 5) {
//     console.log("mai");
// } else if (mois12 === 6) {
//     console.log("juin");
// } else if (mois12 === 7) {
//     console.log("juillet");
// } else {
//     console.log("mois inconnu les gars");
// }

/* methode d'utilisation de switch case*/
// let mois = 10;

// switch (mois) {
//     case 1:
//         console.log("janvier");
//         break;
//     case 2:
//         console.log("février");
//         break;
//     case 3:
//         console.log("mars");
//         break;
//     case 4:
//         console.log("avril");
//         break;
//     case 5:
//         console.log("mai");
//         break;
//     case 6:
//         console.log("juin");
//         break;
//     case 7:
//         console.log("juillet");
//         break;
//     default:
//         console.log("mois bobo");
// }


/* methode d'utilisation split*/
let phrase = "Bonjour, comment ça va ?";
let mots = phrase.split(" ");
console.log(mots); // ["Bonjour,", "comment", "ça", "va", "?"]

/* methode d'utilisation de join*/
let mots2 = ["Bonjour,", "comment", "ça", "va", "?"];
let phrase2 = mots2.join(" ");
console.log(phrase2); // "Bonjour, comment ça va ?"

let mots3 =["Hello", "_", "je suis","_un","_","développeur"];
let phrase3 = mots3.join("");
console.log(phrase3); // "Hello je suis un développeur"

/* methode d'utilisation de replace*/
let phrase4 = "Hello, comment ça va boobo?";
let nouvellePhrase = phrase4.replace("bonjour", "Salut");
console.log(nouvellePhrase); // "Salut, comment ça va ?"

/* methode d'utilisation de replaceAll*/
let phrase5 = "Guten tag, comment ça va boobo?";
let nouvellePhrase2 = phrase5.replaceAll("boobo", "mon ami");
console.log(nouvellePhrase2); // "Hello, comment ça va mon ami?"

/* methode d'utilisation de toUpperCase*/
let phrase7 = "Tout les voitures sont belles";
let phraseMinuscules = phrase7.toLowerCase();
console.log(phraseMinuscules); // "tout les voitures sont belles"

/* methode d'utilisation de toLowerCase*/
let phrase6 = "Tout les voitures sont belles";
let phraseMajuscules = phrase6.toUpperCase();
console.log(phraseMajuscules); // "TOUT LES VOITURES SONT BELLES"

/* methode d'utilisation de trim*/
let phrase8 = "   akory,ao tsara ve e ?   ";
let phraseTrimmed = phrase8.trim();
console.log(phraseTrimmed); // "akory,ao tsara ve e  ?"


/* methode d'utilisation de includes*/
let phrase9 = "Salama daholo, ao tsara ve ?";
let contientBonjour = phrase9.includes("salama");
console.log(contientBonjour); // trueao tsara

/*methode d'utilisation de indexOf*/ 
let phrase10 = "salama tompoko, ao tsara ve ?";
let index = phrase10.indexOf("tompoko");
console.log(index); // 7    
