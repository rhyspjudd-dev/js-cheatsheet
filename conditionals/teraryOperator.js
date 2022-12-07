const num = 5
let result;

// '?' does the same
result = num <= 50 ? `Result: ${num}, go higher` : `Result: ${num}, go lower`;

// as...

if (num <= 50) {
    result = `Result: ${result}, go higher`
} else {
    result = `Result: ${result}, go lower`
}

// Another demo (membership fee)
function getFee(isMember) {
    return (isMember ? '$2.00' : '$10.00');
  }
  
  console.log(getFee(true));
  // expected output: "$2.00"
  
  console.log(getFee(false));
  // expected output: "$10.00"
  
  console.log(getFee(null));
  // expected output: "$10.00"
  

