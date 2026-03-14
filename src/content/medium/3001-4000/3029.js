// 3029 - Minimum Time to Revert Word to Initial State I

function minimumTimeToInitialState(word, k) {
    let time = 1;
    for (let i = k; i < word.length; i += k) {
        let match = true;
        for (let j = i; j < word.length; j++) {
            if (word[j - i] === word[j]) continue;
            match = false;
            break;
        }
        if (match) break;
        time++;
    }
    return time;
}
