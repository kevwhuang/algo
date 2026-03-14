// 1146 - Snapshot Array

class SnapshotArray {
    constructor(length) {
        this.snaps = [];
        this.history = {};
        this.modified = false;
    }
    get(index, snap_id) {
        return this.snaps[snap_id][index] ?? 0;
    }
    set(index, val) {
        this.history[index] = val;
        this.modified = true;
    }
    snap() {
        if (this.modified || this.snaps.length === 0) {
            this.snaps.push({ ...this.history });
            this.modified = false;
        } else {
            this.snaps.push(this.snaps[this.snaps.length - 1]);
        }
        return this.snaps.length - 1;
    }
}
