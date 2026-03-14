// 2107 - Number of Unique Flavors After Sharing K Candies

function shareCandies(candies, k) {
    const map = new Map();
    for (let i = k; i < candies.length; i++) {
        map.set(candies[i], map.get(candies[i]) + 1 || 1);
    }
    let max = map.size;
    for (let i = k; i < candies.length; i++) {
        map.set(candies[i - k], map.get(candies[i - k]) + 1 || 1);
        if (map.get(candies[i]) === 1) map.delete(candies[i]);
        else map.set(candies[i], map.get(candies[i]) - 1);
        max = Math.max(map.size, max);
    }
    return max;
}
