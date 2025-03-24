// 3 - people.js
// 1. Importa la tua funzione da names.js
// 2. Importa la tua funzione da hobbies.js
// 3. Crea una funzione che non ha parametri.
// La funzione dovrebbe restituire un oggetto con due proprietà: fullName ed hobbies.
// All'interno della tua funzione, usa le tue due funzioni precedenti per costruire l'oggetto.


const nameFunction = require("./names.js");
const personalHobbie = require("./hobbies.js");

const person = nameFunction('Andrea', 'Rispoli');

function fullNameHobbies(){
    return {
        fullName: `${person.firstName} ${person.lastName}`,
        hobbies: personalHobbie('Mangio', 'Bevo', 'Dormo')
    }
}

console.log(fullNameHobbies());