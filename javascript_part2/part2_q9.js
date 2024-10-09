// A string is a golden string if it starts with the character 'A' or 'a' and has a 
// total length greater than 5. For a given string, print if it is golden or not.
let str = "Amazing"; // Example string, you can change this

if ((str[0] === 'A' || str[0] === 'a') && str.length > 5) {
    console.log("Golden string");
} else {
    console.log("Not a golden string");
}
