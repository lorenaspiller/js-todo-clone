/*
TO DO LIST
Creare una todo list che permatta di aggiungere (tramite campo input) e rimuovere gli elementi!
*/


/*
FUNZIONE
*/
/**
 * templateClone - clona un template, modifica gli elementi e li inietta nel DOM
 *
 * @param  {duplicateMe}  duplicateMe   copia l'elemento del DOM selezionato
 * @param  {addMeBefore}  addMeBefore   modifica aggiungendo le info all'inizio dell'elemento del template
 * @param  {addMeAfter}   addMeAfter    modifica aggiungendo le info alla fine dell'elemento del template
 */
function templateClone(duplicateMe, addMeBefore, addMeAfter) {
  // Clono il mio li nel template
  var template = duplicateMe.clone();

  // Aggiungo gli elementi dell'array della to do list al li del template
  template.prepend(addMeBefore);

  // Aggiungo il li del template alla .todo-list
  addMeAfter.append(template);
}


$(function() {

var toDoList = [
  "comprare mascarpone",
  "comprare savoiardi",
  "comprare caffe",
  "comprare uova"
];

var listElement = $('.todo-list li ');
var templateListElement = $('.template ul li');

// Attraverso l'array

for (var i = 0; i < toDoList.length; i++) {
  // Clono il mio li nel template
  // Aggiungo gli elementi dell'array della to do list al li del template
  // Aggiungo il li del template alla .todo-list
  templateClone(templateListElement, toDoList[i], listElement);
}


// Rendo il campo imput funzionale all'evento della pressione del tasto invio

var add = $('#todo-list-add');

add.keydown(function(e){

  if (e.which == 13) {
    // prendo il valore del testo immesso nel campo input
    var text = $(this).val();
    // console.log(text);

    //controllo che il campo input non sia vuoto, così da non aggiungere elementi vuoti alla lista
    if (text != "") {
      // Clono il mio li nel template
      // Aggiungo gli elementi dell'array della to do list al li del template
      // Aggiungo il li del template alla .todo-list
      templateClone(templateListElement, text, listElement);

      // Svuoto il campo input una volta inserito l'elemento digitato
      $(this).val("");
    }
  }
});



// rendo la X cliccabile, così da poter cancellare un elemento

var list = $('.todo-list');

// la rendo cliccabile anche sugli elementi che l'utente inserirà in futuro
list.on('click', '.todo-list__done', function() {
  $(this).parent().remove();
});

});
