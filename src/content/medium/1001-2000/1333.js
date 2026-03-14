// 1333 - Filter Restaurants by Vegan-Friendly, Price and Distance

function filterRestaurants(restaurants, veganFriendly, maxPrice, maxDistance) {
    const arr = [];
    for (let i = 0; i < restaurants.length; i++) {
        if (restaurants[i][2] < veganFriendly) continue;
        if (restaurants[i][3] > maxPrice) continue;
        if (restaurants[i][4] > maxDistance) continue;
        arr.push(restaurants[i]);
    }
    return arr.sort((a, b) => b[1] - a[1] || b[0] - a[0]).map(e => e[0]);
}
