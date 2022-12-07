import user, {userName, alertUserName} from './users.js'

const elFirstName = document.querySelector('.firstName');
const elLastName  = document.querySelector('.lastName');
const elUserName  = document.querySelector('.userName');

elFirstName.innerHTML = user.firstName;
elLastName.innerHTML = user.lastName;
elUserName.innerHTML = userName;

alertUserName();




