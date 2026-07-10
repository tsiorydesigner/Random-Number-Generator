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

let mots3 =["Hello", "_", "je suis un", "développeur"];
let phrase3 = mots3.join("");
console.log(phrase3); // "Hello je suis un développeur"