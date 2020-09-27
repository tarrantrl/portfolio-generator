const profileDataArgs = process.argv.slice(2, process.argv.length); // slice does not include last index, so don't say length-1
//console.log(profileDataArgs);

// arrow functions can use an implicit return, don't need to specify it's a return if it's a simple action
const printProfileData = profileDataArr => {
    profileDataArr.forEach(profileItem => console.log(profileItem));
}; // forEach accepts a function as an argument and executes that function on each element of the array

// let and const are block-scoped variables. Variables using these keywords do not exist outside of the {} block they were created in. They also won't override a variable outside of the block (including conditionals, loops, and functions)
// var has function scoping, and is only limited when created in a function, not conditionals or loops

printProfileData(profileDataArgs);

// var commandLineArgs = process.argv;
// console.log(commandLineArgs);
// commandline: node app.js
// [
//     '/usr/local/bin/node',
//     '/Users/racheltarrant/Documents/Coding Bootcamp/Module9/portfolio-generator/app.js'
// ]
// The first value is a file path to where Node.js is installed on your computer. The second is the file path for the file you just executed.
// commandline: node app.js 'Hello Node' From the command line
// [
//   '/usr/local/bin/node',
//   '/Users/racheltarrant/Documents/Coding Bootcamp/Module9/portfolio-generator/app.js',
//   'Hello Node',
//   'From',
//   'the',
//   'command',
//   'line'
// ]
// process is a global object that represents everything going on with this particular app.
// The argv property of process is an array that holds exactly what was typed into the command line upon execution so that we can capture that data and use it in the app.