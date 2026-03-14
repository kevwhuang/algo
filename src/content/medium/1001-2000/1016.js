// 1016 - Binary String With Substrings Representing 1 to N

function queryString(s, n) {
    while (n) {
        if (!s.includes(n.toString(2))) return false;
        n--;
    }
    return true;
}
