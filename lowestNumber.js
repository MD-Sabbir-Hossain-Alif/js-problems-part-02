//* Task - 1 Solution:
//  TODO:  Find the lowest number in the array below.

const heights = [167, 190, 120, 165, 137];

let lowestNum = heights[0];

for (const height of heights) {
    if(lowestNum > height){
        lowestNum = height;
    }
}
console.log(lowestNum); // Output: 120
