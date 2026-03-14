// 168 - Excel Sheet Column Title

function convertToTitle(columnNumber) {
    let title = '';
    while (columnNumber--) {
        title = String.fromCharCode(columnNumber % 26 + 65) + title;
        columnNumber = columnNumber / 26 >> 0;
    }
    return title;
}
