// Create a function called celsiusToFahrenheit:
// - Take a Celsius temperature from the user and convert it to Fahrenheit
// - Return string as output: "SOMETHING degrees Celsius is Something degrees Fahrenheit"
// input for function celsiusToFahrenheit is number expected temp in celsius return number
const celsiusToFahrenheit = (temperatureInCelsius) =>
  temperatureInCelsius * (9 / 5) + 32;
// input for function celsiusToFahrenheitDisplay is html id attribute name and temperature number, expected string return undefined
const celsiusToFahrenheitDisplay = (identifier, temperature) =>
  (document.getElementById(
    identifier
  ).innerText = `${temperature} degrees Celsius is ${celsiusToFahrenheit(
    Number(temperature)
  )}  degrees Fahrenheit `);
// Create a function called fahrenheitToCelsius:
// - Now take a Fahrenheit temperature from the user and convert it to Celsius
// - Return string as output: "SOMETHING degrees Fahrenheit is SOMETHING degrees Celsius"
// input for function fahrenheitToCelsius is number expected temp in celsius return number
const fahrenheitToCelsius = (temperatureInFahrenheit) =>
  (temperatureInFahrenheit - 32) * (5 / 9);
// input for function fahrenheitToCelsiusDisplay is html id attribute name and temperature number, expected string return undefined
const fahrenheitToCelsiusDisplay = (identifier, temperature) =>
  (document.getElementById(
    identifier
  ).innerText = `${temperature} degrees Fahrenheit is ${fahrenheitToCelsius(
    Number(temperature)
  )}  degrees Celsius `);
