class Board {
	constructor() {
		this.pos1 = "X";
		this.pos2 = "X";
		this.pos3 = "O";
		this.pos4 = "X";
		this.pos5 = "O";
		this.pos6 = "O";
		this.pos7 = "X";
		this.pos8 = "O";
		this.pos9 = "X";
		this.positions = [[this.pos1, this.pos2, this.pos3], [this.pos4, this.pos5, this.pos6], [this.pos7, this.pos8, this.pos9]];
	}
	printBoard() {
		for (let i of this.positions) {
			for (let j of i) {
				process.stdout.write(j + " ");
			}
			console.log()
		}
	}

	updatePos(pos, character) {
		if (pos === 1) {
			pos1 = character;
		}

	}
}

let board = new Board()
board.printBoard()