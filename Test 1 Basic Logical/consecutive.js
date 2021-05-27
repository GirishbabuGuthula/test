// Find the maximum consecutive 1's in an array of 0's and 1's

let findMaxConsecutiveOnes = () => {
    const arr = [1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1];
    let count = 0;
    let temp = 0;

    for(let i = 0; i < arr.length ; i++){
        if(arr[i] == 1){
            temp++;
        } else {
            temp = 0;
        }

        if(temp > count){
            count = temp;
        }
    }

    console.log("maximum of consecutive one's is " + count);
}

findMaxConsecutiveOnes();