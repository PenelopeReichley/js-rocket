var timer = null;
var countdownNumber = 10;

var changeState = function (state) {
	document.body.className = 'body-state'+ state;
	clearInterval(timer);
	countdownNumber = 10;
	document.getElementById('countdown').innerHTML = countdownNumber;

	// countdown
	if (state == 2) {
		timer = setInterval(function () {
			countdownNumber = countdownNumber -1;
			document.getElementById('countdown').innerHTML = countdownNumber;
			
			if (countdownNumber > 4 && countdownNumber <= 7) {
				// SMART
				document.getElementById('smart').className = 'smart show';
			} else{
				document.getElementById('smart').className = 'smart';
			}

			if (countdownNumber > 1 && countdownNumber <= 4) {
				// BYE LOSERS
				document.getElementById('bye-losers').className = 'bye-losers show';
			} else{
				document.getElementById('bye-losers').className = 'bye-losers';
			}

			if (countdownNumber <= 0) {
				changeState(3)
			};
		}, 500);
	} else if (state == 3) {
		var success = setTimeout(function (){
				var randomNumber = Math.round(Math.random()*10);
		
				console.log('randomNumber:', randomNumber)

				// success
				if (randomNumber > 4) {
					changeState(4);

				} else {
					changeState(5); // failure
				}
		}, 2000);		
	};
}