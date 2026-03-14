// 2756 - Query Batching

class QueryBatcher {
    constructor(queryMultiple, t) {
        this.fn = queryMultiple;
        this.arr1 = [];
        this.arr2 = [];
        this.flag = true;
        this.k = t;
    }
    async getValue(key) {
        if (this.flag) return this.#block() || await this.fn([key]);
        return this.arr1.push(key) && new Promise(res => this.arr2.push(res));
    }
    #block() {
        this.flag = false;
        setTimeout(() => this.flag = true, this.k);
        setTimeout(() => this.arr1.length && this.#execute(), this.k);
    }
    async #execute() {
        this.#block();
        const arr1 = this.arr1, arr2 = this.arr2;
        this.arr1 = [], this.arr2 = [];
        (await this.fn(arr1)).forEach((e, i) => arr2[i](e));
    }
}
