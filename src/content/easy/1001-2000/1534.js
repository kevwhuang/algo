// 1534 - Count Good Triplets

function countGoodTriplets(arr, a, b, c) {
    let triplets = 0;
    const n = arr.length;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            for (let k = j + 1; k < n; k++) {
                if (Math.abs(arr[i] - arr[j]) > a) continue;
                if (Math.abs(arr[j] - arr[k]) > b) continue;
                if (Math.abs(arr[i] - arr[k]) > c) continue;
                triplets++;
            }
        }
    }
    return triplets;
}
