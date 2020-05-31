
function showClock() {
	var clock = document.getElementById("clock");

	var date = new Date();

	var hours = date.getHours();
	var minutes = date.getMinutes();
	var seconds = date.getSeconds();

	clock.innerHTML = hours + ':' + minutes + ':' + seconds;

}

setInterval(showClock, 1000)