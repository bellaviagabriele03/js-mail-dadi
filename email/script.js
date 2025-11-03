



// Mail
// Crea un array con delle email di chi può acedere.
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.
// Non è necessario provvedere alla validazione delle email.
// NON USARE INCLUDES!


//Ragionamento:
//chiedo all'utente l'email, faccio un confronto tra l'email data dall'utente 
// e quella che ho all'interno di un array, se l'email sono uguali allora faccio entrare l'utente nel sito,
// altrimenti richiedo all'utente l'email e ripeto il confronto tra le due email, 
// (ripeto questo confronto fin quando l'utente non inserirà un email che ho all'interno del mio array)



const email = ["gabriele@gmail.com", "pippo@gmail.com", "paperino@gmail.com"];

let emailUtente = prompt("Inserisci la tua e-mail:");

let risultato = false;

for (let i = 0; i < email.length; i++) {
    let curEmail = email[i];
    if (curEmail === emailUtente) {
        risultato = true;
    }

}


if (risultato === true) {
    console.log("Benvenuto");
    
}else {
    console.log("non sei registrato");
    
}




// codice con for "infinito" per poter chiedere il prompt a ripetizione:

// let x = 1;

// for (let i = 0; i < x; i++) {

//     if (emailUtente === email[0]) {
//         console.log("Benvenuto");
//         break;
//     }else {
//         alert("Email non registrata!")
//         emailUtente = prompt("Inserisci la tua e-mail:")
//         x= x + 1;
//     }


// }