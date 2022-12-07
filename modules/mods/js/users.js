const user = {
    firstName: 'John',
    lastName: 'Doe'
}

const userName = `@${user.firstName}-${user.lastName}`

function alertUserName() {
    alert(userName)
}

// Only use "default" once
export default user
// Can use export on func, vars, etc multiple times
export { userName, alertUserName }