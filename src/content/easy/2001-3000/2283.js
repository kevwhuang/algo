// 2283 - Check If Number Has Equal Digit Count and Digit Value

function digitCount(num) {
    const bucket = new Array(10).fill(0);
    for (let i = 0; i < num.length; i++) {
        bucket[num[i]]++;
    }
    for (let i = 0; i < num.length; i++) {
        if (Number(num[i]) !== bucket[i]) return false;
    }
    return true;
}
