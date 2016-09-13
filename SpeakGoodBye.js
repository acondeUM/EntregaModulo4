// Goodby Script
(function(window){

	var speakWord = "Good Bye";
	var byeSpeaker = new Object();

	byeSpeaker.speak = function(name,opc) {
  		console.log(speakWord + " " + name);
	
		if (opc != null || opc != undefined){
			var nodo = document.getElementById("parrafo");
			nodo.replaceChild(document.createTextNode(speakWord+" "+name),nodo.childNodes[0]);
		}
	};
	window.byeSpeaker = byeSpeaker;
})(window);
