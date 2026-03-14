// 1797 - Design Authentication Manager

class AuthenticationManager {
    constructor(timeToLive) {
        this.tokens = new Map();
        this.timeToLive = timeToLive;
    }
    countUnexpiredTokens(currentTime) {
        for (const id of this.tokens.keys()) {
            if (this.tokens.get(id) > currentTime) continue;
            this.tokens.delete(id);
        }
        return this.tokens.size;
    }
    generate(tokenId, currentTime) {
        this.tokens.set(tokenId, currentTime + this.timeToLive);
    }
    renew(tokenId, currentTime) {
        if (!this.tokens.has(tokenId)) return;
        const expiryTime = this.tokens.get(tokenId);
        if (expiryTime <= currentTime) this.tokens.delete(tokenId);
        else this.tokens.set(tokenId, currentTime + this.timeToLive);
    }
}
