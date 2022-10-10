/* Here’s how you convert your age from “human years” to “dog years”:

The first two years of a dog’s life count as 10.5 dog years each.
Each year following equates to 4 dog years.
Before you start doing the math in your head, let a computer take care of it! With your knowledge of math operators and variables, use JavaScript to convert your human age into dog years.*/

/* 
Create a variable named myAge, and set it equal to your age as a number.

Write a comment that explains this line of code.*/
let myAge = 48;
/* Create a variable named earlyYears and save the value 2 to it. Note, the value saved to this variable will change.

Write a comment that explains this line of code.*/
let earlyYears = 2;
/*Use the multiplication assignment operator to multiply the value saved to earlyYears by 10.5 and reassign it to earlyYears.*/
earlyYears *= 10.5;
/*
Since we already accounted for the first two years, take the myAge variable, and subtract 2 from it.

Set the result equal to a variable called laterYears. We’ll be changing this value later.

Write a comment that explains this line of code. */
let laterYears = myAge - 2;

/* 
Multiply the laterYears variable by 4 to calculate the number of dog years accounted for by your later years. Use the multiplication assignment operator to multiply and assign in one step.

Write a comment that explains this line of code.*/

laterYears *= 4;
/*
Add earlyYears and laterYears together, and store that in a variable named myAgeInDogYears.

Write a comment that explains this line of code.*/
myAgeInDogYears = earlyYears + laterYears;
/* 
Let’s use a string method next.

Write your name as a string, call its built-in method .toLowerCase(), and store the result in a variable called myName.

The toLowerCase method returns a string with all lowercase letters.

Write a comment that explains this line of code. */
const myName = 'Melissa' .toLowerCase()
/*Write a console.log statement that displays your name and age in dog years. Use string interpolation to display the value in the following sentence:

*/
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);

/*If you’d like extra practice, try writing this project without the *= operator.*/
