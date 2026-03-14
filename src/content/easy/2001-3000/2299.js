// 2299 - Strong Password Checker II

function strongPasswordCheckerII(password) {
    if (password.length < 8) return false;
    let lowercase, uppercase, digit, special;
    for (let i = 0; i < password.length; i++) {
        const cur = password[i];
        if (i && cur === password[i - 1]) return false;
        if ('a' <= cur && cur <= 'z') lowercase = true;
        else if ('A' <= cur && cur <= 'Z') uppercase = true;
        else if ('0' <= cur && cur <= '9') digit = true;
        else if ('!@#$%^&*()-+'.includes(cur)) special = true;
    }
    return Boolean(lowercase && uppercase && digit && special);
}
