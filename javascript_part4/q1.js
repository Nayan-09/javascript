// Write a JavaScript program to delete all occurrences of the element num in a given array.
// Example: If arr = [1, 2, 3, 4, 5, 6, 2, 3] and num = 2, the result should be arr = [1, 3, 4, 5, 6, 3].

let arr = [1,2,3,4,5,6,2,3,2,2];
let num = 2;

for(let i=2; i<arr.length; i++)
{
    if(arr[i] === num)
    {
        arr.splice(i, 1);
    }
}
console.log(arr);

//The splice method in JavaScript is used to change the contents of an array by removing, replacing, or adding elements. 
//It modifies the original array and returns an array containing the removed elements, if any.