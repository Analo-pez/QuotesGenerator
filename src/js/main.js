'use strict';

// MENU HAMBURGUESA
var menu = document.querySelector('.hamburger');

function toggleMenu(event) {
	this.classList.toggle('is-active');
	document.querySelector(".menuppal").classList.toggle("is_active");
	event.preventDefault();
}

menu.addEventListener('click', toggleMenu, false);


//QUOTE GENERATOR

const name = document.querySelector('.js-name');
const button = document.querySelector('.js-button');
const quote = document.querySelector('.js-quote');
const thanks = document.querySelector('.js-thanks');


const arrayQuotes = ['La vida es algo más que salir a buscar castañas y acabar cogiendo higos en un árbol de manzanas', 'A veces, pensar demasiado, es quedar en sitio estanco', 'Antes de avanzar, acuérdate de mirar atrás', 'Tan deficiente es una casa sin tejado, como una base sin consolidar', 'Es hora de salir a comerse el mundo', 'No dejes para mañana lo que quieres en tu presente', 'Si pasas de largo, se te quedaba corto', 'No esperes que te lo digan, sabes que quieres hacerlo', 'La motivación se encuentra a la vuelta de una esquina por descubrir', 'No encuentras certeza, si no dejas hueco para que entre la duda', 'No pierdas el tiempo en ganarlo todo', 'Si te conformas con menos, pierdes de más', 'No tengas prisa, disfruta de todo el recorrido'];


// Lo que quiero hacer es: que el boton de generar frase no se active si el input name no está relleno (HECHO)
// que cuando se pulse el boton pasen tres cosas:
//  - se genere una frase Random del arrayQuotes (HECHO)
//  - remove classList hidden al párrafo para que se pinte ahí (HECHO)
//  - el nombre del input se guarde en la constante para usar en thanks (HECHO)

//MAS COSAS PARA PULIR
//  - index 13 me da undefined, quizá í-1
//  - guardar un array como API??
//  - refrescar número al generar frase, si no se refresca la página no cambia



function getAQuote(event) {
	event.preventDefault();
	pushGenerator();
	handelText();
	updateQuote();
	getRandomNumber();
}

function pushGenerator(ev) {
	const person = document.querySelector('.js-person');
	const personValue = name.value;
	if (name.value !== '') {
		quote.classList.remove('hidden');
		thanks.classList.remove('hidden');
		person.innerHTML = `${personValue}!`;
	}
}
button.addEventListener('click', getAQuote);

function handelText(ev) {
	if (name.value === '') {
		quote.classList.add('hidden');
		thanks.classList.add('hidden');
	}
}

name.addEventListener('keyup', handelText);

//GENERAR NUMERO ALEATORIO
function getRandomNumber(max) {
	return Math.ceil(Math.random() * max);
}
const number = getRandomNumber(arrayQuotes.length);
console.log(number);

//PINTAR FRASE
function updateQuote() {
	quote.innerHTML = arrayQuotes[number];
}
button.addEventListener('click', getAQuote);

