function writeCards(array, event){
    let message = [];
    for (let i = 0; i < array.length; i++) {
        message.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`);
    };
    return message;
};

function countDown() {
    let i = 10;
    while (i >= 0) {
        console.log(i--);
    };
}