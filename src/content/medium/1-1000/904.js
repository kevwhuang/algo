// 904 - Fruit Into Baskets

function totalFruit(fruits) {
    let max = 1;
    const map = new Map();
    for (let l = 0, r = 0; r < fruits.length; r++) {
        map.set(fruits[r], (map.get(fruits[r]) ?? 0) + 1);
        while (map.size > 2 && l < r) {
            const freq = map.get(fruits[l]);
            if (freq === 1) map.delete(fruits[l++]);
            else map.set(fruits[l++], freq - 1);
        }
        max = Math.max(r - l + 1, max);
    }
    return max;
}
