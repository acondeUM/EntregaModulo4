// Hello Script
(function(window){
	var speakWord = "Hello";

	var helloSpeaker = new Object();
	helloSpeaker.speak = function(name,opc) {
  	console.log(speakWord + " " + name);
	
	if (opc != null || opc != undefined){
		var nodo = document.getElementById("parrafo");
		nodo.replaceChild(document.createTextNode(speakWord+" "+name),nodo.childNodes[0]);
		}
	};

	window.helloSpeaker = helloSpeaker;
})(window);

