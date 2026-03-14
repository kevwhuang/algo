// 1432 - Max Difference You Can Get From Changing an Integer

function maxDiff(num) {
    num = String(num);
    const a = num.replaceAll(num[num.search(/[0-8]/)], 9);
    const b = num[0] === '1'
        ? num.replaceAll(num[num.search(/[2-9]/)], 0)
        : num.replaceAll(num[0], 1);
    return a - b;
}
