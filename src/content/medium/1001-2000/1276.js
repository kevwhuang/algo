// 1276 - Number of Burgers With No Waste of Ingredients

function numOfBurgers(tomatoSlices, cheeseSlices) {
    if (tomatoSlices % 2) return [];
    const jumbo = tomatoSlices / 2 - cheeseSlices;
    if (jumbo < 0) return [];
    return cheeseSlices - jumbo >= 0 ? [jumbo, cheeseSlices - jumbo] : [];
}
