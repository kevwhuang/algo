// 58 - Length of Last Word

function lengthOfLastWord(s) {
    s = s.trim();
    const idx = s.lastIndexOf(' ');
    return idx === -1 ? s.length : s.length - idx - 1;
}
