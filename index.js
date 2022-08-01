/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const input = document.getElementById("convert-input");
const inputValue = document.querySelectorAll('.inputValue');
const convertBtn = document.querySelector('.convert');
const inputUnit = document.querySelectorAll('.inputUnit');
console.log(input.value)

convertBtn.addEventListener('click', ()=> {
  outputInputValue()
  displayUnitMeasure()
  console.log(feetToMeter(input.value))
})

function outputInputValue() {
  for(const child of inputValue) {
    if(input.value < 0 || !input.value) {
      child.textContent = 0;
    } else {
      child.textContent = input.value;
    }
  }
}

// Concatenate respective unit measure to unit value
// The next block of codes is to check if the unit measures are plural and
// to check if a plural or singular unit measure is the most appropriate for respective unit value
function displayUnitMeasure() {
  for (const child of inputUnit) {
    if( input.value <= 1 && input.value >= 0) {
      if(checkForPlural(child.textContent) === "s" ) {
        child.textContent = removeLastChar(child.textContent)
      } else {
        child.textContent = child.textContent;
      }
    } else {
      if(checkForPlural(child.textContent) === "s" ) {
        // inputUnit.textContent = child.textContent
      } else {
        child.textContent = child.textContent + "s"
      }
    }
  }
}

function checkForPlural(unit) {
  const getLastChar = unit.charAt(unit.length - 1)
  return getLastChar
}
function removeLastChar(unit) {
  return unit.slice(0, -1)
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

