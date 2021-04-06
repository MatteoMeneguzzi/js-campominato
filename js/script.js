// - Il computer deve generare 16 numeri casuali da 1 a 100 (bombe).
// - In seguito deve chiedere all’utente di inserire un numero da 1 a 100 alla volta,
// se il numero è presente nella lista dei numeri generati la partita termina
// altrimenti continua chiedendo all’utente un altro numero.
// // - La partita termina quando il giocatore inserisce un numero “vietato”
// o raggiunge il numero massimo possibile di numeri corretti.
// // - Al termine della partita il software deve comunicare il punteggio,
// cioè il numero di volte che l’utente ha inserito un numero consentito.

// // BONUS: (da fare solo se funziona tutto il resto)
// // all’inizio il software richiede anche una difficoltà all’utente
// cambia il range di numeri casuali:
// con difficoltà 0 => tra 1 e 100
// con difficoltà 1 => tra 1 e 80
// con difficoltà 2 => tra 1 e 50

var numMax; //numeri totali

var numBombe = 16; //numero bombe

var possibilita; //numero possibilita

var listaBombe = [];

var numCorretti = []; //numeri dove non ci sono bombe

var numUtente = 0; //scelta utente

// SCElta LIVELLO

var livello = parseInt(prompt("Scegli la difficoltà da 0 a 2").trim());

while (isNaN(livello) || livello < 0 || livello > 2) {
	livello = parseInt(prompt("Valore non valido, inserisci un numero da 0 a 2"));
}

switch (livello) {
	case 0:
		numMax = 80;
		break;
	case 1:
		numMax = 50;
		break;
	case 2:
		numMax = 20;
}

possibilita = numMax - numBombe;
// Gen bombe = generare 16 numeri casuali unici

while (listaBombe.length < numBombe) {
	var bomba = genNum(numMax);

	if (!listaBombe.includes(bomba)) {
		listaBombe.push(bomba);
	}
}

console.table(listaBombe);

// SE i numeri inseriti dall'utente sono meno delle possibilità e se non sono bombe
while (numCorretti.length < possibilita && !listaBombe.includes(numUtente)) {
	numUtente = parseInt(
		prompt(
			"Inserisci un numero da 1 a " +
				numMax +
				"\nTentativi riusciti: " +
				numCorretti.length +
				" di " +
				possibilita
		)
	);

	while (isNaN(numUtente) || numUtente < 1 || numUtente > numMax)
		numUtente = parseInt(
			prompt("Valore non valido, inserisci un numero da 1 a " + numMax)
		);
	console.log(numUtente);

	// Controllo scelta utente

	// Numero è già presente nella lista numeri numCorretti
	// numero è nella lista bombe

	if (listaBombe.includes(numUtente)) {
		alert(
			"hai perso! hai provato " +
				numCorretti.length +
				" volte prima di trovare la bomba"
		);
	} else if (numCorretti.includes(numUtente)) {
		alert("numero già inserito, inseriscine un altro!");
	} else if (!numCorretti.includes(numUtente)) {
		numCorretti.push(numUtente);
	}

	// Controllo raggiungimento possibilita
	if (numCorretti.length === possibilita) {
		alert("Hai vinto!!!");
	}
}

// GAME OVER Display

console.log("GAME OVER");

if (numCorretti.length === 0) {
	console.log(
		"Lista numeri correti inseriti: " + "Nessun numero corretto inserito"
	);
} else {
	console.log("Lista numeri correti inseriti: " + numCorretti);
}

console.log("Tentativi andati a segno: " + numCorretti.length);

// Funzioni //
function genNum(max) {
	return Math.floor(Math.random() * max) + 1;
}
