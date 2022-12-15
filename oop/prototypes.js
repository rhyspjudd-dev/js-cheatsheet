'use strict'

const User = function(firstName, birthYear) {
    // Instance Properties
    this.firstName = firstName // Returns itself and all obj instances with "this"
    this.birthYear = birthYear // Returns itself and all obj instances with "this"
}

const user01 = new User('Rhys', 1986)
const user02 = new User('Silvia', 1989)
const user03 = new User('Maya', 2021)

// PROTOTYPE - add a function to each new instance of "user"
// "this" refers back to user obj
User.prototype.calcAge = function () {
    console.log( 2022 - this.birthYear )
}

user02.calcAge();

console.log(user01, user02, user03)

