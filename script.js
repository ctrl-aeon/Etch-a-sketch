const container = document.querySelector('.container');
const containerWidth = container.getBoundingClientRect().width;
const containerHeight = container.getBoundingClientRect().height;
let reset = document.querySelector('.reset');
let resize = document.querySelector('.resize');

reset.addEventListener('click', () => resetGrid() );
resize.addEventListener('click', () => resizeGrid() )

function defaultGrid() {
    resizeGrid(16);
}

function resetGrid() {
    resizeGrid(squarePerGrid)
}

function resizeGrid(squarePerGrid) {
    container.innerHTML = '';
    if (squarePerGrid === undefined) {
        squarePerGrid = Number(prompt('Enter the number of squares per side for the new grid.', 16));
    }
    
    for (i = 0; i < squarePerGrid ** 2; i++) {
        cell = document.createElement('div');
        cell.classList.add('cell');
        cell.style.width = `${containerWidth / squarePerGrid}px`;
        cell.style.height = `${containerHeight / squarePerGrid}px`;

        container.append(cell);
    }
}

defaultGrid();