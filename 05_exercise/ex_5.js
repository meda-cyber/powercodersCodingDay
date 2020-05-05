// Write a function called *getFirstValue* which gets passed an array on strings, and return the last element in alphabtical order.

// Estimated time: 15 minutes
// Total points: 15
let friends = ["John", "Will", "Mike"];


function getFirstValue() {
    //for (var i = 0; i < friends.length; i++) {
    //    if (friends[i] == friends[friends.length -1])
    //return sort(friend[friends.length - 1]);
    return friends[friends.length - 1].sort()
}

getFirstValue();
