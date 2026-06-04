// 3941. Password Strength

function passwordStrength(password) {
    let res = 0;
    const seen = new Set();
    for (let i = 0; i < password.length; i++) {
        const s = password[i];
        if (seen.has(s)) continue;
        seen.add(s);
        if (s >= 'a' && s <= 'z') res++;
        else if (s >= 'A' && s <= 'Z') res += 2;
        else if (s >= '0' && s <= '9') res += 3;
        else res += 5;
    }
    return res;
}
