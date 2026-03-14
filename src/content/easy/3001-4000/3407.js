// 3407 - Substring Matching Pattern

function hasMatch(s, p) {
    const [s1, s2] = p.split('*'), idx = s.indexOf(s1);
    return ~idx && s.slice(idx + s1.length).includes(s2);
}
