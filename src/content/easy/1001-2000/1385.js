// 1385 - Find the Distance Value Between Two Arrays

function findTheDistanceValue(arr1, arr2, d) {
    let distanceValue = 0;
    loop: for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (Math.abs(arr1[i] - arr2[j]) <= d) continue loop;
        }
        distanceValue++;
    }
    return distanceValue;
}
