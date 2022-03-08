console.log('Js Ok!');
/*
Consegna:
Scrivi un programma che stampi in console i numeri da 1 a 100.
MILESTONE 1
Per i multipli di 3 stampi “Fizz”
 al posto del numero e
  per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
MILESTONE 2
Dato un container nel DOM,
 appendi un elemento html con il numero o la stringa corretta.
MILESTONE 3
Applica uno stile differente a seconda del valore
 dell'indice per i multipli di 3,
  per i multipli di 5
   e per i valori che sono sia multipli di 3 che di 5.
*/

const containerVar = document.getElementById('container');
let element;
// MILESTONE 1 
for (let x = 1; x <= 100; x++) {

    if (x % 3 === 0 && x % 5 === 0) {
        console.log('FizzBuzz');
        // MILESTONE 2 
        element = `<div>FizzBuzz</div>`;

    } else if (x % 3 === 0) {
        console.log('Fizz');
        // MILESTONE 2 
        element = `<div>Fizz</div>`;

    } else if (x % 5 === 0) {
        console.log('Buzz');
        // MILESTONE 2 
        element = `<div>Buzz</div>`;

    } else {
        console.log(x);
        // MILESTONE 2 
        element = `<div>${x}</div>`;

    }
    containerVar.innerHTML += element;
}

