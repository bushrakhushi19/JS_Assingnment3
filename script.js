//  practice question 5.1

const maxValue = 5;

const solution = Math.floor(Math.random() * maxValue) + 1;

let isCorrect = false;

while (!isCorrect) {

    let userGuess = prompt(`Enter a number between 1 and ${maxValue}:`);
    userGuess = parseInt(userGuess); 
    
    if (userGuess === solution) {
        isCorrect = true;
        alert('Congratulations! You guessed the correct number.');
    } else if (userGuess < solution) {
        alert('Too low. Try again!');
    } else if (userGuess > solution) {
        alert('Too high. Try again!');
    }
}

// PRACTICE QUESTION 5.2

let counter = 0;

const step = 10; 

do {
    console.log(`Counter: ${counter}`);
    counter += step; 
} while (counter < 100);

if (counter >= 100) {
    console.log(`Counter: ${counter}`);
}

// PRACTICE QUESTION 5.3

const myWork = [];

for (let i = 1; i <= 10; i++) {
    const status = i % 2 === 0 ? true : false; 
    
    
    const lesson = {
        name: `Lesson ${i}`,
        status: status
    };

    myWork.push(lesson);
}

console.log(myWork);

// PRACTICE QUESTION 5.4

const myTable = [];

const numRows = 5;
const numColumns = 3;

let countar = 0;

for (let i = 0; i < numRows; i++) {

    const tempTable = [];

    for (let j = 0; j < numColumns; j++) {
       
        counter++;

        tempTable.push(countar);
    }

    myTable.push(tempTable);
}

console.table(myTable);

// PRACTICE QUESTION 5.5


const grid = [];

const numCells = 64;

let number = 0;

let row = [];

for (let i = 0; i <= numCells; i++) {
   
    if (counter % 8 === 0) {
      
        if (row !== undefined && row.length > 0) {
            grid.push(row);
        }
   
        row = [];
    }

    number++;

    row.push(number);

    if (counter === 8) {
        grid.push(row);
    }
}

console.log(grid);

// PRACTICE QUESTION 5.6

const myArray = [];

for (let i = 0; i < 10; i++) {
    myArray.push(i);
}

console.log(myArray);

for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}

for (const value of myArray) {
    console.log(value);
}

// PRACTICE QUETSION 5.7

const myObject = {
    item1: 'apple',
    item2: 'banana',
    item3: 'orange'
};


for (const key in myObject) {
    console.log(`Property: ${key}, Value: ${myObject[key]}`);
}

const my_Array = ['apple', 'banana', 'orange'];

for (let i = 0; i < my_Array.length; i++) {
    console.log(`Value at index ${i}: ${my_Array[i]}`);
}
// PRACTICE QUESTION 5.8

`continue`

let outputString = '';


const skipNumber = 5; 

for (let i = 1; i <= 10; i++) {

    if (i === skipNumber) {
      
        continue;
    }

    outputString += i.toString();
}

console.log(outputString);

`break`

let outputString2 = '';

const stopNumber = 5; 

for (let i = 1; i <= 10; i++) {
 
    if (i === stopNumber) {
    
        break;
    }


    outputString2 += i.toString();
}

console.log(outputString2);

// EXERCISE 6
// FUNCTIONS

// PRACTICE QUESTION 6.1

function addNumbers(a, b) {
    return a + b;
  }
  
  let firstNumber = 5;
  let secondNumber = 10;
  
  console.log("Adding", firstNumber, "and", secondNumber, ":", addNumbers(firstNumber, secondNumber));
  
  let thirdNumber = 15;
  let fourthNumber = 20;
  
  console.log("Adding", thirdNumber, "and", fourthNumber, ":", addNumbers(thirdNumber, fourthNumber));
  
// PRACTICE QUESTION 6.2

const descriptors = ["awesome", "fantastic", "amazing", "incredible", "superb", "marvelous"];

function describeName() {
  const userName = prompt("Please enter a name:");

  if (userName) {

    const randomIndex = Math.floor(Math.random() * descriptors.length);

    const randomDescriptor = descriptors[randomIndex];

    console.log(`The name '${userName}' is ${randomDescriptor}!`);
  } else {
    console.log("No name entered. Please try again.");
  }
}

describeName();

// PRACTICE QUESTION 6.3

let num1 = 10;
let num2 = 5;

let operator = "+";

function calculate(value1, value2, operation = "add") {
  if (operation === "add") {
    return value1 + value2;
  } else if (operation === "subtract") {
    return value1 - value2;
  } else {
    return "Invalid operation. Please use 'add' or 'subtract'. Defaulting to addition.";
  }
}

console.log(`Result (${operator}):`, calculate(num1, num2, operator));

operator = "-";

console.log(`Result (${operator}):`, calculate(num1, num2, operator));

// PRACTICE QUESTION 6.4

let resultsArray = [];


for (let i = 0; i < 10; i++) {
  
  let value1 = i * 5;
  let value2 = i * i;

  function addValues(a, b) {
    return a + b;
  }

  let response = addValues(value1, value2);

  resultsArray.push(response);
}

console.log(resultsArray);

// PRACTICE QUESTION 6.5

let value = "1000";

(function() {
  let value = "Local Value from IIFE";
  console.log("Local value inside IIFE:", value);
})();

let result = (function() {
  let value = "Another Local Value from IIFE Expression";
  return value;
})();

console.log("Result from IIFE Expression with variable name:", result, value);

(function(newValue) {
  value = newValue;
  console.log("Value changed via anonymous function:", value);
})("New Value");

console.log("Final value:", value);

// PRACTICE QUESTION 6.6

function calculateFactorial(number) {
    if (number === 0 || number === 1) {
      return 1;
    } else {
      console.log("Calculating factorial for", number);
      return number * calculateFactorial(number - 1);
    }
  }
  

  const numberToCalculate = 5; 
  const factorialResult = calculateFactorial(numberToCalculate);
  
  console.log(`Factorial of ${numberToCalculate} is:`, factorialResult);
  
//   PRACTICE QUESTION 6.7

function countdown(start) {
    console.log(start); 
    
    if (start < 1) {
      return; 
    } else {
      countdown(start - 1);
    }
  }
  
  countdown(10);

//   PRACTICE QUESTION 6.8

let functionExpression = function(arg) {
    console.log("Function Expression:", arg);
  };
  
  functionExpression("Hello from function expression");
  
  function normalFunction(arg) {
    console.log("Normal Function Declaration:", arg);
  }
  
  normalFunction("Hello from normal function declaration");
  
  
  







