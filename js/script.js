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

var list = $('.todo-list li ');

// Attraverso l'array
//
for (var i = 0; i < toDoList.length; i++) {
  // Clono il mio li nel template
  var template = $('.template ul li').clone();

  // Aggiungo gli elementi dell'array della to do list al li del template
  template.prepend(toDoList[i]);

  // Aggiungo il li del template alla .todo-list
  list.append(template);
}

















});
