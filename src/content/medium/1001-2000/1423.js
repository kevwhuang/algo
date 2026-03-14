// 1423 - Maximum Points You Can Obtain From Cards

function maxScore(cardPoints, k) {
    let window = 0;
    const len = cardPoints.length;
    for (let l = len - k; l < len; l++) {
        window += cardPoints[l];
    }
    let max = window;
    for (let l = len - k, r = 0; r < k; r++) {
        window = window + cardPoints[r] - cardPoints[l];
        max = Math.max(window, max);
        if (++l === len) l = 0;
    }
    return max;
}
