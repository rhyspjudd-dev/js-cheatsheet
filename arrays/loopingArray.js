const userArray = [
    'Rhys',
    'Judd',
    1986,
    'Web Dev'
]

// Old Skool
for (let i = 0; i < userArray.length; i++) {
 console.log(userArray[i]);
}

// New Skool
for (user of userArray) {
 console.log(user);
}

// type of elements in array
for (user of userArray) {
    console.log(typeof user);
}

// Loop backwards in array 
for (var i = userArray.length - 1; i >= 0; i--) {
    console.log(userArray[i]);
}

// Modern way to loop backwards in array 
userArray.slice().reverse()
    .forEach(function(arrayItem) {
            console.log(arrayItem);
});
