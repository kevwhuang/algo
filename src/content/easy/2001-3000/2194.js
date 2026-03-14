// 2194 - Cells in a Range on an Excel Sheet

function cellsInRange(s) {
    const list = [];
    for (let i = s.charCodeAt(0); i <= s.charCodeAt(3); i++) {
        for (let j = s[1]; j <= s[4]; j++) {
            list.push(String.fromCharCode(i) + j);
        }
    }
    return list;
}
