
function async1(number) {
    return new Promise((resolve, reject) => {
        console.log('Async1 function has been executed with ' + number + ' as the argument');
        // Use Set timeout to mock asynchronous activity
        setTimeout(() => {
            if (number < 10) {
                number += 6;
                return resolve(number);
            } else {
                return reject('Async1 function rejected the promise');
            }
        }, 3000);
    });
}

function async2(number) {
    return new Promise((resolve, reject) => {
        console.log('Async2 function has been executed with ' + number + ' as the argument');
        // Use Set timeout to mock asynchronous activity
        setTimeout(() => {
            if (number < 10) {
                number += 1;
                return resolve(number);
            } else {
                return reject('Async2 function rejected the promise');
            }
        }, 2000);
    });
}

function async3(number) {
    return new Promise((resolve, reject) => {
        console.log('Async3 function has been executed with ' + number + ' as the argument');
        // Use Set timeout to mock asynchronous activity
        setTimeout(() => {
            if (number < 10) {
                return resolve(number);
            } else {
                return reject('Async3 function rejected the promise');
            }
        }, 5000);
    });
}
    
console.log('Welcome to the promise.all example');

Promise.all([async1(2), async2(5), async3(9) ])
    .then(resolvedValues => {
        console.log(resolvedValues);
    })
    .catch((err) => {
        console.log('Catch:' + err)
    });

console.log('I am at the end of the script');