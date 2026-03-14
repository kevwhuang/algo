// 944 - Delete Columns to Make Sorted

function minDeletionSize(str) {
    let deleted = 0;
    for (let col = 0; col < str[0].length; col++) {
        for (let row = 0; row < str.length - 1; row++) {
            if (str[row][col] > str[row + 1][col]) {
                deleted++;
                break;
            }
        }
    }
    return deleted;
}
