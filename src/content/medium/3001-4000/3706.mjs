// 3706 - Maximum Distance Between Unequal Words in Array II

function maxDistance(words) {
    const s = words.at(-1), t = words[0], n = words.length;
    let l = 0, r = n - 1;
    while (l < n && words[l] === s) l++;
    while (~r && words[r] === t) r--;
    return Math.max(n - l, r + 1);
}
