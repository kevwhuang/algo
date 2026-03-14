// 895 - Maximum Frequency Stack

class FreqStack {
    constructor() {
        this.B = new Map();
        this.S = [null];
    }
    pop() {
        const res = this.S.at(-1).pop();
        this.B.set(res, this.B.get(res) - 1);
        if (this.S.at(-1).length === 0) this.S.pop();
        return res;
    }
    push(val) {
        const next = (this.B.get(val) ?? 0) + 1;
        this.B.set(val, next);
        if (this.S.length === next) this.S.push([]);
        this.S[next].push(val);
    }
}
