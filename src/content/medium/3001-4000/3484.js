// 3484 - Design Spreadsheet

class Spreadsheet {
    constructor(rows) {
        this.map = new Map();
    }
    getValue(formula) {
        const idx = formula.indexOf('+');
        const s = formula.slice(1, idx), t = formula.slice(idx + 1);
        const a = isNaN(s[0]) ? this.map.get(s) ?? 0 : Number(s);
        const b = isNaN(t[0]) ? this.map.get(t) ?? 0 : Number(t);
        return a + b;
    }
    resetCell(cell) {
        this.map.set(cell, 0);
    }
    setCell(cell, value) {
        this.map.set(cell, value);
    }
}
