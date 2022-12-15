'use strict'

const User = function(firstName, birthYear) {
    // Instance Properties
    this.firstName = firstName // Returns itself and all obj instances with "this"
    this.birthYear = birthYear // Returns itself and all obj instances with "this"
}

const user01 = new User('Rhys', '36')
const user02 = new User('Silvia', '33')
const user03 = new User('Maya', '1')

console.log(user01, user02, user03);