// 1310 - XOR Queries of a Subarray

function xorQueries(arr, queries) {
    for (let i = 1; i < arr.length; i++) {
        arr[i] ^= arr[i - 1];
    }
    for (let i = 0; i < queries.length; i++) {
        queries[i] = arr[queries[i][0] - 1] ^ arr[queries[i][1]];
    }
    return queries;
}
