// 475 - Heaters

function findRadius(houses, heaters) {
    houses.sort((a, b) => a - b);
    heaters.sort((a, b) => a - b);
    let radius = 0;
    for (let i = 0, j = 0; i < houses.length; i++) {
        while (j < heaters.length - 1) {
            if (2 * houses[i] < heaters[j] + heaters[j + 1]) break;
            j++;
        }
        radius = Math.max(Math.abs(houses[i] - heaters[j]), radius);
    }
    return radius;
}
