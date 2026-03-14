// 2259 - Remove Digit From Number to Maximize Result

function removeDigit(number, digit) {
    let last;
    for (let i = 0; i < number.length; i++) {
        if (number[i] !== digit) continue;
        last = i;
        if (i + 1 < number.length && number[i + 1] > digit) break;
    }
    return number.slice(0, last) + number.slice(last + 1);
}
