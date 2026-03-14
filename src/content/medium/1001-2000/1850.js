// 1850 - Minimum Adjacent Swaps to Reach the Kth Smallest Number

function getMinSwaps(num, k) {
    function nextPermutation() {
        for (let i = len - 2; ~i; i--) {
            if (arr[i] >= arr[i + 1]) continue;
            let j = len - 1;
            while (arr[i] >= arr[j]) j--;
            swap(i, j);
            j = len - 1;
            while (i < j) swap(++i, j--);
            return;
        }
    }
    function swap(i, j) {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    const len = num.length;
    const arr = num.split('');
    while (k--) nextPermutation(arr);
    let swaps = 0;
    for (let i = 0; i < len; i++) {
        if (arr[i] === num[i]) continue;
        let j = arr.indexOf(num[i], i + 1);
        while (i !== j) {
            swap(j - 1, j);
            swaps++, j--;
        }
    }
    return swaps;
}
