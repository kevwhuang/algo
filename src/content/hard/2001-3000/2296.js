// 2296 - Design a Text Editor

class TextEditor {
    constructor() {
        this.S1 = [];
        this.S2 = [];
    }
    addText(text) {
        for (let i = 0; i < text.length; i++) {
            this.S1.push(text[i]);
        }
    }
    cursorLeft(k) {
        while (k-- && this.S1.length) this.S2.push(this.S1.pop());
        let res = '', i = this.S1.length;
        while (res.length < 10 && ~--i) res = this.S1[i] + res;
        return res;
    }
    cursorRight(k) {
        while (k-- && this.S2.length) this.S1.push(this.S2.pop());
        let res = '', i = this.S1.length;
        while (res.length < 10 && ~--i) res = this.S1[i] + res;
        return res;
    }
    deleteText(k) {
        const kk = k;
        while (k-- && this.S1.length) this.S1.pop();
        return kk - k - 1;
    }
}
