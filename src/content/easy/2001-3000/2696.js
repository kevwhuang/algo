// 2696 - Minimum String Length After Removing Substrings

function minLength(s) {
    while (true) {
        const len = s.length;
        s = s.replace(/AB|CD/, '');
        if (s.length === len) break;
    }
    return s.length;
}
