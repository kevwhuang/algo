// 422 - Valid Word Square

function validWordSquare(words) {
    for (let i = 0; i < words.length; i++) {
        const s = words[i];
        for (let j = 0; j < s.length; j++) {
            if (!words[j] || s[j] !== words[j][i]) return false;
        }
    }
    return true;
}
