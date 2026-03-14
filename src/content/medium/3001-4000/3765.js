// 3765 - Complete Prime Number

function completePrime(num) {
    if (!this.dict) dict = new Set([2, 3, 5, 7, 23, 37, 53, 73, 313, 317]);
    if (dict.size < 15) dict.add(373).add(797).add(3137).add(3797).add(739397);
    return dict.has(num);
}
