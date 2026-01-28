const container = document.querySelector('#container');
const button = document.querySelector('#newGrid');
    button.addEventListener("click", () => {
        let rowCol = prompt("How Many Squares Per Side?");
        let numbrRowCol = Number(rowCol);
        if (rowCol< 100) {
            createGrid(numbrRowCol, numbrRowCol);
        };
});
function refreshPage () {
    window.location.reload();
}

function createGrid (rows, columns) {
    const container = document.querySelector('#container');
    container.innerHTML = '';
    container.style.setProperty('--columns', columns);
    const rowsColumns= (rows * columns);
    for (let i = 0; i <= (rowsColumns) - 1 ; i ++) {
        const sketchBox = document.createElement('div');
        sketchBox.classList.add("sketchBox");
        sketchBox.addEventListener('mouseenter', () => {
            sketchBox.classList.add("draw");

        });
        container.appendChild(sketchBox);
    };
};

const randomColor = (() => {
    "use strict";
    const randomInt = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    return () => {
        var h = randomInt(0, 360);
        var s = randomInt(42, 98); 
        var l = randomInt(40, 90);
        return `hsl(${h},${s},${l}%)`;
    };
})();

