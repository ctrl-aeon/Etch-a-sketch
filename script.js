const container = document.querySelector('.container');

let reset = document.querySelector('.reset');
let resize = document.querySelector('.resize');

reset.addEventListener('click', () => resetGrid() );
resize.addEventListener('click', () => resizeGrid() )

function defaultGrid() {
    resizeGrid(16);
}

function resizeGrid(squarePerGrid) {
    container.innerHTML = '';
    if (squarePerGrid === undefined) {
        squarePerGrid = Number(prompt('Enter the number of squares per side for the new grid.', 16));
    }
    const fragment = document.createDocumentFragment();
    for (i = 0; i < squarePerGrid ** 2; i++) {

        let cell = document.createElement('div');
        cell.classList.add('cell');

        cell.style.width = `${100 / squarePerGrid}%`;
        cell.style.height = `${100 / squarePerGrid}%`;

// hover 
        // cell.addEventListener('mouseenter', () => cell.style.backgroundColor = getRandomColor() );

        let isDrawing = false;

        document.addEventListener('mousedown', () => isDrawing = true);
        document.addEventListener('mouseup', () => isDrawing = false);

        cell.addEventListener('mouseenter', (e) => {
            if (isDrawing) {
                e.target.style.backgroundColor = getRandomColor();
            }
        });

        fragment.append(cell);
    }
    container.append(fragment);

// // bubbling
//     container.addEventListener('mouseover', (e) => {
//             if (e.target.classList.contains('cell') ) {
//                 e.target.style.backgroundColor = getRandomColor();
//             }
//         })
}

defaultGrid()

function resetGrid() {
    document.querySelectorAll('.cell').forEach(cell => {
        cell.style.backgroundColor = 'white';
    });
}


function getRandomColor() {

    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
}