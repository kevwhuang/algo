// 1343 - Number of Subarrays of Size K and Average Greater Than or Equal to Threshold

function numOfSubarrays(arr, k, threshold) {
    let sum = 0;
    for (let i = 0; i < k; i++) {
        sum += arr[i];
    }
    let count = sum / k >= threshold ? 1 : 0;
    for (let i = k; i < arr.length; i++) {
        sum += arr[i] - arr[i - k];
        if (sum / k >= threshold) count++;
    }
    return count;
}
