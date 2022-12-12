// Object Methods "this"

const user = {
    firstName: 'Rhys',
    lastName: 'P. Judd',
    birthYear: 1986,
    job: 'Web Dev',
    homies: ['Garet', 'Kelv', 'Smitay'],
    hasDriverLicense: true,

    calcAge: function() {
        this.age = 2022 - this.birthYear
        return this.age
    }

}

// Run the function once to prevent multiple 
// reocurances of the program running
console.log(user.calcAge());

// Then grab user age from object and reuse 
console.log(user.age);
// Output 36 


// Other not DRY Method runs the program every time

// console.log(user.calcAge());
// console.log(user.calcAge());
// console.log(user.calcAge());
// console.log(user.calcAge());
// console.log(user.calcAge());
