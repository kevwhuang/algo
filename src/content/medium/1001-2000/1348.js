// 1348 - Tweet Counts Per Frequency

class TweetCounts {
    constructor() {
        this.tweets = {};
        this.intervals = { minute: 60, hour: 3600, day: 86400 };
    }
    getTweetCountsPerFrequency(freq, tweetName, startTime, endTime) {
        const interval = this.intervals[freq];
        const size = Math.ceil((endTime - startTime + 1) / interval);
        const res = new Array(size).fill(0);
        const times = this.tweets[tweetName];
        if (!times) return res;
        for (let i = 0; i < times.length; i++) {
            if (times[i] < startTime || endTime < times[i]) continue;
            res[(times[i] - startTime) / interval >> 0]++;
        }
        return res;
    }
    recordTweet(tweetName, time) {
        this.tweets[tweetName] ??= [];
        this.tweets[tweetName].push(time);
    }
}
