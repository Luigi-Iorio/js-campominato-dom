"use strict";

/*
FUNZIONI
*/

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

// creare celle con bg al click e stampa numero in console
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

    // al click cambio bg e stampa in console numero cella
    elementoCella.addEventListener("click", function () {
      if (nRandom.includes(i)) {
        elementoCella.classList.add("red");
        modale.classList.remove("display-none");
      } else {
        elementoCella.classList.add("active");
        if (contatore.includes(i)) {
          contatore.push();
        } else {
          contatore.push(i);
        }
      }
      console.log(`La cella cliccata è la numero: ${i}`);
      punteggio.innerHTML = `Il tuo punteggio è: ${contatore.length}`;

      // var da usare per verificare se l'utente ha vinto
      const cell = nCelle() - 16;

      // modale per vittoria decretare la vittoria
      if (contatore.length == cell) {
        modaleVittoria.classList.remove("display-none");
      }
    });
  }
}

// per i numeri random
function random() {
  do {
    const numero = Math.floor(Math.random() * nCelle()) + 1;
    if (nRandom.includes(numero)) {
      nRandom.push();
    } else {
      nRandom.push(numero);
    }
  } while (nRandom.length < 16);
  console.log(nRandom);
}

/*
PROGRAMMA
*/

// contatore da confrontare con il numero celle per decretare la vittoria
const contatore = [];

const punteggio = document.querySelector(".risultato");

const modale = document.querySelector(".modale");
const modaleVittoria = document.querySelector(".mod-vitt");

// variabile per il titolo
const titolo = document.querySelector("h2");

// variabile per il container
const container = document.querySelector(".container");

// variabili per i bottoni
const bottonePlay = document.querySelector(".play");
const bottoneReset = document.querySelector(".reset");

// array per i numeri casuali
const nRandom = [];

// evento al click del bottone play
bottonePlay.addEventListener("click", function () {
  // classi per visualizzare / non visualizzare container
  container.classList.remove("opacity-0");
  container.classList.add("opacity-1");

  // classe per non far visualizzare il titolo
  titolo.classList.add("display-none");

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
