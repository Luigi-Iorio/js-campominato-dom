"use strict";

/*
FUNZIONI
*/

// Per visualizzare / non visualizzare elementi al click play
function opacitaElementi() {
  container.classList.remove("opacity-0");
  container.classList.add("opacity-1");

  titolo.classList.add("display-none");
}

// per creare la cella all'interno del container
function creazioneCella(tag, nomeClasse, contenuto) {
  const cella = document.createElement(tag);
  cella.classList.add(nomeClasse);
  cella.append(contenuto);

  return cella;
}

// definire numero celle
function nCelle() {
  // tipo di livello scelto con la select
  const select = document.querySelector("select").value;
  // valore predefinito celle
  let numeroCelle = 0;

  if (select === "facile") {
    numeroCelle = 100;
  } else if (select === "medio") {
    numeroCelle = 81;
  } else {
    numeroCelle = 49;
  }

  return numeroCelle;
}

// creare celle in base al livello scelto con bg al click e stampa numero in console
function cCelle() {
  for (let i = 1; i <= nCelle(); i++) {
    let elementoCella = "";

    // creazione numero di celle in base alla scelta dell'utente
    if (nCelle() === 100) {
      elementoCella = creazioneCella("div", "cella", i);
      container.append(elementoCella);
    } else if (nCelle() === 81) {
      elementoCella = creazioneCella("div", "cella2", i);
      container.append(elementoCella);
    } else if (nCelle() === 49) {
      elementoCella = creazioneCella("div", "cella3", i);
      container.append(elementoCella);
    }

    // eventi al click della singole celle
    elementoCella.addEventListener("click", function () {
      if (nRandom.includes(i)) {
        elementoCella.classList.add("red");
        modale.classList.remove("display-none");
      } else {
        elementoCella.classList.add("active");
        if (!contatore.includes(i)) {
          contatore.push(i);
        }
      }
      // stampa numero progressivo cella cliccata in console
      console.log(`La cella cliccata è la numero: ${i}`);
      // stampa punteggio in html
      punteggio.innerHTML = `Il tuo punteggio è: ${contatore.length}`;

      // visualizzazione modale in caso di vittoria
      vittoriaGioco();
    });
  }
}

// per i numeri random
function random() {
  do {
    const numero = Math.floor(Math.random() * nCelle()) + 1;
    if (!nRandom.includes(numero)) {
      nRandom.push(numero);
    }
  } while (nRandom.length < 16);
  console.log(nRandom);
}

// Per decretare la vittoria utente
function vittoriaGioco() {
  // var da usare per verificare se l'utente ha vinto
  const cell = nCelle() - 16;

  // modale per vittoria decretare la vittoria
  if (contatore.length == cell) {
    modaleVittoria.classList.remove("display-none");
  }
}

/*
PROGRAMMA
*/

// Variabili globali
// variabile per il titolo
const titolo = document.querySelector("h2");

// variabile per il container
const container = document.querySelector(".container");

// variabili per i bottoni
const bottonePlay = document.querySelector(".play");
const bottoneReset = document.querySelector(".reset");

// variabili per modali
const modale = document.querySelector(".modale");
const modaleVittoria = document.querySelector(".mod-vitt");

// variabile per punteggio
const punteggio = document.querySelector(".risultato");

// array per i numeri casuali
const nRandom = [];
// array contatore da confrontare con il numero celle per decretare la vittoria
const contatore = [];

// evento al click del bottone play
bottonePlay.addEventListener("click", function () {
  // Per visualizzare / non visualizzare elementi al click play
  opacitaElementi();

  // definire numero di celle in base alla scelta dell'utente
  nCelle();

  // Genera 16 numeri random e li pusha in array
  random();

  // per creare celle dinamicamente e assegnazione numero alle celle
  cCelle();
});

// al click bottone reset ricarica la pagina
bottoneReset.addEventListener("click", function () {
  location.reload();
});
