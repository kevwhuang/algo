// 791 - Custom Sort String

function customSortString(order, s) {
    const obj = {};
    for (let cc = 97; cc <= 122; cc++) {
        obj[String.fromCharCode(cc)] = 0;
    }
    for (let i = 0; i < order.length; i++) {
        obj[order[i]] = i + 1;
    }
    return s.split('').sort((a, b) => obj[a] - obj[b]).join('');
}
