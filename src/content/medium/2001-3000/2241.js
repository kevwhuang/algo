// 2241 - Design an ATM Machine

class ATM {
    constructor() {
        this.atm = [0, 0, 0, 0, 0];
        this.denominations = [20, 50, 100, 200, 500];
    }
    deposit(banknotesCount) {
        for (let i = 0; i < 5; i++) {
            this.atm[i] += banknotesCount[i];
        }
    }
    withdraw(amount) {
        const notes = [0, 0, 0, 0, 0];
        for (let i = 4; i >= 0; i--) {
            const cur = this.denominations[i];
            if (amount < cur || this.atm[i] === 0) continue;
            const count = Math.min(this.atm[i], amount / cur >> 0);
            notes[i] += count;
            amount -= cur * count;
        }
        if (amount) return [-1];
        for (let i = 0; i < 5; i++) {
            this.atm[i] -= notes[i];
        }
        return notes;
    }
}
