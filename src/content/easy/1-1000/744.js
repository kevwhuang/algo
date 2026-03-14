// 744 - Find Smallest Letter Greater Than Target

function nextGreatestLetter(letters, target) {
    let l = 0, r = letters.length - 1;
    while (l <= r) {
        const m = l + r >> 1;
        if (letters[m] <= target) l = m + 1;
        else r = m - 1;
    }
    return letters[l] || letters[0];
}
