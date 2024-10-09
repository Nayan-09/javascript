// Qs. Create a system to calculate popcorn prices based on the size customer asked for :
// if size is 'XL', price is Rs. 250
// if size is 'L', price is Rs. 200
// if size is 'M', price is Rs. 100
// if size is 'S', price is Rs. 50

let size; // Define the size variable

size = 'L'
// Assuming the size is assigned a value elsewhere in the code
if (size === 'XL') {
    console.log("Price is Rs. 250");
} else if (size === 'L') {
    console.log("Price is Rs. 200");
} else if (size === 'M') {
    console.log("Price is Rs. 100");
} else if (size === 'S') {
    console.log("Price is Rs. 50");
} else {
    console.log("Invalid size. Please choose 'XL', 'L', 'M', or 'S'.");
}
