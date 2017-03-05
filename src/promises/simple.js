
function async1(number) {
    return new Promise((resolve, reject) => {
        console.log('Async function has been executed with ' + number + ' as the argument');
        // Use Set timeout to mock asynchronous activity
        setTimeout(() => {
            if (number < 10) {
                console.log('I am going to resolve the promise.');
                return resolve({ number: number, message: 'yay i resolved'});
            } else {
                console.log('I am going to reject the promise.');
                return reject('Oops i am a reject.');
            }
        }, 2000);
    });
}

console.log('Welcome to the simple promise example');
async1(5)
    .then((data) => {
        console.log('Then: ' + data.message);
    })
    .catch((err) => {
        console.log('Catch:' + err)
    });


async1(11)
    .then((data) => {
        console.log('Then: ' + data.message);
    })
    .catch((err) => {
        console.log('Catch:' + err)
    });
console.log('I am at the end of the script');