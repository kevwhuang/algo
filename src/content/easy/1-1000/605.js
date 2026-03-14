// 605 - Can Place Flowers

function canPlaceFlowers(flowerbed, n) {
    if (n === 0) return true;
    for (let i = 0, j, count; i < flowerbed.length; i++) {
        if (flowerbed[i] === 1) continue;
        count = 0;
        for (j = i; j < flowerbed.length; j++) {
            if (flowerbed[j] === 1) break;
            flowerbed[j - 1] !== 1 && flowerbed[j + 1] !== 1 && count++;
        }
        n -= Math.round(count / 2);
        if (n <= 0) return true;
        i = j + 1;
    }
    return false;
}
