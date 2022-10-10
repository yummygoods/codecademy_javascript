//  a variable named kelvin assigned the value 293
const kelvin = 293;
/* 
Celsius is similar to Kelvin — the only difference is that Celsius is 273 degrees less than Kelvin.

Let’s convert Kelvin to Celsius by subtracting 273 from the kelvin variable. Store the result in another variable, named celsius.*/
const celsius = kelvin - 273;
/* 
Use this equation to calculate Fahrenheit, then store the answer in a variable named fahrenheit.

Fahrenheit = Celsius * (9/5) + 32

In the next step we will round the number saved to fahrenheit. Choose the variable type that allows you to change its value.*/
let fahrenheit = celsius * (9/5) + 32;
/* 
When you convert from Celsius to Fahrenheit, you often get a decimal number.

Use the .floor() method from the built-in Math object to round down the Fahrenheit temperature. Save the result to the fahrenheit variable.*/
fahrenheit = Math.floor(fahrenheit);


//did this in codecademy
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

/*By using variables, your program should work for any Kelvin temperature — just change the value of kelvin and run the program again.

What’s 0 Kelvin in Fahrenheit?*/



/* Convert celsius to the Newton scale using the equation below
Newton = Celsius * (33/100)

Round down the Newton temperature using the .floor() method
Use console.log and string interpolation to log the temperature in newton to the console*/

let newton = celsius * (33/100);
newton = Math.floor(newton);
console.log(`The temperature is ${newton} degrees Newton.`);