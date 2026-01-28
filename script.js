const container = document.querySelector('#container');
const button = document.querySelector('#newGrid');
button.addEventListener("click", () => {
        let newRows = prompt("How Many Rows?");
        let newColumns = prompt("How Many Columns");
        let parsedRow = Number(newRows);
        let parsedColumns = Number(newColumns);
        if ((parsedRow < 100)&&(parsedColumns < 100)) {
            createGrid(parsedRow, parsedColumns);
        };
});


function createGrid (rows, columns) {
    const container = document.querySelector('#container');
    container.style.setProperty('--columns', columns);
    const rowsColumns= (rows * columns);
    for (let i = 0; i <= (rowsColumns) - 1 ; i ++) {
        const sketchBox = document.createElement('div');
        sketchBox.classList.add("sketchBox");
        sketchBox.addEventListener('mouseenter', () => {
            sketchBox.classList.add("draw");

        })
        container.appendChild(sketchBox);
    }
}


