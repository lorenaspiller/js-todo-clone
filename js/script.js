/*
TO DO LIST
Creare una todo list che permatta di aggiungere (tramite campo input) e rimuovere gli elementi!
*/


$(function() {

var toDoList = [
  "comprare mascarpone",
  "comprare savoiardi",
  "comprare caffe",
  "comprare uova"
];

var listElement = $('.todo-list li ');

// Attraverso l'array

for (var i = 0; i < toDoList.length; i++) {
  // Clono il mio li nel template
  var template = $('.template ul li').clone();

  // Aggiungo gli elementi dell'array della to do list al li del template
  template.prepend(toDoList[i]);

  // Aggiungo il li del template alla .todo-list
  listElement.append(template);
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
      var template = $('.template ul li').clone();

      // Aggiungo gli elementi dell'array della to do list al li del template
      template.prepend(text);

      // Aggiungo il li del template alla .todo-list
      listElement.append(template);

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
