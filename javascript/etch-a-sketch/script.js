const gridElement = document.getElementById('grid');

function createGrid(row){
    gridElement.style.setProperty('--grid-rows', row);
    gridElement.style.setProperty('--grid-cols', row);
    for (let i = 0; i<(row*row); i++){
        let block = document.createElement('div')
        block.classList.add('block')
        gridElement.appendChild(block)
    }
}