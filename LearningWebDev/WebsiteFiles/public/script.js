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
		document.getElementById("square1"),
		document.getElementById("square2"),
		document.getElementById("square3"),
		document.getElementById("square4"),
		document.getElementById("square5"),
		document.getElementById("square6"),
		document.getElementById("square7"),
		document.getElementById("square8"),
		document.getElementById("square9"),
];
	for (let i of ["X", "O"]) {
		for (let x of [0, 1, 2]) {
			if (board[0 + (x * 3)] === i && board[1 + (x * 3)] === i && board[2 + (x * 3)] === i) {
				return i;
			}
			if (board[0 + x] === i && board[3 + x] === i && board[6] === i) {
				return i;
			}
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
	}
}

let player = getStartPlayer();