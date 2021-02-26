$(document).ready(function() {

	function displayTime() {

		var currentTime = new Date();

		var hours = currentTime.getHours();

		if (hours < 10) {

			hours = "0" + hours;
		}

		var minutes = currentTime.getMinutes();

		if (minutes < 10) {

			minutes = "0" + minutes;

		}

		var seconds = currentTime.getSeconds();

		if (seconds < 10) {

			seconds = "0" + seconds;
		}

		var clockDiv = document.getElementById('clock');

		setInterval(displayTime, 1000);

		clockDiv.innerText = hours + ":" + minutes + ":" + seconds;

		var meridiem = "AM";

		if (hours > 12) {

			hours = hours - 12;

			meridiem = "PM";

		}

		if (hours === 0) {

			hours = 12

		}

		clockDiv.innerText = hours + ":" + minutes + ":" + seconds + " " + meridiem;

	}

	displayTime();
	
});