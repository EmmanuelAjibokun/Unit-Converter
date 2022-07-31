/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const input = 20;

function meterToFeet(input) {
  return result = Math.round((input * 3.281) * 1000) / 1000
}

function feetToMeter(input) {
  return result = Math.round((input / 3.281) * 1000) / 1000
  
}

function literTogallon(input) {
  return result = input * 0.264
}

function gallonToLiter(input) {
  return result = input / 0.264
}

function kilogramToPound(input) {
  return result = input * 2.204
}

function poundToKilogram(input) {
  return result = input / 2.204
}

console.log(feetToMeter(input))