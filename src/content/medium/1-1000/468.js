// 468 - Validate IP Address

function validIPAddress(queryIP) {
    if (queryIP.includes('.')) {
        queryIP = queryIP.split('.');
        if (queryIP.length !== 4) return 'Neither';
        for (let i = 0; i < 4; i++) {
            const num = Number(queryIP[i]);
            if (num > 255 || String(num).length !== queryIP[i].length) {
                return 'Neither';
            }
        }
        return 'IPv4';
    }
    queryIP = queryIP.split(':');
    if (queryIP.length !== 8) return 'Neither';
    const re = /[0-9ABCDEFabcdef]+/;
    for (let i = 0; i < 8; i++) {
        const str = queryIP[i].match(re)?.[0];
        if (!str) return 'Neither';
        if (str.length > 4 || str.length !== queryIP[i].length) {
            return 'Neither';
        }
    }
    return 'IPv6';
}
