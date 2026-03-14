// 830 - Positions of Large Groups

function largeGroupPositions(s) {
    const groups = [];
    let currentLetter, currentCount;
    for (let i = 0; i <= s.length; i++) {
        if (s[i] === currentLetter) currentCount++;
        else {
            currentCount >= 3 && groups.push([i - currentCount, i - 1]);
            currentLetter = s[i];
            currentCount = 1;
        }
    }
    return groups;
}
