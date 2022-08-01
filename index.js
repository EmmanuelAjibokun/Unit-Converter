/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const input = document.getElementById("convert-input");
const inputValue = document.querySelectorAll('.inputValue');
const convertBtn = document.querySelector('.convert');
const inputUnit = document.querySelectorAll('.inputUnit');
console.log(inputUnit)

convertBtn.addEventListener('click', ()=> {
  outputInputValue()
  console.log(feetToMeter(input.value))
})

function outputInputValue() {
  for(const child of inputValue) {
    child.textContent = input.value;
  }
}

// The next block of codes is to check if the unit measures are plural and
// to check if a plural or singular unit measure is the most appropriate for respective unit value
for (const child of inputUnit) {
  if(checkForPlural(child.textContent) === "s" ) {
    console.log(child.textContent + " contains 'S'")
  }
}
function checkForPlural(unit) {
  const getLastChar = unit.charAt(unit.length - 1)
  return getLastChar
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

