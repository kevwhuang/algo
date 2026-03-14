// 1600 - Throne Inheritance

class ThroneInheritance {
    constructor(kingName) {
        this.king = kingName;
        this.kingdom = [];
        this.parents = new Map([[kingName, this.kingdom]]);
        this.grave = new Set();
    }
    birth(parentName, childName) {
        this.parents.get(parentName).push(childName);
        this.parents.set(childName, []);
    }
    death(name) {
        this.grave.add(name);
    }
    getInheritanceOrder() {
        const succession = [];
        this.#dfs(this.king, succession);
        return succession;
    }
    #dfs(name, succession) {
        if (!this.grave.has(name)) succession.push(name);
        const children = this.parents.get(name);
        for (let i = 0; i < children.length; i++) {
            this.#dfs(children[i], succession);
        }
    }
}
