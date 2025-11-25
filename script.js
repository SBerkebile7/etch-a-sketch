const container = document.querySelector(".container");
const size = parseInt(window.getComputedStyle(container).width, 10);

const resetButton = document.querySelector(".resetButton");
resetButton.addEventListener("click", gridReset);

function createGrid(gridCount = 16) {
    for(let rowsColumns = 0; rowsColumns < gridCount ** 2; rowsColumns++) {
        let gridCells = document.createElement("div");
        Object.assign(gridCells.style, {
            height : `${(size / gridCount) - 2}px`,
            width : `${(size / gridCount) - 2}px`
        });
        gridCells.classList.add("cellBox");
        gridCells.addEventListener('mouseover', cellColorChange);
        container.appendChild(gridCells);
    }
}

function gridReset(e) {
    let newGridCount = +prompt("How many cells would you like per row & column? Please enter a number less than 100.", 16)
    while(container.firstChild) {
        container.removeChild(container.lastChild);
    };
    if(newGridCount <= 100) {
        createGrid(newGridCount);
    } else {
        gridReset();
    }
}

function cellColorChange(e) {
    Object.assign(e.target.style, {
        backgroundColor : 'black',
        opacity: 0.25
    });
};

window.onload = function() {
    createGrid();
};