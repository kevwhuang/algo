// 2171 - Removing Minimum Number of Magic Beans

function minimumRemoval(beans) {
    beans.sort((a, b) => a - b);
    let sum = 0, max = 0;
    const len = beans.length;
    for (let i = 0; i < len; i++) {
        sum += beans[i];
        max = Math.max(beans[i] * (len - i), max);
    }
    return sum - max;
}
