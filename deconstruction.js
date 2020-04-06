const myObject = {
    key1 : "value",
    key2 : "value",
    key3 : "value",
    etc : "...",
}


// common js
const key1 = myObject.key1;
const blabla = myObject.key2;

//exemple objet :
const user = {
    firstname: "berengere",
    lastname: "grosset",
    birthdate: new Date(1978, 3, 4), // le mois commence à 0 (janvier = 0 )
}

// ES6
const {
    key1,                         // récupération de key1
    key2: blabla,                // récupération de key2 renommée en blabla
    key6 = "default",           // récupération de key6 et initialisation si elle contient "undefined"
    ...rest                    // objet contenant les clés non récupérées (ici "key3", "etc")
} = myObject; //( equivaut à la ligne 10+11 )

const myArray = [
    "value1", // index 0
    "value2", // index 1
    "value3", // index 2
    "value4", // index 3
    "value5", // index 4
]


//common js
//const index0 = myArray[0];

// exemple tbl :
/*const myArticles = [
    { id: 1, title: "mon article", content: "bla", author: 1 },
    { id: 2, title: "mon article 2", content: "bla", author: 1 },
    { id: 3, title: "mon article 3", content: "bla", author: 1 },
    { id: 4, title: "mon article 4", content: "bla", author: 1 },
]

const title_of_my_article_3 = myArticles[2].title; */

const [ index0, index1, untruc, ...rest2 ] = myArray;

// pour les plus marteau d'entre nous

let a = "world";
let b = "hello";

[a, b] = [b, a];

console.log(a, b); // va afficher hello world