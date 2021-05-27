// Define an array of numbers (use any random numbers). Write a program to print only the even numbers of the array. 
// Do not use any library functions, need to do via for loops only

function getEvenNumbers(){
    const arr = [2,5,7,10,23,44];

    let even = arr.filter(number => number % 2 == 0);
    console.log("even numbers:" + even);

}

getEvenNumbers();