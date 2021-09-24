let precision = 10000;

// MATHEMATICS

function add(a, b) {
  let c = parseInt(a);
  let d = parseInt(b);
  
  return(Math.round((c + d)* precision)/precision);
};

function substract(a, b) {
  let c = parseInt(a);
  let d = parseInt(b);
  
  return(Math.round((c - d)* precision)/precision);
};

function multiply(a, b) {
  let c = parseInt(a);
  let d = parseInt(b);
  
  return(Math.round((c * d)* precision)/precision);
};

function divide(a, b) {
  let c = parseInt(a);
  let d = parseInt(b);
  
  return(Math.round((c / d)* precision)/precision);
};

// This is the function that do the calculation

function operate(operator, a, b) {
  switch (operator) {
    case '+':
      return (add(a, b));
      break;
    case '-':
      return (substract(a, b));
      break;
    case 'x':
      return (multiply(a, b));
      break;
    case '/':
      return (divide(a, b));
      break;
  }
};

// These are the variables used to do the calculation

let operator="", firstOperand=0, secondOperand=0;
let selectOperand=0;

// Refresh the display

function display(num1,num2,op) {
  const thirdLine = document.querySelector('.thirdLine');
  const secondLine = document.querySelector('.secondLine');
  const firstLine = document.querySelector('.firstLine');

  thirdLine.textContent = num2;
  if(op){
    secondLine.textContent = op;
    firstLine.textContent = num1;
  }
  else{
    secondLine.textContent  = "";
    firstLine.textContent = "";
  }
};
display(secondOperand, firstOperand, operator); //init the display

// When a number is clicked

const numbers = document.querySelectorAll('.number');
numbers.forEach(number => {
  number.addEventListener('click', function (e) {
    if(selectOperand==0){
      if(!firstOperand){
        firstOperand=this.textContent;
      }
      else{
        firstOperand+=this.textContent;
      }
      display(secondOperand, firstOperand, operator);
    }
    else{
      if(!secondOperand){
        secondOperand=this.textContent;
      }
      else{
        secondOperand+=this.textContent;
      }
      display(firstOperand, secondOperand, operator);
    }
  });
});

// When an operator is clicked

const operators = document.querySelectorAll('.operator');
operators.forEach(operation => {
  operation.addEventListener('click', function (e) {
    if(selectOperand==0 || secondOperand==0){
      selectOperand=1;
      operator = this.textContent;
    }
    else {
      firstOperand=operate(operator,firstOperand,secondOperand);
      operator = this.textContent;
      secondOperand=0;
    }
    display(firstOperand, secondOperand, operator);
    if(firstOperand == Infinity || firstOperand == -Infinity){
      operator="";
      firstOperand=0;
      secondOperand=0;
      selectOperand=0;
    }
  })
});

// When = is clicked

const enter = document.querySelector('#equal');
enter.addEventListener('click', function (e) {
  if(selectOperand==1){
    firstOperand=operate(operator,firstOperand,secondOperand);
    secondOperand=0;
    display(firstOperand, secondOperand, operator);
    if(firstOperand == Infinity || firstOperand == -Infinity){
      operator="";
      firstOperand=0;
      secondOperand=0;
      selectOperand=0;
    }
  }
})

// When clear is clicked

const clear = document.querySelector('#clear');
clear.addEventListener('click',function(e){
  operator="";
  firstOperand=0;
  secondOperand=0;
  selectOperand=0;
  display(secondOperand, firstOperand, operator);
})

// When delete is clicked

const backspace = document.querySelector('#delete');
backspace.addEventListener('click',function(e){
  if(selectOperand == 0 && firstOperand !== 0){
    firstOperand = firstOperand.slice(0,-1);
    display(secondOperand, firstOperand, operator);
  }
  else if(secondOperand !== 0){
    secondOperand = secondOperand.slice(0,-1);
    display(firstOperand, secondOperand, operator);
  }
})