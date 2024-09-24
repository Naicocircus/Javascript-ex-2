//ESERCIZI SUGLI IF: 

/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function findBigger(number1, number2) {
  if (number1> number2) {
    return number1;
  } else if (number2 > number1) {
    return number2;
  } else {
    return "The Numbers are Even";
  }
}

let number1 = 10;
let number2 = 20;

let risult = findBigger(number1, number2);
console.log("The bigger number is: " + risult);

/*
ESERCIZIO 2
  Crea un blocco condizionale if/else per mostrare in console il messaggio corretto in ogni condizione.

  num < 5 - mostra in console "Tiny"
  num < 10 - mostra in console "Small"
  num < 15 - mostra in console "Medium"
  num < 20 - mostra in console "Large"
  num >= 20 - mostra in console "Huge"
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let num = 300; 

if (num < 5) {
  console.log("Tiny");
} else if (num < 10) {
  console.log("Small");
} else if (num < 15) {
  console.log("Medium");
} else if (num < 20) {
  console.log("Large");
} else {
  console.log("Huge");
}


//ESERCIZI SUI CICLI: 

/* ESERCIZIO 3
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, ma evitando di mostrare i numeri 3 e 8 (suggerimento: ripassa l'uso di "continue").
*/

/* SCRIVI QUI LA TUA RISPOSTA */

for (let i = 0; i <= 10; i++) {
  if (i === 3 || i === 8) {
    continue; 
  }
  console.log(i);
}

/* ESERCIZIO 11
  Scrivi un ciclo in JavaScript per iterare da 0 a 15. Per ciascun elemento, il ciclo deve controllare the il valore corrente sia pari o dispari, e mostrare il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
for (let i = 0; i <= 15; i++) {
  if (i % 2 === 0) {
    console.log(i + " Even");
  } else {
    console.log(i + " Odd");
  }
}

//ESERCIZI EXTRA NON OBBLIGATORI

/* ESERCIZIO EXTRA 1
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function verify(number1, number2) {
  if (number1 === 8 || number2 === 8) {
    return true;
  } else if ((number1 + number2 === 8) || (Math.abs(number1 - number2) === 8)) {
    return true;
  } else {
    return false;
  }
}

let value1 = 5;
let value2 = 3;

let risultato = verify(value1, value2);
console.log("is the number verified? " + risultato);

/* ESERCIZIO EXTRA 2
Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function calcolaTotaleCheckout(totalShoppingCart) {
  const shippingFees = 10;
  
 
  if (totalShoppingCart > 50) {
    return totalShoppingCart;
  } else {
   
    return totalShoppingCart + shippingFees;
  }
}

let totalShoppingCart = 45; 
let orderAmount = calcolaTotaleCheckout(totalShoppingCart);
console.log("The order amount is: €" + orderAmount);


/* ESERCIZIO EXTRA 3
  Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando, usando l'algoritmo del codice precedente, se le spedizioni siano gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function calcolaTotaleCheckout(totalCart) {
  const scontoBlackFriday = 0.20; 
  const costoSpedizione = 10;

  
  let totaleScontato = totalCart * (1 - scontoBlackFriday);

 
  if (totaleScontato > 50) {
    return totaleScontato;
  } else {
    
    return totaleScontato + costoSpedizione;
  }
}

let totalCart = 60; 

let totaleDaAddebitare = calcolaTotaleCheckout(totalCart);
console.log("Il totale da addebitare all'utente è: €" + totaleDaAddebitare.toFixed(2));


/*  ESERCIZIO EXTRA 4
  Usa un operatore ternaio per assegnare ad una variabile chiamata "gender" i valori "male" o "female".
  La scelta deve essere basata sul valore di un'altra variabile booleana chiamata isMale.
  Es. se isMale e' vero, il valore di gender deve essere "male"
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let isMale = true; 

let gender = isMale ? "male" : "female";

console.log("Gender: " + gender);


/* ESERCIZIO EXTRA 5
  Scrivi un algoritmo che iteri i numeri da 1 a 100, stampandoli in console. Se un valore tuttavia è multiplo di 3 (operatore modulo!), stampa al suo posto la parola "Fizz" e se il numero è multiplo di 5, stampa "Buzz". Se le condizioni si verificano entrambe, stampa "FizzBuzz".
*/

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}