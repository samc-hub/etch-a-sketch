const container = document.querySelector('#container');
const button = document.querySelector('#newGrid');
    button.addEventListener("click", () => {
        let rowCol = prompt("How Many Squares Per Side?");
        let numbrRowCol = Number(rowCol);
        if (numbrRowCol < 100) {
            createGrid(numbrRowCol, numbrRowCol);
        } else {
            alert('Exceeded Limit of 100');
        }
});

const randomColor = (() => {
    "use strict";
    const randomInt = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    return () => {
        var h = randomInt(0, 360);
        var s = randomInt(42, 98); 
        var l = randomInt(40, 90);
        return `hsl(${h},${s}%,${l}%)`;
    };
})();



function createGrid (rows, columns) {
    container.innerHTML = '';
    container.style.setProperty('--columns', columns);
    const rowsColumns= (rows * columns);
    for (let i = 0; i <= (rowsColumns) - 1 ; i ++) {
        const sketchBox = document.createElement('div');
        sketchBox.classList.add("sketchBox");
        sketchBox.addEventListener('mouseenter', () => {
            sketchBox.style.backgroundColor = randomColor();
            let currentOpacity = sketchBox.style.opacity || 0;
            let newOpacity = Number(currentOpacity) + 0.1;
            newOpacity = Math.min(newOpacity, 1);
            sketchBox.style.opacity = newOpacity;

        });
        container.appendChild(sketchBox);
    };
    console.log('boxes:' , container.children.length);
};