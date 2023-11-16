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
      elementoCella.classList.add("active");
      console.log(`La cella cliccata è la numero: ${i}`);
    });
  }
}

/*
PROGRAMMA
*/

// variabile per il titolo
const titolo = document.querySelector("h2");

// variabile per il container
const container = document.querySelector(".container");

// variabili per i bottoni
const bottonePlay = document.querySelector(".play");
const bottoneReset = document.querySelector(".reset");

// evento al click del bottone play
bottonePlay.addEventListener("click", function () {
  // classi per visualizzare / non visualizzare container
  container.classList.remove("opacity-0");
  container.classList.add("opacity-1");

  // classe per non far visualizzare il titolo
  titolo.classList.add("display-none");

  // definire numero di celle in base alla scelta dell'utente
  nCelle();

  // per creare celle dinamicamente e assegnazione numero alle celle
  cCelle();
});

// al click bottone reset ricarica la pagina
bottoneReset.addEventListener("click", function () {
  location.reload();
});
