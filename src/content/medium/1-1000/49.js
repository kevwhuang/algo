// 49 - Group Anagrams

function groupAnagrams(strs) {
    const map = new Map();
    const dict = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41];
    dict.push(43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101);
    for (let i = 0; i < strs.length; i++) {
        let key = 1, j = -1;
        const s = strs[i];
        while (++j < s.length) key *= dict[s.charCodeAt(j) - 97];
        if (!map.has(key)) map.set(key, []);
        map.get(key).push(s);
    }
    return [...map.values()];
}
