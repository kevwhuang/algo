// 2273 - Find Resultant Array After Removing Anagrams

function removeAnagrams(words) {
    const res = [];
    for (let i = 0, prev; i < words.length; i++) {
        const cur = words[i].split('').sort().join('');
        if (cur === prev) continue;
        res.push(words[i]);
        prev = cur;
    }
    return res;
}
