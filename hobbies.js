// 2 - hobbies.js
// 1. Crea una funzione che accetta tre parametri: hobbyOne, hobbyTwo, hobbyThree. La funzione dovrebbe restituire  un array di stringhe contenenti gli hobby.
// 2. Esporta la funzione dal file.

function myHobbies(hobbyOne,hobbyTwo,hobbieThree){
    return [hobbyOne, hobbyTwo,hobbieThree];
}

//console.log(myHobbies('Mangio', 'Bevo', 'Dormo'))

module.exports = myHobbies;