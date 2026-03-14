// 3280 - Convert Date to Binary

function convertDateToBinary(date) {
    date = date.split('-');
    for (let i = 0; i < 3; i++) {
        date[i] = Number(date[i]).toString(2);
    }
    return date.join('-');
}
