// 2515 - Shortest Distance to Target String in a Circular Array

function closetTarget(words, target, startIndex) {
    let l = startIndex, r = startIndex;
    for (let dist = 0; dist < words.length; dist++) {
        if (words[l] === target || words[r] === target) return dist;
        l === 0 ? l = words.length - 1 : l--;
        r === words.length - 1 ? r = 0 : r++;
    }
    return -1;
}
