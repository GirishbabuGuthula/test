// Suppose you have an array of 101 integers. This array is already sorted and all numbers in this array are consecutive.
// Each number only occurs once in the array except one number which occurs twice. Write a js code to find the repeated number.

function duplicate(){
    const a = [4,3,6,3,4,3];
    let count = {}
   
    for(let i =0; i < a.length; i++){ 
        if (count[a[i]]){
        count[a[i]] += 1;
        } else {
        count[a[i]] = 1
        }
    }
    
    for (let prop in count){
        if (count[prop] >= 2){
            console.log(prop + " counted: " + count[prop] + " times.");
        }
    }
    console.log(count);
}

duplicate();