// 1346 - Check If N and Its Double Exist

function checkIfExist(arr) {
    for (let i = 0; i < arr.length; i++) {
        const index = arr.lastIndexOf(arr[i] * 2);
        if (index !== -1 && index !== i) return true;
    }
    return false;
}
