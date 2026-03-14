// 3466 - Maximum Coin Collection

function maxCoins(lane1, lane2) {
    let res = -Infinity, max1 = res, max2 = res, max3 = res, i = -1;
    while (++i < lane1.length) {
        max1 = lane1[i] + Math.max(max1, max2);
        max2 = lane2[i] + Math.max(0, max2, max3);
        max3 = Math.max(lane1[i], lane1[i] + max3);
        res = Math.max(max1, max2, max3, res);
    }
    return res;
}
