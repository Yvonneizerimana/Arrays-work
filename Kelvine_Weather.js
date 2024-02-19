
//we declare variable called kelvine and assigned value to it.
const kelvin=293;

//convert kelvin to celsius
const celsius=kelvin-273; 

//calculate farneheit
let fahrenheit = celsius * (9/5) + 32;

//round down the Fahrenheit temperature
fahrenheit = Math.floor(fahrenheit);

//display temperature by using string interpolation to replace TEMPERATURE with the value saved to fahrenheit
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);



