// 670 - Maximum Swap

function maximumSwap(num) {
    const digits = num.toString().split('');
    for (let i = 0; i < digits.length - 1; i++) {
        let swap = i;
        for (let j = i + 1; j < digits.length; j++) {
            if (digits[j] >= digits[swap]) swap = j;
        }
        if (digits[i] === digits[swap]) continue;
        [digits[i], digits[swap]] = [digits[swap], digits[i]];
        return parseInt(digits.join(''));
    }
    return num;
}
