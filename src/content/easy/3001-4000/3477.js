// 3477 - Fruits Into Baskets II

function numOfUnplacedFruits(fruits, baskets) {
    for (let i = 0; i < fruits.length; i++) {
        const cur = fruits[i];
        for (let j = 0; j < baskets.length; j++) {
            if (baskets[j] < cur) continue;
            baskets[j] = 0;
            break;
        }
    }
    return baskets.reduce((s, e) => s + Boolean(e), 0);
}
