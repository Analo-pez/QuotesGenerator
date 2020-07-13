'use strict';

// MENU HAMBURGUESA
var menu = document.querySelector('.hamburger');

function toggleMenu(event) {
	this.classList.toggle('is-active');
	document.querySelector('.menuppal').classList.toggle("is_active");
	event.preventDefault();
}

menu.addEventListener('click', toggleMenu, false);


//QUOTE GENERATOR- GAME PAGE

// SELECTORS
const name = document.querySelector('.js-name');
const button = document.querySelector('.js-button');
const quote = document.querySelector('.js-quote');
const thanks = document.querySelector('.js-thanks');
const reload = document.querySelector('.js-resetBtn');
let quoteArr = [];


//INCLUIR SERVIDOR DE FRASES hacer un then que retorne el arrayQuotes
const getApi = () => {
	fetch("./api/quotes.json")
		.then(response => {
			return response.json();
		})
		.then(data => {
			quoteArr = data;//declarada arriba
			paintQuote(quoteArr);//llamo aquí =>() por asincronía
		})
};

getApi();


//GENERAR NUMERO ALEATORIO
function getRandomNumber(max) {
	return Math.floor(Math.random() * max);
}


// //PINTAR FRASE RANDOM
function paintQuote() {
	const number = getRandomNumber(quoteArr.length);
	console.log(number);
	quote.innerHTML = quoteArr[number];
}


// FUNCIÓN QUE RECOGE FUNCIONES
function getAQuote(event) {
	event.preventDefault();
	getRandomNumber();
	paintGenerator();
}
button.addEventListener('click', getAQuote);


//PINTAR 
function paintGenerator(ev) {
	const person = document.querySelector('.js-person');
	const personValue = name.value;
	if (name.value !== '') {
		quote.classList.remove('hidden');
		thanks.classList.remove('hidden');
		reload.classList.remove('hidden');
		person.innerHTML = `${personValue}!`;
		name.classList.add('hidden')
		button.classList.add('hidden')
	} else {
		alert('Introduce un nombre en la casilla')
	}
}


//EVENTO AL TERMINAR DE ESCRIBIR EL INPUT
function handelText(ev) {
	if (name.value === '') {
		quote.classList.add('hidden');
		thanks.classList.add('hidden');
	}
}
// PARA QUE FUNCIONE PULSANDO ENTER
name.addEventListener("keyup", function (event) {
	if (event.keyCode === 13) {
		event.preventDefault();
		document.getElementById("myBtn").click();
	}
});





	//MAS COSAS PARA PULIR
	//  - refrescar número al generar frase, si no se refresca la página no cambia
	// - pulsar con el enter del teclado
	// - seleccionar frases por temática (motivacional, poética, reflexiva...)


		//PLANTEAMIENTO Y PARTES REALIZADAS

// Lo que quiero hacer es: que el boton de generar frase no se active si el input name no está relleno (HECHO)
// que cuando se pulse el boton pasen tres cosas:
//  - se genere una frase Random del arrayQuotes (HECHO)
//  - remove classList hidden al párrafo para que se pinte ahí (HECHO)
//  - el nombre del input se guarde en la constante para usar en thanks (HECHO)
//  - index 13 me da undefined (Math.floor != math.ceil) (HECHO)
//  - guardar un array como API?? (HECHO)

// IDEAS