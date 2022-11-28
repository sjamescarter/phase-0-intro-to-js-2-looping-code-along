function writeCards(name, event) {
    let message = [];
    for (let i = 0; i < name.length; i++) {
        message[i] = `Thank you, ${name[i]}, for the wonderful ${event} gift!`
    };

    return message;
}

function countDown(i) {
    while (i >= 0) {
        console.log(i--)
    };
}