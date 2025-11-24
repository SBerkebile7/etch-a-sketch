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
        //gridCells.addEventListener('mouseover', changeCellColor);
        container.appendChild(gridCells);
    }
}

function gridReset(e) {
    let newGridCount = +prompt("How many cells would you like per row & column?", 16)
    while(container.firstChild) {
        container.removeChild(container.lastChild);
    };
    createGrid(newGridCount);
}

window.onload = function() {
    createGrid();
};

/*
for( let i = 0; i < 257; i++){
    const divBox = document.createElement('div');
    container.appendChild(divBox);
};
*/