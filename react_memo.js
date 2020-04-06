// state
import { useState } from "react";

const [ state, setState ] = useState("default value"); // equivalent to : let state = "default value"

// envoie du formulaire
const handleSubmit = (event) => {
    event.preventDefault(); // empêche l'envoi d'une requête

    // l'action à effectuer lors de l'envoi du formulaire
}

// changement d'un state via formulaire
// -- dans la partie fonctionnelle (en haut)
const handleChange = (event) => {
    switch (event.target.name) {
    case "state" :
        setState(event.target.value);
        break;
        //no default
    }
}

// dans le return
<input
    type="text"
    name="state" // équivalent au name dans le switch
    onChange={handleChange}
    value={state} // équivalent au nom du state
/>