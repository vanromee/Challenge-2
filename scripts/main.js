
showClock();
document.getElementById("call").style.visibility = "hidden";

function showClock() {
	var clock = document.getElementById("clock");

	var date = new Date();

	var hours = date.getHours();
	var minutes = date.getMinutes();
	var seconds = date.getSeconds();

	clock.innerHTML = addLeadingZero(hours) + ':' + addLeadingZero(minutes) + ':' + addLeadingZero(seconds);

setInterval(showClock, 1000)
}

function addLeadingZero(number){
	if(number < 10){
		number = "0" + number;
	}
	return number;
}

function showDate(){
	var today = new Date();

	var dddd = today.getDay();
	var month = today.getMonth();

	date.innerHTML = day + month;
}

function changeTheme(){
	document.body.style.background = "#253D5B";
	document.body.style.color = "#FFFFFF";
	document.getElementById("toggle").src = "images/day.png";
	document.getElementById("planet").src = "images/moon.png";
	document.getElementById("toDo").style.backgroundColor = "#434343";
	document.getElementById("box").style.backgroundColor = "#000000";
	document.getElementById("circle").style.borderColor = "#FFFFFF";
	document.getElementById("line").style.borderColor = "#FFFFFF";
}


function incomingCall(){
	console.log("working phone");
	document.getElementById("call").style.visibility = "visible";

}

setInterval(incomingCall, 30000)