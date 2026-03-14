// 1244 - Design a Leaderboard

class Leaderboard {
    constructor() {
        this.players = new Map();
    }
    addScore(playerId, score) {
        this.players.set(playerId, (this.players.get(playerId) || 0) + score);
    }
    reset(playerId) {
        this.players.delete(playerId);
    }
    top(K) {
        const scores = [...this.players.values()].sort((a, b) => b - a);
        let sum = 0;
        for (let i = 0; i < K; i++) {
            sum += scores[i];
        }
        return sum;
    }
}
