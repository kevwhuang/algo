// 420 - Strong Password Checker

function strongPasswordChecker(password) {
    const arr = [], s = password, n = s.length;
    for (let i = 0; i < n; i++) {
        let j = i + 1;
        while (j < n && j - i < 5 && s[j] === s[i]) j++;
        if (j - i > 2) arr.push(j - (i += 2));
    }
    arr.sort((a, b) => b - a);
    let acc = n - 20;
    while (acc >= arr.at(-1)) acc -= arr.pop();
    const d = 3 - /[a-z]/.test(s) - /[A-Z]/.test(s) - /\d/.test(s);
    return Math.max(6 - n, Math.max(arr.length, d) + Math.max(0, n - 20));
}
