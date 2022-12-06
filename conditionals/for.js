// Basic for
for(i = 0; i < 5; i++ ) {
    console.log(`loop ${i}`)
}

// Basic for decrementing
for(i = 5; i < 0; i-- ) {
    console.log(`loop ${i}`)
}

// In Array
const items = ['item01', 'item02', 'item03', 'item04']
for (item of items) {
    console.log(item)
}

// ForEach (main for looping arrays)
const animals = ['turkey', 'goat', 'hippo', 'monkey']
animals.forEach(animal => {
    console.log(animal);
})

// From object
const user = { firstName: 'John', lastName: 'Doe'}
// Key passed into user object
for (key in user) console.log(user[key])
// Small for loops can be written on one line



