function getStartPlayer() {
	if (Math.floor(Math.random() * 2) === 1) {
		return "X";
	}
	return "O";
}

function updatePlayer(current_player) {
	if (current_player === "X") {
		return "O";
	}
	return "X";
}

function checkForWinner() {
	var board = [
		document.getElementById("square1").innerHTML,
		document.getElementById("square2").innerHTML,
		document.getElementById("square3").innerHTML,
		document.getElementById("square4").innerHTML,
		document.getElementById("square5").innerHTML,
		document.getElementById("square6").innerHTML,
		document.getElementById("square7").innerHTML,
		document.getElementById("square8").innerHTML,
		document.getElementById("square9").innerHTML
	];
	for (let i of ["X", "O"]) {
		for (let x of [0, 1, 2]) {
			if (board[0 + (x * 3)] === i && board[1 + (x * 3)] === i && board[2 + (x * 3)] === i) {
				return i;
			}
			if (board[0 + x] === i && board[3 + x] === i && board[6 + x] === i) {
				return i;
			}
		}
		if (board[0] === i && board[4] === i && board[8] === i) {
			return i;
		}
		if (board[2] === i && board[4] === i && board[6] === i) {
			return i;
		}
	}
	return false;
}
function updateSquare(id) {
	if (document.getElementById(id).style.color !== "white") {
		document.getElementById(id).innerHTML = player;
		player = updatePlayer(player);
		document.getElementById(id).style.color = "white";
		var winner = checkForWinner();
		console.log(winner);
		if (winner !== false) {
			document.getElementById("win_message").innerHTML = winner + " Wins!";
			if (isNaN(document.getElementById(winner.toLowerCase() + "_points").innerHTML[-1])) {
				document.getElementById(winner.toLowerCase() + "_points").innerHTML += "1";
			} else {
				var pointer = -2
				while (true) {
					if (isNaN(document.getElementById(winner.toLowerCase() + "_points").innerHTML[pointer])) {
						var number = Number(document.getElementById(winner.toLowerCase() + "_points").innerHTML.slice(pointer, -1));
						break;
					}
					pointer -= 1;
				}
				document.getElementById(winner.toLowerCase() + "_points").innerHTML = document.getElementById(winner.toLowerCase() + "_points").innerHTML.slice(pointer-1) + String(number + 1);
			}
			document.getElementById("square1").style.color = "black";
			document.getElementById("square1").innerHTML = "Q";
			document.getElementById("square2").style.color = "black";
			document.getElementById("square2").innerHTML = "Q";
			document.getElementById("square3").style.color = "black";
			document.getElementById("square3").innerHTML = "Q";
			document.getElementById("square4").style.color = "black";
			document.getElementById("square4").innerHTML = "Q";
			document.getElementById("square5").style.color = "black";
			document.getElementById("square5").innerHTML = "Q";
			document.getElementById("square6").style.color = "black";
			document.getElementById("square6").innerHTML = "Q";
			document.getElementById("square7").style.color = "black";
			document.getElementById("square7").innerHTML = "Q";
			document.getElementById("square8").style.color = "black";
			document.getElementById("square8").innerHTML = "Q";
			document.getElementById("square9").style.color = "black";
			document.getElementById("square9").innerHTML = "Q";
		}
	}
}

let player = getStartPlayer();