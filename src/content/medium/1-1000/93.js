// 93 - Restore IP Addresses

function restoreIpAddresses(s) {
    function partition(str) {
        if (str.length === 0) return [];
        if (str[0] === '0') return ['0'];
        if (str.length === 1) return [str];
        if (str.length === 2) return [str[0], str];
        return [str[0], str[0] + str[1], str];
    }
    if (s.length < 4 || s.length > 12) return [];
    const ips = [];
    const a = partition(s.slice(0, 3));
    for (let i = 0; i < a.length; i++) {
        if (+a[i] > 255) continue;
        const aa = a[i].length;
        const b = partition(s.slice(aa, aa + 3));
        for (let j = 0; j < b.length; j++) {
            if (+b[j] > 255) continue;
            const bb = aa + b[j].length;
            const c = partition(s.slice(bb, bb + 3));
            for (let k = 0; k < c.length; k++) {
                if (+c[k] > 255) continue;
                const cc = bb + c[k].length;
                const d = partition(s.slice(cc, cc + 3));
                for (let l = 0; l < d.length; l++) {
                    if (+d[l] > 255) continue;
                    if (cc + d[l].length !== s.length) continue;
                    ips.push(`${a[i]}.${b[j]}.${c[k]}.${d[l]}`);
                }
            }
        }
    }
    return ips;
}
