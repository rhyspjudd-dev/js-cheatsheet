const homies = ['Kelv', 'Gary', 'Joe'];

// Adds this element to end of array
homies.push('Rich')

// Add element to start of Array
homies.unshift('John');

// Remove last element of array
// Returns removed element (eg. 'Rich')
homies.pop();

// Removes first element
homies.shift();

// Get index number in array (eg 1)
homies.indexOf('Gary');

// True if value in array
homies.includes('Joe') // return true
homies.includes('Donald Trump') // return false as not in array

// Use includes in if statements 
if (homies.includes('Sean Paul')) {
    console.log('You have a friend called Sean Paul!');
} else {
    // True
    console.log('You DON\'T have a friend called Sean Paul!');
}

const billAmount = [125, 555, 44];

function calcTip(billAmount) {
    return billAmount <= 300 && billAmount >= 0 ? billAmount * 0.15 : billAmount * 0.20;
}
const finalMealTip01 = calcTip(billAmount[0]);
const finalMealTip02 = calcTip(billAmount[1]);
const finalMealTip03 = calcTip(billAmount[2]);

// function calcFullMeal() {
//     return tips + billAmount
// }

const tips = [ finalMealTip01, finalMealTip02, finalMealTip03 ]
console.log(tips);

const finalTotals = [
    billAmount[0] + tips[0],
    billAmount[1] + tips[1],
    billAmount[2] + tips[2],
]

console.log(finalTotals);








