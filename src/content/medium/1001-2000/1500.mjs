// 1500 - Design a File Sharing System

class FileSharing {
    constructor(m) {
        this.sys = [null];
        this.next = {};
        this.file = Array.from({ length: m + 1 }, () => ({}));
    }
    join(ownedChunks) {
        let id = this.sys.length;
        for (const next in this.next) {
            id = Number(next);
            delete this.next[next];
            break;
        }
        this.sys[id] = ownedChunks;
        for (let i = 0; i < ownedChunks.length; i++) {
            this.file[ownedChunks[i]][id] = true;
        }
        return id;
    }
    leave(userID) {
        this.next[userID] = true;
        const chunks = this.sys[userID];
        for (let i = 0; i < chunks.length; i++) {
            delete this.file[chunks[i]][userID];
        }
    }
    request(userID, chunkID) {
        const res = [];
        for (const id in this.file[chunkID]) {
            res.push(Number(id));
        }
        if (res.length) {
            this.sys[userID].push(chunkID);
            this.file[chunkID][userID] = true;
        }
        return res;
    }
}
