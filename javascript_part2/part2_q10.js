// Write a program to find the largest of 3 numbers.
let num1 = 25;
let num2 = 42;
let num3 = 18;

let largest;

if (num1 > num2 && num1 > num3) {
    largest = num1;
} else if (num2 > num1 && num2 > num3) {
    largest = num2;
} else {
    largest = num3;
}

console.log(`The largest number is ${largest}`);
