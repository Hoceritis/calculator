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


mainBody.append(one,two,three,addButton,four,five,six,subtractButton,seven,eight,nine,divideButton,equal,clear,zero,equal,multiplyButton)


let displayContent = document.createElement('div')
displayContent.setAttribute('id','displayContent')

displayCalculator.append(displayContent)

let number1 = '';
let number2 = '';
let operator = '';
let displayContentValue = "";

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

let buttons = document.querySelectorAll('.button')

buttons.forEach(function(item){
    item.addEventListener('click', e => {
        let clickedElement = e.target.textContent
        displayContentValue += clickedElement;
        displayContent.textContent = displayContentValue;

        if (clickedElement === '+'|| clickedElement === '-' || clickedElement === '*' || clickedElement === '/')
          {
            number1 = parseFloat(displayContentValue)
            operator = clickedElement
            displayContentValue = "";
            console.log('this is number1 :', number1)
            console.log(operator)
          }

        if (number1 !== '' && !isNaN(parseFloat(clickedElement))) {
          number2 += clickedElement; // Append clickedElement to number2
          console.log('this is number2 :', number2)
        }

        if(clickedElement === '=' && number1 !== '' && number2 !== ''){
            let result;
            result = operate(number1, operator, number2)
            displayContent.textContent = result
            console.log(result)
        }

      })
})

// idea for storing the values
// first variable store the first number (when a click on operator is registered you stop)
// second variable take the operator
// third variable is being populated when the operator variable return 'true'
