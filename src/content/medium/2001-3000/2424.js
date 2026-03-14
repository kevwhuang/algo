// 2424 - Longest Uploaded Prefix

class LUPrefix {
    constructor(n) {
        this.uploaded = new Set();
        this.prefix = 0;
    }
    longest() {
        while (this.uploaded.has(this.prefix + 1)) this.prefix++;
        return this.prefix;
    }
    upload(video) {
        this.uploaded.add(video);
    }
}
