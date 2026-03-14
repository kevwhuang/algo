// 1524 - Number of Subarrays With Odd Sum

function numOfSubarrays(arr) {
    let subarrays = 0, acc = 0, even = 1, odd = 0;
    for (let i = 0; i < arr.length; i++) {
        acc += arr[i];
        if (acc & 1) subarrays += even, odd++;
        else subarrays += odd, even++;
        subarrays %= 1000000007;
    }
    return subarrays;
}
