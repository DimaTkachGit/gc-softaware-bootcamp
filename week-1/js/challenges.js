/*
1. Create a program that stores what you eat today for ‘breakfast:’, ‘lunch:’ and ‘dinner:’.
console.log the string. Eg (“breakfast:pancakes, lunch:blt, dinner:steakandchips”). 
*/
const logFoodInfo = (breakfast = 'rice', lunch = 'egs', dinner = 'potatos') => {
    console.log(`Breacfast: ${breakfast}, lunch: ${lunch}, dinner:  ${dinner}`);
}
logFoodInfo('pancakes', 'blt', 'steak and chips');


/*
2. Pass in a parameter called num. If num is a data type of string or num is less than or equal to
0, return the string 'needs to be a positive number’. If num is divisible by 3 return “fizz”, if num is
divisible by 5 return “buzz”, if num is divisible by both 3 and 5 return “fizz buzz”. If num is not
divisible by 3 or 5 return the value of num. Print the result
*/

/**
 * @param {number} num
 */
const divisionBy = (num) => {
    if (isNaN(Number(num))) return 'Accept only <number> or numeric <string>';
    if (num <= 0) return 'Needs to be a positive number';
    if (num % 3 === 0 && num % 5 === 0) return 'fizz buzz';
    if (num % 3 === 0) return 'fizz';
    if (num % 5 === 0) return 'buzz';

    return num;
}

const logDivisionByResult = (data) => {
    if (!data) return;
    for (let i = 0; i < data.length; i++) console.log(divisionBy(data[i]));
}

logDivisionByResult(['', 'ab', -1, 6, 10, 15, 1]);


/*
3. Pass in 2 parameters called num1 and num2. Create an if statement that checks if the result
of the sum is even, if it is return the number, otherwise return the numbers multiplied together. If
the parameters are not numbers return the error message 'make sure you enter 2 numbers'.
*/

/**
 * @param {number} num1
 * @param {number} num2
 */
const sumOrMultilpy = (num1, num2) => {
    if (!num1 || !num2) return 'Required 2 params <number>';
    const isNum = (val) => typeof (val) === 'number';
    if (!isNum(num1) || !isNum(num2)) return 'Accept only numbers';

    if ((num1 + num2) % 2 === 0) return num1 + num2;
    return num1 * num2;
}

console.log(sumOrMultilpy(30, 20));
console.log(sumOrMultilpy(11, 42));
console.log(sumOrMultilpy(10, null));
console.log(sumOrMultilpy('1', {}));
console.log(sumOrMultilpy('as', '1'));


/**
 * 4. Generate 6 random numbers between 1-50, add them to an array and log the array.
 * @param {number} length - Array length.
 * @param {number} limit - Generator limit.
 */
const randomNumsArr = (length, limit) => {
    if (!length || !limit) return 'Required 2 params <number>';
    if (isNaN(length + limit)) return 'Accepts only <number>';

    return new Array(length).fill().map(() => Math.round(Math.random() * limit));
}
console.log(randomNumsArr(6, 50));


/*
5. If we can create a loop to put 0-9 on the screen, how can we count from 9-0? Return an array
that contains 9-0 using a loop that does this. Print the result
*/

/**
 * @param {number} num
 */
const reverseNumsArr = (val) => {
    if (!val) return 'Required 1 param <number>';
    const arr = [];
    for (let i = val; i > 0; i--) arr.push(i);
    return arr;
}
console.log(reverseNumsArr(9));


/*
6. Create a JavaScript program that prints out a multiplication table for a given number.
The program should take a number(can store in a variable), representing the multiplication table
they want to generate. Use a for loop to iterate from 1 to 10.
Inside the loop, multiply the current number by the stored number and print out the result in the
format: <input number> * <current number> = <result>.
*/

/**
 * @param {number} num
 */
const printMultyplyTable = (num) => {
    if (!num) return 'Required 1 param <number>';
    for (let i = 0; i <= 10; i++) {
        console.log(`[${num}] * [${i}] = [${num * i}]`);
    }
}
console.log(printMultyplyTable(7));

/*
7. Create a JavaScript program that calculates the average grade of a student based on their
scores in three subjects: Math, Science, and English.
Define a function named calculateAverage that takes three parameters: mathScore, scienceScore,
and englishScore.
Inside the function, calculate the average score by adding up the scores of the three subjects and
dividing by 3.
Return the average score from the function.
Call the calculateAverage with the separate score results as arguments and log the result to the
console.
Modify the program to also determine and display the corresponding letter grade based on the
average score.
For example, A for scores >= 90, B for scores >= 80, and so on.
*/

/**
 * @param {number} mathScore
 * @param {number} scienceScore
 * @param {number} englishScore
 */
const calculateAverage = (...args) => {
    if (args.length < 3) return 'Required 3 params <number>';
    const message = (grade) => 'Student has got grade ' + grade;

    const [mathScore, scienceScore, englishScore] = args;
    const average = [mathScore, scienceScore, englishScore].reduce((acc, val) => acc + val, 0) / 3;

    if (average >= 0 && average <= 30) return message('C');
    if (average >= 20 && average <= 60) return message('B');
    if (average >= 90) return message('A');
}

console.log(calculateAverage(50, 30, 70));


/**
 * Print number of days left until birthday
 * @param {string} date - String date exemple 04/04/2025
 */
const dateCounter = (date) => {
    if (!date) return 'Required 1 params <string>';
    const deltaTime = new Date(date).getTime() - new Date().getTime();
    const deltaDays = Math.round(deltaTime / (1000 * 3600 * 24));
    console.log(`${deltaDays} days left to your birthday`);
}
dateCounter("04/04/2025");


/**
 * Dynamically painting board 
 * @param {string[]} arr - Array of symbols.
 */
const dinamicalyPaintingBoard = (arr) => {
    if (!arr.length) return 'Required params <string[]>';
    let colums = 3;
    let index = 0;

    for (let i = 0; i < Math.floor(arr.length / 3); i++) {
        let row = '';
        for (let j = 0; j < colums; j++) {
            row += `| ${arr[index]} `; index++;
        }
        console.log(row + '|');
        console.log('-------------');
        row = '';
    }
}
const symbolsArr = ['x', 'o', ' ', 'x', 'x', ' ', 'o', ' ', 'x', 'x', ' ', 'o', ' ', 'x', ' ', ' ', 'o', 'o', 'o', 'o'];
dinamicalyPaintingBoard(symbolsArr);


