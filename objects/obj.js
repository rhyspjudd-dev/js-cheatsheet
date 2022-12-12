const user = {
    email: 'johndoe@foo.com',
    name: 'John Doe',
    // ES6 Functions in objects
    login() {
        console.log(this.email, 'is logged in!' );
    },
    logout() {
        console.log(this.email, 'is logged out!')
    }

}

// Call obj properties 2x ways
user.name
//or
console.log(user['name']);

// Dynamic properties
var prop = 'name'
// Change the value of prop
prop = 'email'
console.log(user[prop])

// output
// 'johndoe@foo.com'