const mainDiv = document.createElement('div');
mainDiv.setAttribute('id','main')

document.body.appendChild(mainDiv)

let title = document.createElement('div');
title.setAttribute('id','title')

mainDiv.appendChild(title)

title.textContent ="JS calculator"

let calculator = document.createElement('div')
calculator.setAttribute('id','calculator')
mainDiv.appendChild(calculator)

let displayCalculator = document.createElement('div')
displayCalculator.setAttribute('id','displayCalculator')

let mainBodyCalculator = document.createElement('div')
mainBodyCalculator.setAttribute('id','mainBody')

calculator.append(displayCalculator, mainBodyCalculator)

let one = document.createElement('div')
let two = document.createElement('div')
let three = document.createElement('div')
let four = document.createElement('div')
let five = document.createElement('div')
let six = document.createElement('div')
let seven = document.createElement('div')
let eight = document.createElement('div')
let nine = document.createElement('div')
let zero = document.createElement('div')
let addButton = document.createElement('div')
let subtractButton = document.createElement('div')
let divideButton = document.createElement('div')
let multiplyButton = document.createElement('div')
let clear = document.createElement('div')
let equal = document.createElement('div')
let period = document.createElement('div')

one.setAttribute('class','button')
two.setAttribute('class','button')
three.setAttribute('class','button')
four.setAttribute('class','button')
five.setAttribute('class','button')
six.setAttribute('class','button')
seven.setAttribute('class','button')
eight.setAttribute('class','button')
nine.setAttribute('class','button')
zero.setAttribute('class','button')
addButton.setAttribute('class','button')
subtractButton.setAttribute('class','button')
divideButton.setAttribute('class','button')
multiplyButton.setAttribute('class','button')
clear.setAttribute('class','button')
equal.setAttribute('class','button')
period.setAttribute('class','button')

one.textContent = 1;
two.textContent = 2;
three.textContent = 3;
four.textContent = 4;
five.textContent = 5;
six.textContent = 6;
seven.textContent = 7;
eight.textContent = 8;
nine.textContent = 9;
zero.textContent = 0;
addButton.textContent = '+';
subtractButton.textContent = '-';
divideButton.textContent = '/';
multiplyButton.textContent = '*'
clear.textContent = 'C';
equal.textContent = '=';
period.textContent ='.';


mainBody.append(one,two,three,addButton,four,five,six,subtractButton,seven,eight,nine,divideButton,equal,clear,period,zero,multiplyButton,equal)


let display = document.createElement('div')
display.setAttribute('id','display')
displayCalculator.append(display)

let number1 = '';
let number2 = '';
let currentOperator = '';

let displayContent = "";
display.textContent = displayContent;

let operatorList = ['+', '-', '*', '/']

let isStateNumber1 = true;
let bufferValue = '';

// functions to do base calculation

function add (number1, number2){
    let result = number1 + number2;
      return result
  } 

  function subtract (number1, number2){
    let result = number1 - number2;
      return result
  } 

  function multiply (number1, number2){
    let result = number1 * number2;
      return result
  } 

    function divide (number1, number2){
    let result = number1 / number2;
      return result
  } 

// function operate that adds number to calculus

  function operate (number1, operator, number2){

    number1 = parseInt(number1)
    number2 = parseInt(number2)

    if(operator === '+'){
        return add(number1, number2)
    } else if(operator === '-'){
        return subtract(number1, number2)
    } else if (operator === '/'){
        return divide(number1, number2)
    } else return multiply(number1, number2)
  }

// function to erase and reset calculus at the end of operations

  function erase (clickedElement){
    if(clickedElement ==='C'){
      bufferValue =''
      number1 = ''
      number2 = ''
      display.textContent = ''
    }
  }

  function reset() {
    number1 ='';
    number2 ='';
    operator ='';
    displayContent ='';
  }

  function isOperator (operator){

    operatorList.includes(operator)
    console.log("this is the operator :" + operator)

    return 
    
  }

function numberCheck(number){
  if (!isNaN(parseFloat(number))){
    bufferValue += number;
    display.textContent = bufferValue
    return bufferValue
  } else {
    console.log("You need a number")
  }
}

  function isResult(equalKey){
    let calculationResult =''
    if (equalKey === '=') {
      calculationResult = operate(number1, isOperator, number2)
    }
    console.log("this is the result :" + calculationResult)
    return calculationResult
  }

  function operatorCheck (operator){
    if(isStateNumber1){
      //store the 1st number
      //store the operator
      //change state = number2
      //???
      //profit
    } else {

    }
    // check the state + store the result in bufferValue
    // switch the state to false
    // else = number
  }



// Core function/iteration (?) that registers the hits on the calculator + process the logic above

let buttons = document.querySelectorAll('.button')

buttons.forEach(function(item){
    item.addEventListener('click', e => {
        
        let clickedElement = e.target.textContent
        console.log("clicked element " + clickedElement)

      numberCheck(clickedElement)
      operatorCheck (clickedElement)
      erase(clickedElement)

      })
})
