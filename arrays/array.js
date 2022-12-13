// Init Array 
const myArray = [ 'Some Data 01', 'Some Data 02', 'Some Data 03']

// Sometimes seen
const myNewArray = new Array('Some Data 01', 'Some Data 02', 'Some Data 03')

// Array Length 
console.log(myArray.length);


// Demo - calc ages of values in array
const calcAge = function(birthYear) {
    return 2022 - birthYear;
}

const years = [2021, 2008, 2014, 1986, 1954, 1899, 2007]

const age01 = calcAge(years[0]);
const age02 = calcAge(years[3]);
// This get us the last value from array without having to count 
const age03 = calcAge(years[years.length - 1]);

const ages = [age01, age02, age03]

console.log(ages);