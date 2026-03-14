// 1964 - Find the Longest Valid Obstacle Course at Each Position

function longestObstacleCourseAtEachPosition(obstacles) {
    const dp = [];
    for (let i = 0; i < obstacles.length; i++) {
        let l = 0, r = dp.length - 1;
        while (l <= r) {
            const m = l + r >> 1;
            if (dp[m] <= obstacles[i]) l = m + 1;
            else r = m - 1;
        }
        dp[l] = obstacles[i], obstacles[i] = l + 1;
    }
    return obstacles;
}
