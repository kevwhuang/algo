// 3457 - Eat Pizzas

function maxWeight(pizzas) {
    const arr = new Uint32Array(pizzas).sort();
    let res = 0, i = arr.length - 1;
    let odd = Math.ceil(arr.length / 8);
    let even = arr.length / 4 - odd;
    while (odd--) res += arr[i--];
    while (even--) i--, res += arr[i--];
    return res;
}
