// 831 - Masking Personal Information

function maskPII(s) {
    const idx = s.indexOf('@');
    if (~idx) {
        return `${s[0]}*****${s[idx - 1]}@${s.slice(idx + 1)}`.toLowerCase();
    }
    s = s.replace(/\D/g, '');
    const n = s.length, t = s.slice(-4);
    if (n === 10) return `***-***-${t}`;
    if (n === 11) return `+*-***-***-${t}`;
    if (n === 12) return `+**-***-***-${t}`;
    return `+***-***-***-${t}`;
}
