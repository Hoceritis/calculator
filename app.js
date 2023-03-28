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

let display = document.createElement('div')
display.setAttribute('id','display')

let mainBodyCalculator = document.createElement('div')
mainBodyCalculator.setAttribute('id','mainBody')

calculator.append(display, mainBodyCalculator)


let number1;
let number2;
let operator;


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


  function operate (number1, operator, number2){
    if(operator === '+'){
        return number1 + number2
    } else if(operator === '-'){
        return number1 - number2
    } else if (operator === '/'){
        return number1 / number2
    } else return number1 * number2
  }

