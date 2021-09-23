// MATHEMATICS

function add(a, b) {
  let c=parseInt(a);
  let d=parseInt(b);
  return (c + d);
};

function substract(a, b) {
  let c=parseInt(a);
  let d=parseInt(b);
  return (a - b);
};

function multiply(a, b) {
  let c=parseInt(a);
  let d=parseInt(b);
  return (a * b);
};

function divide(a, b) {
  let c=parseInt(a);
  let d=parseInt(b);
  return (a / b);
};

// This is the function that do the calculation

function operate(operator, a, b) {
  switch (operator) {
    case "plus":
      return (add(a, b));
      break;
    case "minus":
      return (substract(a, b));
      break;
    case "multiply":
      return (multiply(a, b));
      break;
    case "divide":
      return (divide(a, b));
      break;
  }
};

// These are the variables in which are stocked the values to display

let displayFirstLine="", displaySecondLine="", displayThirdLine="";

// These are the variables used to do the calculation

let operatorSelection=0, firstOperand=0, secondOperand=0;

// Refresh the display
function display(){
  const thirdLine = document.querySelector('.thirdLine');
  const secondLine = document.querySelector('.secondLine');
  const firstLine = document.querySelector('.firstLine');

  thirdLine.textContent=displayThirdLine;
  secondLine.textContent=displaySecondLine;
  firstLine.textContent=displayFirstLine;
};

const numbers = document.querySelectorAll('.number');
numbers.forEach(number => {
  number.addEventListener('click',function(e){
    displayThirdLine+=this.textContent;
    display();
  });
});

const operators = document.querySelectorAll('.operator');
operators.forEach(operator => {
  operator.addEventListener('click',function(e){
    operatorSelection=this.id;
    displaySecondLine=displayThirdLine;
    firstOperand=displayThirdLine;
    displayThirdLine=this.textContent;
    display();
    displayFirstLine=displaySecondLine;
    displaySecondLine=displayThirdLine;
    displayThirdLine="";
  })
})

const enter = document.querySelector('#equal');
enter.addEventListener('click',function(e){
  displayFirstLine=displaySecondLine+displayThirdLine;
  displaySecondLine="=";
  secondOperand=displayThirdLine;
  displayThirdLine=operate(operatorSelection, firstOperand, secondOperand);
  display();
})