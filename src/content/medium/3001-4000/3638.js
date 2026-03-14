// 3638 - Maximum Balanced Shipments

function maxBalancedShipments(weight) {
    let res = 0, max = 0, i = -1;
    while (++i < weight.length) {
        if (weight[i] < max) res++, max = 0;
        else max = weight[i];
    }
    return res;
}
