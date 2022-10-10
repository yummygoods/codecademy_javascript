/*In this project we will build a Magic Eight Ball using control flow in JavaScript.

The user will be able to input a question, then our program will output a random fortune.

In the first line of the program, define a variable called userName that is set to an empty string.

If the user wants, they can enter their name in between the quotation marks.*/

const userName = '';
/*Below this variable, create a ternary expression that decides what to do if the user enters a name or not. If the user enters a name — like 'Jane' — use string interpolation to log Hello, Jane! to the console. Otherwise, simply log Hello!.

// this was what i wrote first
userName !== '' ?  eightBall = `Hello, ${userName}!` : eightBall = "Hello!";

//but the lesson hint reminds me that i don't need the !==  . if the username has been entered it will evaluate to true so the first thing will run. if it is empty, it will evaluate to false and the alternative will run */
userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');

/*
Create a variable named userQuestion. The value of the variable should be a string that is the question the user wants to ask the Magic Eight Ball.*/

const userQuestion = 'Will I get some sleep tonight?';
/*
Write a eightBall = ) for the userQuestion, stating what was asked. You can include the user’s name in the eightBall = ) statement, if you wish!*/
console.log(`Your question is "${userQuestion}"`);

/*
We need to generate a random number between 0 and 7.

Create another variable, and name it randomNumber. Set it equal to this expression, which uses two methods (Math.floor() and Math.random()) from the Math library.*/

let randomNumber = Math.floor(Math.random() * 8);

/*Math.random() returns a value between 0 (inclusive) and 1 (exclusive).
In order to make this set of numbers range from 0 (inclusive) to 8 (exclusive) we can multiple the returned value by 8.
Finally, to ensure we only have whole numbers from 0 to 7 we can round down using Math.floor().*/

/*Create one more variable named eightBall, and set it equal to an empty string. We will save a value to this variable in the next steps, depending on the value of randomNumber.*/
let eightBall = '';


switch (randomNumber) {
    case 0:
        eightBall = 'It is certain';
                 break;
    case 1:
          eightBall = 'It is decidedly so';
                  break;
    case 2:
          eightBall = 'Reply hazy try again';
                  break;
    case 3:
          eightBall = 'Cannot predict now';
                   break;
  case 4:
      eightBall = 'Do not count on it';
                             break;    
    case 5:
      eightBall = 'My sources say no';
                             break;   
    case 6:
        eightBall = 'Outlook not so good';
                                                       break;    
    case 7:
           eightBall = 'Signs point to yes';
                                                                                                       break;    
                                                                                    default:
                                                                                        eightBall = "I'm not feeling well today, ask another day" ;           
}

console.log(eightBall)

/*If you want extra practice:

If you started with a switch statement, convert it to if/else if/else statements.
If you started with if/else if/else statements, convert them to a switch statement.*/
