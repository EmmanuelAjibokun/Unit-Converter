/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const input = document.getElementById("convert-input");
const inputValue = document.querySelectorAll('.inputValue');
const convertBtn = document.querySelector('.convert');
const inputUnit = document.querySelectorAll('.inputUnit');
const resultValue = document.querySelectorAll('.resultValue')

convertBtn.addEventListener('click', ()=> {
  outputInputValue()
  displayUnitMeasure()
  conversionMethods.input = input.value
  console.log(conversionMethods.meterToFeet())
  outputResultValue()
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

function outputResultValue() {
  for(const child of resultValue) {
    child.textContent = conversionMethods.meterToFeet()
    console.log(child.textContent)
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
      if(child.textContent === " feet") {
        child.textContent
      } else {
        if(checkForPlural(child.textContent) === "s" ) {
          // inputUnit.textContent = child.textContent
        } else {
          child.textContent = child.textContent + "s"
        }
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

// Rendering the unit measures for the result of the input value on the dom
const unitArr = ["feet", "meter", "gallon", "liter", "pound", "kilo"];
// Display result value

const conversionMethods = {
  input: input.value
}
conversionMethods.meterToFeet = function () {
  let result = Math.round((this.input * 3.281) * 1000) / 1000;
  if(result >= 1 || result === 0) {
    result = `${result} ${unitArr[0]}`
    return result
  }
  return "0 feet"
}


conversionMethods.feetToMeter = function () {
  let result = Math.round((this.input / 3.281) * 1000) / 1000;
  if(result === 1 || result === 0) {
    result = `${result} ${unitArr[1]}`
    return result
  } else if(result > 1) {
    result = `${result} ${unitArr[1]}s`
    return result
  }
  return "0 meter"
}

conversionMethods.literTogallon = function () {
  let result = Math.round((this.input * 0.264) * 1000) / 1000
  if(result === 1 || result === 0) {
    result = `${result} ${unitArr[2]}`
    return result
  } else if(result > 1) {
    result = `${result} ${unitArr[2]}s`
    return result
  }
  return "0 gallon"
}

conversionMethods.gallonToLiter = function () {
  let result = Math.round((this.input / 0.264) * 1000) / 1000;
  if(result === 1 || result === 0) {
    result = `${result} ${unitArr[3]}`
    return result
  } else if(result > 1) {
    result = `${result} ${unitArr[3]}s`
    return result
  }
  return "0 liter"
}

conversionMethods.kilogramToPound = function () {
  let result = Math.round((this.input * 2.204) * 1000) / 1000;
  if(result === 1 || result === 0) {
    result = `${result} ${unitArr[4]}`
    return result
  } else if(result > 1) {
    result = `${result} ${unitArr[4]}s`
    return result
  }
  return "0 pound"
}

conversionMethods.poundToKilogram = function () {
  let result = Math.round((this.input / 2.204) * 1000) / 1000;
  if(result === 1 || result === 0) {
    result = `${result} ${unitArr[5]}`
    return result
  } else if(result > 1) {
    result = `${result} ${unitArr[5]}s`
    return result
  }
  return "0 kilo"
}