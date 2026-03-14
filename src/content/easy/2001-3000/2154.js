// 2154 - Keep Multiplying Found Values by Two

function findFinalValue(nums, original) {
    while (true) {
        if (nums.includes(original)) original *= 2;
        else return original;
    }
}
