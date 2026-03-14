// 751 - IP to CIDR

function ipToCIDR(ip, n) {
    ip = ip.split('.').reduce((s, group) => 256 * s + Number(group));
    const cidr = [];
    while (n) {
        const exp = 31 - Math.max(Math.clz32(ip & -ip) % 32, Math.clz32(n));
        const groups = [24, 16, 8, 0].map(bits => (ip >>> bits) % 256);
        cidr.push(`${groups.join('.')}/${32 - exp}`);
        ip += 2 ** exp, n -= 2 ** exp;
    }
    return cidr;
}
