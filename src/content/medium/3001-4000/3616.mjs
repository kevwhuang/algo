// 3616 - Number of Student Replacements

function totalReplacements(ranks) {
    let res = 0, prev = ranks[0], i = 0;
    while (++i < ranks.length) if (ranks[i] < prev) res++, prev = ranks[i];
    return res;
}
