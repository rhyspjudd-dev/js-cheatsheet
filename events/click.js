const button = document.querySelector('button');

button.addEventListener('click', someFunction);

function someFunction() {
    // Do something
}

// To run once only 
button.addEventListener('click', someFunction, { once: true });

