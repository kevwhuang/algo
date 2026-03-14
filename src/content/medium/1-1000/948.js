// 948 - Bag of Tokens

function bagOfTokensScore(tokens, power) {
    tokens.sort((a, b) => a - b);
    let score = 0, l = 0, r = tokens.length - 1;
    while (l <= r) {
        if (tokens[l] <= power) {
            power -= tokens[l++];
            score++;
        } else {
            if (score && l < r) {
                power += tokens[r];
                score--;
            }
            r--;
        }
    }
    return score;
}
