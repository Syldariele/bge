console.log('hello world');

let nbOfScreenColumns = 2;
nbOfScreenColumns = "two";

 // variable2 = "j'ai changer de contenu";

const nbOfTry = 3;

 // On ne réaffecte pas une variable constante ( cette ligne va lamentablement échouer...):
 // variable3 = "vais-je réussir à changer le contenu ??";


console.log("variable 2 :", nbOfScreenColumns);
console.log("variable 3 :", nbOfTry);


 // TYPES DE VARIABLES

const strVariable = "chaine de caractère";
const numberVariable = 3.14;
const booleanVariable = true;
const arrayVariable = [
    "cookies",
    3310,
    true,
    [],
];
const objectVariable = {
    favoriteBiscuit: "cookies",
    favoriteNokia: 3310,
    haveGoodJokes: true,
    friends: [],
};
console.log(objectVariable);

 // SI....SINON
if (numberVariable === 3.14) {
    console.log("c'est vrai !");
} else {
    console.log("c'est faux !");
}
//SI...SINON SI....SINON SI...
if (numberVariable === "zeiufh") {
    console.log("condition 1 est vrai");
} else if (strVariable === "erhufue") {
    console.log("condition 1 est fausse, mais condition 2 est vrai");
} else {
    console.log("toutes les conditions sont fausses.");
}
switch (numberVariable) {
    case "str1": // if (numbreVariable === "str1" {
        console.log("condition 1 est vrai");
        break;
    case "eiurhfieh": // } else if (numberVariable ==="eiurhfieh") {
        console.log("la condition 1 est fausse, mais la condition 2 es vrai");
        break;
    default: // } else {
        console.log("toutes les conditions sont fausses");
        break;
}

 // TANT QUE
while (numberVariable === 3.24) {
    console.log("c'est encore vrai");

}

do {
    console.log("c'est la première fois, ou c'est encore vrai");
} while (numberVariable === 3.24);

 // POUR...VARIANT DE...A...EN PAS DE...
for (let i = 0; i < 100; i++) {
    console.log(i);
}
const functionVariable = (arg1, arg2, ...args) => {
    // TRAITEMENT DE LA FONCTION
    return "valeur à retourner"
};
const nullVariable = null;
const undefinedVariable = undefined;



