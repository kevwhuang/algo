// 2566 - Maximum Difference by Remapping a Digit

function minMaxDifference(num) {
    num = num.toString();
    let max;
    for (let i = 0; i < num.length; i++) {
        if (num[i] === '9') continue;
        max = num[i];
        break;
    }
    return num.replaceAll(max, 9) - num.replaceAll(num[0], 0);
}
