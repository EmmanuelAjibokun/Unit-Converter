/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const input = document.getElementById("convert-input");
const inputValue = document.querySelectorAll('.inputValue');
const convertBtn = document.querySelector('.convert');
console.log(input)

convertBtn.addEventListener('click', ()=> {
  outputInputValue()
  console.log(feetToMeter(input.value))
})

function outputInputValue() {
  for(child of inputValue) {
    child.textContent = input.value;
  }
}

function meterToFeet(input) {
  return result = Math.round((input * 3.281) * 1000) / 1000
}

function feetToMeter(input) {
  return result = Math.round((input / 3.281) * 1000) / 1000
  
}

function literTogallon(input) {
  return result = Math.round((input * 0.264) * 1000) / 1000
}

function gallonToLiter(input) {
  return result = Math.round((input / 0.264) * 1000) / 1000
}

function kilogramToPound(input) {
  return result = Math.round((input * 2.204) * 1000) / 1000;
}

function poundToKilogram(input) {
  return result = Math.round((input / 2.204) * 1000) / 1000
}

