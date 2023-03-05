const priceOne = document.getElementById("one");
const summary = document.getElementById("summary");
const podil = document.getElementById("podil");

const inputNumber = document.querySelector(".input-number");
const inputRange = document.querySelector(".input-range");
const inputRangeP = document.querySelector(".input-range-p");

const buttonPlus = document.querySelector(".button-plus");
const buttonMines = document.querySelector(".button-mines");
const people = document.querySelector(".p-number");
let bills = 0;
let persent = 0;
let human = 0;

inputNumber.addEventListener("keyup", () => {
  bills = Number(inputNumber.value);
  console.log(bills);
  calculate();
});

inputRange.addEventListener("input", () => {
  inputRangeP.textContent = `${inputRange.value}%`;
  persent = Number(inputRange.value);
  calculate();
  console.log(persent);
});

buttonPlus.addEventListener("click", () => {
  if (people.textContent !== 9) {
    people.textContent = Number(people.textContent) + 1;
    human = Number(people.textContent);
    calculate();
  }
});

buttonMines.addEventListener("click", () => {
  if (people.textContent !== 1) {
    people.textContent = Number(people.textContent) - 1;
    human = Number(people.textContent);
    calculate();
  }
});

function calculate() {
  podil.textContent = bills / human;
  summary.textContent = bills + bills * (persent / 100);
  priceOne.textContent = Number(summary.textContent) / human;
}
