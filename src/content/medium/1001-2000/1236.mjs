// 1236 - Web Crawler

function crawl(startUrl, htmlParser) {
    function getHost(url) {
        let idx = url.indexOf('/', 7);
        if (idx === -1) idx = url.length;
        return url.slice(0, idx);
    }
    const res = new Set([startUrl]);
    const host = getHost(startUrl);
    let queue = [startUrl];
    while (queue.length) {
        const nextQueue = [];
        for (let i = 0; i < queue.length; i++) {
            const urls = htmlParser.getUrls(queue[i]);
            for (let j = 0; j < urls.length; j++) {
                const url = urls[j];
                if (getHost(url) !== host) continue;
                if (res.has(url)) continue;
                res.add(url);
                nextQueue.push(url);
            }
        }
        queue = nextQueue;
    }
    return [...res];
}
