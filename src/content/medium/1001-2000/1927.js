// 1927 - Sum Game

function sumGame(num) {
    let sum = 0;
    const half = num.length / 2;
    for (let i = 0; i < half; i++) {
        sum += num[i] === '?' ? 4.5 : Number(num[i]);
    }
    for (let i = half; i < num.length; i++) {
        sum -= num[i] === '?' ? 4.5 : num[i];
    }
    return Boolean(sum);
}
