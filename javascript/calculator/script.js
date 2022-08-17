const displayH1Element = document.querySelector('.display').children[0]
const numberBtns = Array.from(document.getElementsByClassName('number'));
const clearDisplayBtn = document.getElementById('ac-btn');

let oldValue;
let currentValue;
//
clearDisplayBtn.addEventListener('click', ()=>clearScreen());
//
numberBtns.forEach(btn => {
    btn.addEventListener('click', ()=>addNumber(btn.innerHTML));
});
//Click number button
function addNumber(number){
    displayValue(number);
}
//Show it in the screen
function displayValue(value){
    if (displayH1Element.textContent == 0){
        displayH1Element.textContent = value.toString();
    }
    else{
        displayH1Element.textContent += value.toString();
    } 
}
//Clear screen
function clearScreen(){
    displayH1Element.textContent = 0;
}
//Operation functions
function sum(){

}
function subtract(){
    
}
function product(){

}
function division(){

}
function equal(){

}
