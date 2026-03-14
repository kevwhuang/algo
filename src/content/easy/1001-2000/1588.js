// 1588 - Sum of All Odd Length Subarrays

function sumOddLengthSubarrays(arr) {
    let sum = 0, size = 1;
    while (size <= arr.length) {
        for (let i = 0; i <= arr.length - size; i++) {
            for (let j = i; j < i + size; j++) {
                sum += arr[j];
            }
        }
        size += 2;
    }
    return sum;
}
