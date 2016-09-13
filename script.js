// Main Script
(function () {

var names = ["Jerónimo", "Juan", "Andrés", "Mariana", "Ximena", "Daniela", "Marcos", "Paula", "Laura", "Gastón"];
for (var i = 0; i < names.length; i++) {
  var firstLetter = names[i].charAt(0).toLowerCase();
  if (firstLetter === 'j') {
    byeSpeaker.speak(names[i]);
  } else {
    helloSpeaker.speak(names[i]);
  }
}

})();
