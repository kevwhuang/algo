// 3491 - Phone Number Prefix

function phonePrefix(numbers) {
    const arr = numbers.sort();
    for (let i = 1; i < arr.length; i++) {
        if (arr[i].startsWith(arr[i - 1])) return false;
    }
    return true;
}
