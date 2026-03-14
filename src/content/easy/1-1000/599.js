// 599 - Minimum Index Sum of Two Lists

function findRestaurant(list1, list2) {
    const map = new Map();
    for (let i = 0; i < list1.length; i++) {
        map.set(list1[i], i);
    }
    let res = [];
    let leastIndexSum = Infinity;
    for (let i = 0, cur; i < list2.length; i++) {
        cur = list2[i];
        if (map.has(cur)) {
            const indexSum = map.get(cur) + i;
            if (indexSum === leastIndexSum) {
                res.push(cur);
            } else if (indexSum < leastIndexSum) {
                res = [cur];
                leastIndexSum = indexSum;
            }
        }
    }
    return res;
}
