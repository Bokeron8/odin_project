const displayH1Element = document.querySelector('.display').children[0]
const operationBtns = Array.from(document.getElementsByClassName('operation'));
const numberBtns = Array.from(document.getElementsByClassName('number'));
const clearDisplayBtn = document.getElementById('ac-btn');
const percentageBtn = document.querySelector('.percentage-btn');
const plusMinusBtn = document.querySelector('.plus-minus-btn');
const dotBtn = document.querySelector('.dot-btn');
//Setting values
let oldValue;
let currentValue = '0';
let currentOperation;
let result;
//Percentage btn
percentageBtn.addEventListener('click', function(){
    displayH1Element.textContent = parseFloat(displayH1Element.textContent) / 100;
    displayValue(displayH1Element.textContent);
});
//Plus-minus btn
plusMinusBtn.addEventListener('click', ()=>{
    displayH1Element.textContent = parseFloat(displayH1Element.textContent)*-1;
    displayValue(displayH1Element.textContent);
});
//Dot btn
dotBtn.addEventListener('click', ()=>{
    if (!(displayH1Element.textContent.includes('.'))){
        displayH1Element.textContent = displayH1Element.textContent+'.';
        displayValue(displayH1Element.textContent);
    }
});
//Operations event listener
operationBtns.forEach(btn =>{
    btn.addEventListener('click', ()=>operate(btn.textContent));
});
//Clear screen event listener
clearDisplayBtn.addEventListener('click', ()=>resetCalculator());
//Numbers button event listener
numberBtns.forEach(btn => {
    btn.addEventListener('click', ()=>addNumber(btn.textContent));
});
//Click number button
function addNumber(number){
    if (currentOperation != undefined && currentValue != '0'){
        displayH1Element.textContent = number;
        currentValue = 0;
    }
    else{
        displayH1Element.textContent == '0'? displayH1Element.textContent = number: displayH1Element.textContent += number; 
    }
    displayValue(displayH1Element.textContent);
}
//Display number
function displayValue(value){
    value = value.toString().slice(0, 9)
    displayH1Element.textContent = value
}

//Reset calculator for AC button
function resetCalculator(){
    currentValue = '';
    oldValue = undefined;
    currentOperation = undefined;
    result = undefined;
    displayValue(0);
}
//Operation functions
function operate(operation){
    
    if (currentOperation == undefined && operation == '='){
        return 1;
    }
    if (oldValue != undefined && currentOperation != undefined){
        currentValue = displayH1Element.textContent;
        switch (operation){
            case '+':
                console.log('+')
                oldValue = parseFloat(oldValue) + parseFloat(currentValue);
                displayValue(oldValue);
                break
            case '-':
                console.log('-')
                oldValue = parseFloat(oldValue) - parseFloat(currentValue);
                displayValue(oldValue);
                break
            case '/':
                console.log('/')
                oldValue = parseFloat(oldValue) / parseFloat(currentValue);
                currentValue = '';
                displayValue(oldValue);
                break
            case '*':
                console.log('*')
                oldValue = parseFloat(oldValue) * parseFloat(currentValue);
                currentValue = '';
                displayValue(oldValue);
                break
            case '=':
                if (currentOperation != '='){
                    console.log('=')
                    operate(currentOperation);
                    currentOperation = undefined;
                }
                break
        }
    }
    else{
        currentOperation = operation;
        oldValue = displayH1Element.textContent;
        displayValue(0);
    }
}
