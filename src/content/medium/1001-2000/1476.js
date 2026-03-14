// 1476 - Subrectangle Queries

class SubrectangleQueries {
    constructor(rectangle) {
        this.rectangle = rectangle;
    }
    getValue(row, col) {
        return this.rectangle[row][col];
    }
    updateSubrectangle(row1, col1, row2, col2, newValue) {
        for (let r = row1; r <= row2; r++) {
            for (let c = col1; c <= col2; c++) {
                this.rectangle[r][c] = newValue;
            }
        }
    }
}
