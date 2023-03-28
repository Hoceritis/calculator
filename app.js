const mainDiv = document.createElement('div');
mainDiv.setAttribute('id','main')

document.body.appendChild(mainDiv)

let title = document.createElement('div');
title.setAttribute('id','title')

mainDiv.appendChild(title)

title.textContent =" JS calculator "


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

