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

  // another example
  const age = 2

  age >= 18 ? alert('i like to drink wine!') : alert('i like to drink pop!')


  // Extra examples

  const bills = [275, 40, 430, 10];
  const billAmount = bills[1];
  const tip =
  // set conditions                       (true run this)   : (false run this)
  billAmount <= 300 && billAmount >= 50 ? billAmount * 0.15 : billAmount * 0.20;

  console.log(`the final bill was ${billAmount} the tip for the bill was ${tip}, meaning the final total was ${tip + billAmount}`)

  
  const ticketPrices = [45, 52, 22, 11, 99];
  const finalTicket = ticketPrices[0];
  const serviceCharge = finalTicket <= 0 && finalTicket >= 25 ? finalTicket * 0.15 : finalTicket * 0.25;

  console.log(`Your final ticket price is ${finalTicket}, your service charge is ${serviceCharge}, your total is ${ finalTicket + serviceCharge } `)