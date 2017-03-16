
function async1(number) {
    return new Promise((resolve, reject) => {
        console.log('Async1 function has been executed with ' + number + ' as the argument');
        // Use Set timeout to mock asynchronous activity
        setTimeout(() => {
            if (number < 10) {
                return resolve('Async1 resolved the promise');
            } else {
                return reject('Async2 rejected the promise');
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
                return resolve('Async2 resolved the promise');
            } else {
                return reject('Async2 rejected the promise.');
            }
        }, 2000);
    });
}

console.log('Welcome to the simple promise example');
async1(5)
    .then((message) => {
        console.log('Then: ' + message);
    })
    .catch((err) => {
        console.log('Catch:' + err)
    });


async2(11)
    .then((message) => {
        console.log('Then: ' + message);
    })
    .catch((err) => {
        console.log('Catch:' + err)
    });
console.log('I am at the end of the script');