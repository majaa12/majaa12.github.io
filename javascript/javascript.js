
function sat(){
	var datum = new Date();
	var h = datum.getHours();
	var m = datum.getMinutes();
	var s = datum.getSeconds();

	var vreme = h + ":" + m + ":" +s;

	document.getElementById("divZaSat").innerHTML = '';
	document.getElementById("divZaSat").innerHTML = vreme;

}

function dugme(){
	setInterval(sat,1000);
}
