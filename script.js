const container = document.querySelector('#container');

function createGrid (rows, columns) {
    const container = document.querySelector('#container');
    const allBoxes = (rows * columns);
    for (let i = 0; i <= allBoxes ; i ++) {
        const sketchBox = document.createElement('div');
        sketchBox.classList.add("sketchBox");
        container.appendChild(sketchBox);
    }
}
createGrid(16,16);