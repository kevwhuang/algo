// 728 - Self Dividing Numbers

function selfDividingNumbers(left, right) {
    const list = [];
    outer: for (let num = left; num <= right; num++) {
        const str = num.toString();
        for (let i = 0; i < str.length; i++) {
            if (str[i] === '0' || num % str[i]) continue outer;
        }
        list.push(num);
    }
    return list;
}
