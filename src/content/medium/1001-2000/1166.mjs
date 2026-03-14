// 1166 - Design File System

class FileSystem {
    constructor() {
        this.dir = new Map();
    }
    createPath(path, value) {
        const dir = this.dir;
        if (dir.has(path)) return false;
        let str = path.slice(0, path.lastIndexOf('/'));
        while (str.length) {
            if (!dir.has(str)) return false;
            str = str.slice(0, str.lastIndexOf('/'));
        }
        dir.set(path, value);
        return true;
    }
    get(path) {
        return this.dir.get(path) || -1;
    }
}
