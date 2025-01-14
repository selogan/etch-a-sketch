const gridContainer = document.querySelector("#grid-container");
gridContainer.addEventListener("mouseover", changeColor);
const gridHeight = gridContainer.offsetHeight;
const gridWidth = gridContainer.offsetWidth;

function createGrid(gridSize) {
    for (let i = 0; i < gridSize * gridSize; i++) {
        const grid = document.createElement("div");
        grid.setAttribute("class", "grid");
        grid.style.height = gridHeight / gridSize + "px";
        grid.style.width = gridWidth / gridSize + "px";
        gridContainer.appendChild(grid);
    }
}

const resetBtn = document.querySelector("#reset");
resetBtn.addEventListener("click", resetGrid);

function resetGrid() {
    const grids = document.querySelectorAll("#grid");
    grids.forEach(grid => grid.style.backgroundColor = "white");
}

const gridSizeBtn = document.querySelector("#grid-size");
gridSizeBtn.addEventListener("click", changeGridSize);

function changeGridSize() {
    let gridSize;
    do {
        gridSize = prompt("Please enter size of grid (1-100)");
    } while (gridSize < 1 || gridSize > 100);

    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.lastChild);
    }
    createGrid(gridSize);
}

function changeColor(e) {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    e.target.style.backgroundColor = `rgb(${r},${g},${b})`;
    let opacity = e.target.style.opacity;
    if (Number(opacity) < 1) {
        e.target.style.opacity = Number(opacity) + 0.1;
    };
}

createGrid(16);