const convertToCelsius = function (fahrenheitTemp) {
  const celsiusTemp = (fahrenheitTemp - 32) * 5 / 9;
  return Math.round(celsiusTemp * 10) / 10;
};

const convertToFahrenheit = function (celsiusTemp) {
  const fahrenheitTemp = 9 / 5 * celsiusTemp + 32;
  return Math.round(fahrenheitTemp * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
