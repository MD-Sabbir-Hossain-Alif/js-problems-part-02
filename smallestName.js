//* Task - 2 Solution:
//  TODO:  Find the friend with the smallest name.

const friend = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

let smallestFriendName = friend[0];

for (const name of friend) {
    if(smallestFriendName.length > name.length){
        smallestFriendName = name;
    }
}
console.log(smallestFriendName); // Output: "ron"