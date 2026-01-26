const container = document.querySelector('#container');

function createGrid (rows, columns) {
    const container = document.querySelector('#container');
    container.style.setProperty('--columns', columns);
    const rowsColumns= (rows * columns);
    for (let i = 0; i <= (rowsColumns) - 1 ; i ++) {
        const sketchBox = document.createElement('div');
        sketchBox.classList.add("sketchBox");
       // sketchBox.style.width = `calc(${boxWidth} - 2px)`; //
        container.appendChild(sketchBox);
    }
}
createGrid(4,4);