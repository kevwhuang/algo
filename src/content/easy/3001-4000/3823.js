// 3823 - Reverse Letters Then Special Characters in a String

function reverseByType(s) {
    let t1 = '', t2 = '';
    for (let i = 0; i < s.length; i++) {
        if (s[i] >= 'a' && s[i] <= 'z') t1 += s[i];
        else t2 += s[i];
    }
    let res = '';
    for (let i = 0, j = t1.length - 1, k = t2.length - 1; i < s.length; i++) {
        res += s[i] >= 'a' && s[i] <= 'z' ? t1[j--] : t2[k--];
    }
    return res;
}
