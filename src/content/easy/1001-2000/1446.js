// 1446 - Consecutive Characters

function maxPower(s) {
    let power = 1, acc = 1;
    for (let i = 1; i < s.length; i++) {
        if (s[i - 1] === s[i]) acc++;
        else power = Math.max(acc, power), acc = 1;
    }
    return Math.max(power, acc);
}
