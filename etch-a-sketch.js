const container = document.getElementById('container');
const button = document.getElementById('reset');
button.addEventListener('click', () => {
	rebuildGrid(prompt("Enter grid size (<=100):"));
});
rebuildGrid(16);

function rebuildGrid (size) {
	let gridSize = Math.min(parseInt(size), 100);
	container.replaceChildren();
	container.style.gridTemplateColumns = `repeat(${gridSize}, ${100/gridSize}%)`;
	container.style.gridTemplateRows = `repeat(${gridSize}, ${100/gridSize}%)`;
	for (let i = 0; i < gridSize; i++) {
		for (let j = 0; j < gridSize; j++) {
			const div = document.createElement('div');
			div.style.filter = 'brightness(100%)';
			div.addEventListener('mouseover', assignRandomColor);
			container.appendChild(div);
		}
	}
}

function randomNumber (maxNumber) {
	return Math.floor(Math.random() * maxNumber);
}

function assignRandomColor () {
	let r = randomNumber(255);
	let g = randomNumber(255);
	let b = randomNumber(255);
	if (this.style.backgroundColor != '') {
		let filter = this.style.filter;
		let filterNum = parseInt(filter.replace(/[^0-9]/g, ''));
		let filterNew = Math.max(filterNum-10, 0);
		this.style.filter = `brightness(${filterNew}%)`;
	}
	this.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

