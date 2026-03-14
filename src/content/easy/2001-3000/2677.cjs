// 2677 - Chunk Array

function chunk(arr, size) {
    const res = new Array(Math.ceil(arr.length / size));
    for (let i = 0, j = 0; i < res.length; i++, j += size) {
        res[i] = arr.slice(j, j + size);
    }
    return res;
}
