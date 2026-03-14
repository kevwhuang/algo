// 3492 - Maximum Containers on a Ship

function maxContainers(n, w, maxWeight) {
    return Math.min(n * n, maxWeight / w >> 0);
}
