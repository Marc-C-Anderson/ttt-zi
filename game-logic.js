/* logic version of game */

const cells = [...document.querySelectorAll('.cell')];
const status = document.querySelector('#status');
const resetButton = document.querySelector('#reset');
const winningLines = [
	[0, 1, 2], [3, 4, 5], [6, 7, 8],
	[0, 3, 6], [1, 4, 7], [2, 5, 8],
	[0, 4, 8], [2, 4, 6]
];

let board = Array(9).fill('');
let currentPlayer = 'X';
let gameOver = false;

function getWinningLine() {
	return winningLines.find(([a, b, c]) =>
		board[a] && board[a] === board[b] && board[a] === board[c]
	);
}

function play(index) {
	if (gameOver || board[index]) return;

	board[index] = currentPlayer;
	cells[index].textContent = currentPlayer;
	cells[index].dataset.mark = currentPlayer;
	cells[index].disabled = true;
	cells[index].setAttribute('aria-label', `Row ${Math.floor(index / 3) + 1}, column ${index % 3 + 1}: ${currentPlayer}`);

	const winningLine = getWinningLine();
	if (winningLine) {
		gameOver = true;
		winningLine.forEach(cellIndex => cells[cellIndex].classList.add('winner'));
		status.textContent = `Player ${currentPlayer} wins!`;
		cells.forEach(cell => cell.disabled = true);
	} else if (board.every(Boolean)) {
		gameOver = true;
		status.textContent = "It's a draw!";
	} else {
		currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
		status.textContent = `Player ${currentPlayer}'s turn`;
	}
}

function resetGame() {
	board = Array(9).fill('');
	currentPlayer = 'X';
	gameOver = false;
	status.textContent = "Player X's turn";
	cells.forEach((cell, index) => {
		cell.textContent = '';
		cell.disabled = false;
		cell.classList.remove('winner');
		delete cell.dataset.mark;
		cell.setAttribute('aria-label', `Row ${Math.floor(index / 3) + 1}, column ${index % 3 + 1}`);
	});
	cells[0].focus();
}

cells.forEach((cell, index) => cell.addEventListener('click', () => play(index)));
resetButton.addEventListener('click', resetGame);
