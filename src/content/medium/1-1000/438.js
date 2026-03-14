// 438 - Find All Anagrams in a String

function findAnagrams(s, p) {
    function isAnagram() {
        for (let i = 0; i < 26; i++) {
            if (bucket1[i] !== bucket2[i]) return false;
        }
        return true;
    }
    const bucket1 = new Array(26).fill(0);
    const bucket2 = [...bucket1];
    for (let i = 0; i < p.length; i++) {
        bucket1[p.charCodeAt(i) - 97]++;
        bucket2[s.charCodeAt(i) - 97]++;
    }
    const res = [];
    if (isAnagram()) res.push(0);
    for (let i = p.length; i < s.length; i++) {
        bucket2[s.charCodeAt(i) - 97]++;
        bucket2[s.charCodeAt(i - p.length) - 97]--;
        if (isAnagram()) res.push(i - p.length + 1);
    }
    return res;
}
