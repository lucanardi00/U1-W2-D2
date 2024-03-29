/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const highestNum = [1, 2]

if (highestNum[0] > highestNum[1]) {
  console.log('Il numero più grande è ', highestNum[0])
} else {
  console.log('Il numero più grande è ', highestNum[1])
}
/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const myNumbers = [1, 2, 3, 4, 5]

if (myNumbers[0] !== 5) {
  console.log(myNumbers[0], 'is not equal to 5')
} else if (myNumbers[1] !== 5) {
  console.log(myNumbers[1], 'is not equal to 5')
} else if (myNumbers[2] !== 5) {
  console.log(myNumbers[2], 'is not equal to 5')
} else if (myNumbers[3] !== 5) {
  console.log(myNumbers[3], 'is not equal to 5')
} else if (myNumbers[4] !== 5) {
  console.log(myNumbers[4], 'is not equal to 5')
} else {
  console.log(myNumbers[4], 'is equal to 5')
}
/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const canBeDivided = [1, 5]

if (canBeDivided[0] % 5 === 0) {
  console.log(canBeDivided[0], 'è divisibile per 5')
} else if (canBeDivided[1] % 5 === 0) {
  console.log(canBeDivided[1], 'è divisibile per 5')
} else {
  console.log('Nessun elemento in canBeDivided è divisibile per 5')
}
/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const x = 3
const y = 11

if (x === 8 || y === 8 || x - y === 8 || y - x === 8 || x + y === 8) {
  console.log('Algoritmo verificato!')
}
/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const totalShoppingCart = 40
const shippingCost = 10

if (totalShoppingCart > 50) {
  console.log('Il totale è ', totalShoppingCart)
} else {
  console.log('Il totale è ', totalShoppingCart + shippingCost)
}
/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const totalShoppingCart2 = 40

if (totalShoppingCart2 * 0.8 > 50) {
  console.log('Il totale è ', totalShoppingCart2)
} else {
  console.log('Il totale è ', totalShoppingCart2 * 0.8 + shippingCost)
}
/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let num1 = 10
let num2 = 9
let num3 = 8
if (num1 > num2 && num2 > num3) {
  console.log(num1, num2, num3)
} else if (num2 > num1 && num1 > num3) {
  console.log(num2, num1, num3)
} else if (num2 > num3 && num3 > num1) {
  console.log(num2, num3, num1)
} else if (num3 > num2 && num2 > num1) {
  console.log(num3, num2, num1)
} else {
  console.log(num1, num3, num2)
}
/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let value = 'valore'
console.log('value is a', typeof value)
/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let pariDispari = 5

if (pariDispari % 2 === 0) {
  console.log(pariDispari, 'è pari')
} else {
  console.log(pariDispari, 'è dispari')
}
/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let val = 11
if (val < 5) {
  console.log('Minore di 5')
} else if (val < 10) {
  console.log('Meno di 10')
} else {
  console.log('Uguale a 10 o maggiore')
}
/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

/* SCRIVI QUI LA TUA RISPOSTA */
me.city = 'Toronto'
console.log(me)
/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
delete me.lastName
/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
delete me.skills.pop()
/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/
const number = []
number.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
number[9] = 100
console.log(number)
