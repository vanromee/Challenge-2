
function showClock() {
	var clock = document.getElementById("clock");

	var date = new Date();

	var hours = date.getHours();
	var minutes = date.getMinutes();
	var seconds = date.getSeconds();

	clock.innerHTML = addLeadingZero(hours) + ':' + addLeadingZero(minutes) + ':' + addLeadingZero(seconds);

}

setInterval(showClock, 1000)


function addLeadingZero(number){
	if(number < 10){
		number = "0" + number;
	}
	return number;
}


function changeTheme(){
	document.body.style.background = "#253D5B";
	document.getElementById("toggle").src = "images/day.png";
	document.getElementById("planet").src = "images/moon.png";
	document.body.style.color = "#FFFFFF";
}