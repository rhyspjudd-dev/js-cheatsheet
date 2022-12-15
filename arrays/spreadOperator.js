// Use spread operator to concatinate to arrays

// Don't use for large data sets. 
// Use the js concat method 
// (see: concatArrays.js)

const arr1 = [ 1, 2, 3 ]
const arr2 = [ 4, 5 ]

const spreadOperatorArr = [...arr1,...arr2]
console.log(spreadOperatorArr)
// Output [1,2,3,4,5]


// Example 2
const odd = [ 1,3,5 ];
const combined = [ 2,4,6, ...odd ];
console.log(combined);
// Output.. [ 2, 4, 6, 1, 3, 5 ]

