// 811 - Subdomain Visit Count

function subdomainVisits(cpdomains) {
    const map = new Map();
    for (let i = 0, rep, url; i < cpdomains.length; i++) {
        [rep, url] = cpdomains[i].split(' ');
        rep = Number(rep);
        while (url.includes('.')) {
            map.set(url, (map.get(url) || 0) + rep);
            url = url.slice(url.indexOf('.') + 1);
        }
        map.set(url, (map.get(url) || 0) + rep);
    }
    const res = [];
    for (const e of map.entries()) {
        res.push(`${e[1]} ${e[0]}`);
    }
    return res;
}
