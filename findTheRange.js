// Starting array
let array = [28, 43, -12, 30, 4, 0, -36]

// Write your solution below:

let max = null;
let min = null;

for (let i = 0; i < array.length; i++){
    if(array[i] >= max){
        max = array[i];
    }
    if(array[i] <= min){
        min = array[i]
    }
}

console.log(max);
console.log(min);
