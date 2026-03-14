// 2437 - Number of Valid Clock Times

function countTime(time) {
    let res = 1;
    const h1 = time[0], h2 = time[1];
    if (h1 === '?' && h2 === '?') res *= 24;
    else if (h1 === '?' && h2 <= '3') res *= 3;
    else if (h1 === '?' && h2 > '3') res *= 2;
    else if (h1 === '0' && h2 === '?') res *= 10;
    else if (h1 === '1' && h2 === '?') res *= 10;
    else if (h1 === '2' && h2 === '?') res *= 4;
    if (time[3] === '?') res *= 6;
    if (time[4] === '?') res *= 10;
    return res;
}
