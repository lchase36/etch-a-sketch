const container = document.getElementById('container');
let gridSize = 16;

container.style.gridTemplateColumns = `repeat(${gridSize}, ${100/gridSize}%)`;
container.style.gridTemplateRows = `repeat(${gridSize}, ${100/gridSize}%)`;
for (let i = 0; i < gridSize; i++) {
	for (let j = 0; j < gridSize; j++) {
		const div = document.createElement('div');
		div.classList.add('square');
		div.addEventListener('mouseover', assignRandomColor);
		container.appendChild(div);
	}
}

function randomNumber (maxNumber) {
	return Math.floor(Math.random() * maxNumber);
}

function assignRandomColor () {
	let r = randomNumber(255);
	let g = randomNumber(255);
	let b = randomNumber(255);
	this.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

const divs = document.getElementsByClassName('square');