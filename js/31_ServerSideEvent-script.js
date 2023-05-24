function yapilandir(){
	if(typeof(EventSource) !== "undefined") {
		var kaynak = new EventSource("../php/31_ServerSideEvent.php");
		kaynak.onmessage = function(event) {
			document.getElementById("goster").innerHTML += event.data + "<br>";
		};
	} else {
		document.getElementById("goster").innerHTML = "...";
	}
}