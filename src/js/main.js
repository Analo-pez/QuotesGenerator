'use strict';

// selector
var menu = document.querySelector('.hamburger');

// method
function toggleMenu(event) {
    this.classList.toggle('is-active');
    document.querySelector(".menuppal").classList.toggle("is_active");
    event.preventDefault();
}

// event
menu.addEventListener('click', toggleMenu, false);


//QUOTE GENERATOR

const name = document.querySelector('js-name');
const button = document.querySelector('js-button');
const quote = document.querySelector('js-quote');
const thanks = document.querySelector('js-thanks');

const arrayQuotes = ['La vida es algo más que salir a buscar castañas y acabar cogiendo higos en un árbol de manzanas', 'A veces, pensar demasiado, es quedar es sitio estanco', 'Antes de avanzar, acuérdate de mirar atrás']

// Lo que quiero hacer es: que el boton de generar frase no se active si el input name no está relleno
// que cuando se pulse el boton pasen tres cosas:
//         - se genere una frase Random del arrayQuotes
//         - remove classList hidden al párrafo para que se pinte ahí
//         - el nombre del input se guarde en la constante para usar en thanks



function getAQuote(event) {
    event.preventDefault();
    pushGenerator();
    updateQuote();
}

// function pushGenerator() {
//     if (input !== "")

// }