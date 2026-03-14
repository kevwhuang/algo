// 2502 - Design Memory Allocator

class Allocator {
    constructor(n) {
        this.ram = new Array(n).fill(false);
        this.refs = new Map();
    }
    allocate(size, mID) {
        let i = -1;
        while (++i < this.ram.length) {
            let j = i;
            while (i - j < size && this.ram[i] === false) i++;
            if (i - j !== size) continue;
            while (j < i) this.ram[j++] = true;
            if (!this.refs.has(mID)) this.refs.set(mID, []);
            this.refs.get(mID).push([i - size, i - 1]);
            return i - size;
        }
        return -1;
    }
    free(mID) {
        if (!this.refs.has(mID)) return 0;
        let units = 0;
        const blocks = this.refs.get(mID);
        for (let i = 0; i < blocks.length; i++) {
            const start = blocks[i][0], end = blocks[i][1];
            for (let j = start; j <= end; j++) {
                this.ram[j] = false;
            }
            units += end - start + 1;
        }
        this.refs.delete(mID);
        return units;
    }
}
