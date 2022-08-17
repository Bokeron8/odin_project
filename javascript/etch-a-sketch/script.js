const gridElement = document.getElementById('grid');
const resetBtn = document.getElementById('reset-grid-btn');
let gridSizeElement = document.getElementById('grid-size');
resetBtn.addEventListener('click', ()=>createGrid());
createGrid();
function createGrid(){
    let row = Math.min(gridSizeElement.value, 100);
    gridElement.style.setProperty('--grid-rows', row);
    gridElement.style.setProperty('--grid-cols', row);
    gridElement.innerHTML = '';
    for (let i = 0; i<(row*row); i++){
        let block = document.createElement('div');
        block.classList.add('block');
        addChangeColor(block);
        gridElement.appendChild(block);
    }
}
function addChangeColor(element){
    element.addEventListener('mouseenter', (event) => {
        let block = event.target;
        opacity = parseFloat(window.getComputedStyle(block,null).getPropertyValue('opacity'));
        block.style.opacity = 0.1+opacity;
        block.style.backgroundColor = 'rgb(0, 0, 0)';
    });
}
