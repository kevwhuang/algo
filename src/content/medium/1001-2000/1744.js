// 1744 - Can You Eat Your Favorite Candy on Your Favorite Day

function canEat(candiesCount, queries) {
    for (let i = 1; i < candiesCount.length; i++) {
        candiesCount[i] += candiesCount[i - 1];
    }
    for (let i = 0; i < queries.length; i++) {
        const [type, day, cap] = queries[i];
        const min = Math.floor((candiesCount[type - 1] ?? 0) / cap);
        const max = candiesCount[type] - 1;
        queries[i] = min <= day && day <= max;
    }
    return queries;
}
