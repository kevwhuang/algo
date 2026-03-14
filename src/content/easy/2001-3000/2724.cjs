// 2724 - Sort By

function sortBy(arr, fn) {
    return arr.sort((a, b) => fn(a) - fn(b));
}
