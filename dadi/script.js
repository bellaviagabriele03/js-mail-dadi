// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.



//Ragionamento: chiedo all'utente un numero da 1 a 6 e salvo questo numero in una variabile chiamata numUtente 
// genero un numero random da 1 a 6 che salvo in una variabile chiamata numComputer 
// faccio un confronto dei due numeri che stanno all'interno di queste due variabili, 
// e in base ai risultati possibili stampo i risultati:


//Risultati possibili:
// numero dell'utente > numero computer = Stampo Hai vinto !!! e i due numeri 
// numero dell'Utente < numero del computer = stampo Hai perso!!! e i due numeri 
// numero dell'utente = numero del computer = stampo Pareggio !! e i due numeri 


let numUtente = prompt("dammi un numero da 1 a 6");

let numComputer = Math.floor(Math.random() * 6) + 1;

let risultato = "";


if (numUtente > numComputer) {
    risultato = "Hai Vinto!!!";
}else if (numUtente < numComputer) {
    risultato = "Hai Perso!!!";
}else {
    risultato = "Pareggio!!"
}

console.log(`il tuo numero è:${numUtente}, il numero del pc è: ${numComputer}, ${risultato}`);
