// 355 - Design Twitter

class Twitter {
    constructor() {
        this.M = Array.from({ length: 501 }, () => []);
        this.arr = Array.from({ length: 501 }, () => new Set());
        this.dict = new Uint16Array(10001);
        this.acc = 0;
    }
    follow(followerId, followeeId) {
        this.arr[followerId].add(followeeId);
    }
    getNewsFeed(userId) {
        const res = [...this.M[userId]];
        this.arr[userId].forEach(e => res.push(...this.M[e]));
        res.sort((a, b) => this.dict[b] - this.dict[a]);
        return res.slice(0, 10);
    }
    postTweet(userId, tweetId) {
        this.M[userId].push(tweetId);
        this.dict[tweetId] = this.acc++;
    }
    unfollow(followerId, followeeId) {
        this.arr[followerId].delete(followeeId);
    }
}
