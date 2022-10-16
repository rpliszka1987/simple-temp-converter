// This is a simple temperature converting temperature JavaScript application

// Temperature in kelvin
const kelvin = 0;

// Converting Kelvin to Celsius
let celsius = kelvin - 273;

// Converting from Celsius to Fahrenheit, also rounds down the number
let fahrenheit = Math.floor(celsius * (9/5) + 32);

// Convert from Celsius to Newton
let newton = Math.floor(celsius * (33/100));

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
console.log(`${kelvin} degrees Kelvin is: ${celsius} degrees Celsius, ${fahrenheit} degrees Fahrenheit, ${newton} degrees Newton.`)