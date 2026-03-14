// 2177 - Find Three Consecutive Integers That Sum to a Given Number

function sumOfThree(num) {
    const div = num / 3;
    return div === Math.trunc(div) ? [div - 1, div, div + 1] : [];
}
