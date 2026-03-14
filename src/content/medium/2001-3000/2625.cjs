// 2625 - Flatten Deeply Nested Array

function flat(arr, n) {
    function dfs(arr, acc) {
        for (let i = 0; i < arr.length; i++) {
            if (acc && Array.isArray(arr[i])) dfs(arr[i], acc - 1);
            else res.push(arr[i]);
        }
    }
    const res = [];
    dfs(arr, n);
    return res;
}
