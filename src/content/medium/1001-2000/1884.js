// 1884 - Egg Drop With 2 Eggs and N Floors

function twoEggDrop(n) {
    let res = 1;
    while (res * (res + 1) / 2 < n) res++;
    return res;
}
