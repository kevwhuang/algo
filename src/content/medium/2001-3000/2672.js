// 2672 - Number of Adjacent Elements With the Same Color

function colorTheArray(n, queries) {
    const arr = new Array(n).fill(0);
    for (let i = 0, count = 0; i < queries.length; i++) {
        const j = queries[i][0];
        if (j - 1 >= 0 && arr[j - 1] && arr[j - 1] === arr[j]) count--;
        if (j + 1 < n && arr[j] && arr[j] === arr[j + 1]) count--;
        arr[j] = queries[i][1];
        if (j - 1 >= 0 && arr[j - 1] === arr[j]) count++;
        if (j + 1 < n && arr[j] === arr[j + 1]) count++;
        queries[i] = count;
    }
    return queries;
}
