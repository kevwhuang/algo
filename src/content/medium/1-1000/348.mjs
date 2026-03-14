// 348 - Design Tic Tac Toe

class TicTacToe {
    constructor(n) {
        this.rows = new Array(n).fill(0);
        this.cols = new Array(n).fill(0);
        this.diag1 = 0;
        this.diag2 = 0;
        this.n = n;
    }
    move(row, col, player) {
        const inc = player === 1 ? 1 : -1;
        this.rows[row] += inc;
        if (Math.abs(this.rows[row]) === this.n) return player;
        this.cols[col] += inc;
        if (Math.abs(this.cols[col]) === this.n) return player;
        if (row === col) {
            this.diag1 += inc;
            if (Math.abs(this.diag1) === this.n) return player;
        }
        if (row === this.n - col - 1) {
            this.diag2 += inc;
            if (Math.abs(this.diag2) === this.n) return player;
        }
        return 0;
    }
}
