// Write a function called *weekNumberstoWords* with given given input array of numbers 1-7 and outputs an array of the weeksdays written out, using a switch.

// Example:
// Input: [1,4,6,3,2]
// Output: ["Monday","Thursday","Saturday","Wednesday","Tuesday"]

// Estimated time: 30 minutes
// Total points: 30
let input = [1, 4, 6, 3, 2, 12]
let weekdays = ["Monday", "Tuesday", "Wednsday", "Thursday", "Friday", "Saturday", "Sunday"]
let result = []
for (i = 0; i < input.length; i++) {
    switch (i) {

        case 0:
            result.push(weekdays[0])
            break;
        case 1:
            result.push(weekdays[1])
            break;
        case 2:
            result.push(weekdays[2])
            break;

        case 3:
            result.push(weekdays[3])
            break;

        case 4:
            result.push(weekdays[4])
            break;

        case 5:
            result.push(weekdays[5])
            break;

        case 6:
            result.push(weekdays[6])
            break;
        default:
            console.log("Out of Range");


    }

}
console.log(result)

