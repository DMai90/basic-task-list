// Regular expressions are used to describe a pattern of characters. Matching, searching, validation, collecting text from a body of text.

// let re;
// // Regular expression
// re = /hello/;
// re = /hello/i; // i flag makes it case insensitive and goes AFTER the expression
// //re = /hello/g // g flag searches whole expression for ALL instaneces.

// console.log(re);
// Disregards the // and gives us the actual text inside.
// console.log(re.source);

// Evaluating RegEx
// .exec() - Returns result in an array or null if not present. Returns expression, index where it stars, input - which is the string that we're matching. Returns null if not matching

// const result = re.exec('hello world');

// console.log(result);
// console.log(result[0]);
// console.log(result.index); // Object
// console.log(result.input); // Object

// .test() - returns true or false
// const result = re.test('Hello'); 
// console.log(result);

// .match() - returns result array or null. Works like .exec(), but runs off of the string and passes in the RegEx.
// str = 'Hello there';
// const result = str.match(re);
// console.log(result);

// .search() - returns the index of the first match and if not found it returns a negative one. Returns index of where it starts.
// const str = 'Brad Hello there';
// const result = str.search(re);
// console.log(result);

// // .replace() - returns new string with some or all matches of a pattern
// const str = 'Hello there';
// const result = str.replace(re, 'Hi'); // First parameter is what we're looking up, second parameter is being replaced.
// console.log(result);



let re;
// Literal Characters

re = /hello/;
// case sensitive - i flag
re = /hello/i;

// Metacharacter symols
re = /^h/i // Starts with...
re = / World$/i // Must end with... Note that it goes after the character we're looking at. Can use for multiple characters and non-alphabetical characters
re = /^hello$/i; // Must start and end with..
re = /^h.llo$/i; // Matches any ONE character. 
re = /h*llo/i; // Matches any character 0 or more times. Complete wild card including nothing at all.
re = /gre?a?y/i; // Optional character. They are OPTIONAL meaning neither of them has to be there. 'Gry' will pass.
re = /gre?a?y\?/i; // Escape character. Use \

// Brackets [] - Character Sets
re = /gr[ae]y/i; // MUST be one of the items in the brackets, a or e. Unless we add more metacharacters....
re = /[GF]ray/i; // Must be G or F
re = /[^GF]ray/i; // [^] INSIDE BRACKETS - Match anything except G or F. Not the same meaning as "it has to start with..." In that case we would put it in front of the bracket.
re = /[A-Z]ray/;  // Match any uppercase letter. Gives it a RANGE to compare
re = /[a-z]ray/; // Match any lowercase letter.
re = /[A-Za-z]ray/; // Match ANY letter
re = /[0-9][0-9]/ // Match any digit.

// Braces {} - Quantifiers
re = /Hel{2}o/i; // Look for two 'l's. Put the curly braces AFTER the character that we're looking for. Must occur {m} amount of times. EXACT number of times
re = /Hel{2,4}o/i; // Looks for a range. In this case between 2-4 'l's.
re = /Hel{2,}o/i; // Must occur at least {m} times.

// Parenthesis - Grouping
re = /^([0-9]x){3}$/;

// SHorthand Character Classes
re = /\w/; // Word character - alphanumeric. Can be any letter, number, or _. Goes from left to right and finds the first word character.
re = /\w+/; // + looks at one or more.
re = /\W/; // Non-word character. Non-alphanumeric.
re = /\d/; // Match any digit. Stops at the first digit
re = /\d+/; // + looks at one or more. Stops when it hits something that's not a digit
re = /\D/;  // Match any non-digit.
re = /\s/;  // Match any white space. Spaces and tabs.
re = /\S/; // Match any non whte space.
re = /Hell/i; // Word boundary. Finds the actual word instead of just the first sequencing of characters that match. Ex. looking for 'hell' in Hello, welcome to Hell. We don't want hell from Hello. We want it from Hell.

// Assertions - Similar to conditional statements
re = /x(?=y)/;  // Match x only if followed by y.
re = /x(?!y)/; // Match x only if NOT (!) followed by y.

// String to match
const str = 'aaaxydada';

// Log Results
const result = re.exec(str);
console.log(result);

function reTest(re, str) {
  if(re.test(str)) {
    // Use .source or else it'll return the regular expression. 
    console.log(`${str} matches ${re.source}`);
  } else {
    console.log(`${str} does NOT match ${re.source}`);
  }
}

reTest(re, str);