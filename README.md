# Campo Minato

### Descrizione

L'obbiettivo di questo esercizio è quello di aggiungere logica alla struttura del gioco Campo Minato creata nella repository [js-campominato-grid](https://github.com/Luigi-Iorio/js-campominato-grid.git).

Nel gioco devono essere presenti 16 numeri casuali (le bombe), se l'utente clicca su una cella contenete uno di questi numeri - è stata calpestata un bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.

La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).

Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.

## Risoluzione in linguaggio naturale

1. Creare un array dove andranno inseriti 16 numeri generati casualmente

2. Con un ciclo for creare 16 numeri generati casualmente (in base al livello di gioco):

   - Se il livello è **facile**: generare 16 numeri casuali da 1 a 100
   - Se il livello è **medio**: generare 16 numeri casuali da 1 a 81
   - Se il livello è **difficile**: generare 16 numeri casuali da 1 a 49

3. Aggiungere una condizione nell'evento al click della cella per il quale: se il numero è presente nella lista dei numeri generati, la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle (utilizzare metodo degli array _includes()_)

4. Creare una condizione per il quale se vengono rivelate tutte le celle che non sono bombe la partita termina

5. Al termine della partita visualizzare il punteggio (numero di volte che l’utente ha cliccato su una cella che non era una bomba). Inserire in un array il numero della cella cliccata, se il numero è gia presente non inserirlo di nuovo altrimenti aggiungi il numero. In questo modo se l'utente schiaccia sulla stessa cella non viene incrementato il punteggio
