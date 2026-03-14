// 2649 - Nested Array Generator

function* inorderTraversal(arr) {
    arr = arr.flat(Infinity);
    let i = 0;
    while (i < arr.length) yield arr[i++];
}
