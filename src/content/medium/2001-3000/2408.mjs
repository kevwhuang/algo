// 2408 - Design SQL

class SQL {
    constructor(names, columns) {
        this.db = new Map();
        for (let i = 0; i < names.length; i++) {
            const map = new Map([['id', 0], ['size', columns[i]]]);
            this.db.set(names[i], map);
        }
    }
    exp(name) {
        const res = [], table = this.db.get(name) ?? [];
        for (const row of table) {
            if (!isNaN(row[0])) res.push(`${row[0]},${row[1].join()}`);
        }
        return res;
    }
    ins(name, row) {
        const table = this.db.get(name);
        if (!table || row.length !== table.get('size')) return false;
        const id = table.get('id') + 1;
        table.set('id', id).set(id, row);
        return true;
    }
    rmv(name, rowId) {
        this.db.get(name)?.delete(rowId);
    }
    sel(name, rowId, columnId) {
        const table = this.db.get(name);
        if (!table) return '<null>';
        const row = table.get(rowId);
        return row && columnId <= row.length ? row[columnId - 1] : '<null>';
    }
}
