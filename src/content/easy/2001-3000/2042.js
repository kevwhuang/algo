// 2042 - Check If Numbers Are Ascending in a Sentence

function areNumbersAscending(s) {
    let prev = 0;
    for (let num of s.matchAll(/\d+/g)) {
        num = +num[0];
        if (prev >= num) return false;
        prev = num;
    }
    return true;
}
