// 1541 - Minimum Insertions to Balance a Parentheses String

function minInsertions(s) {
    let insertions = 0, open = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') open++;
        else {
            if (s[i + 1] === ')') {
                if (open) open--;
                else insertions++;
                i++;
            } else {
                if (open) insertions++, open--;
                else insertions += 2;
            }
        }
    }
    return insertions + open + open;
}
