/*https://www.codecademy.com/courses/introduction-to-javascript/projects/secret-message */

let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];
secretMessage.pop();
console.log(secretMessage);
console.log(secretMessage.length);
secretMessage.push('to', 'Program');
console.log(secretMessage);
console.log(secretMessage.indexOf('easily'));
secretMessage.splice(7, 1, 'right');
console.log(secretMessage);
secretMessage.shift()
console.log(secretMessage);
secretMessage.unshift('Programming')
console.log(secretMessage);
console.log(secretMessage.indexOf('get'));
secretMessage.splice(6, 5, 'know');
console.log(secretMessage);
console.log(secretMessage.join(''));
