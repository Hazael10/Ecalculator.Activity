const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

buttons.forEach((item) => {
  item.onclick = () => {
    if (item.id == "clear") {
      display.innerText = "";
    } else if (item.id == "backspace") {
      let string = display.innerText.toString();
      display.innerText = string.substr(0, string.length - 1);
    } else if (display.innerText != "" && item.id == "equal") {
      display.innerText = eval(display.innerText);
    } else if (display.innerText == "" && item.id == "equal") {
      display.innerText = "Enter a number!";
      setTimeout(() => (display.innerText = ""), 2000);
    } else {
      display.innerText += item.id;
    }
  };
});

const themeToggleBtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");
const toggleIcon = document.querySelector(".toggler-icon");
themeToggleBtn.onclick = () => {
  calculator.classList.toggle("dark");
  themeToggleBtn.classList.toggle("active");
};
// let answer;
//       const firstNum = prompt("Enter the first number.");
//       const secondNum = prompt("Enter the second number.");
//       const operator = prompt("Enter operator for calculation.");

//       if (operator === "+") {
//         add();
//       } else if (operator === "-") {
//         subtract();
//       } else if (operator === "*") {
//         multiply();
//       } else if (operator === "/") {
//         divide();
//       } else {
//         alert("Incorrect number! Please try again.");
//       }

//       function add() {
//         answer = Number(firstNum) + Number(secondNum);
//         alert("The result is:" + answer);
//       }
//       function subtract() {
//         answer = Number(firstNum) - Number(secondNum);
//         alert("The result is:" + answer);
//       }
//       function multiply() {
//         answer = Number(firstNum) * Number(secondNum);
//         alert("The result is:" + answer);
//       }
//       function divide() {
//         answer = Number(firstNum) / Number(secondNum);
//         alert("The result is:" + answer);
//       }
