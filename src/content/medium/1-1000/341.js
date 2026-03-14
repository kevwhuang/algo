// 341 - Flatten Nested List Iterator

class NestedIterator {
    constructor(nestedList) {
        this.list = this.#flat(nestedList);
        this.i = 0;
    }
    hasNext() {
        return this.i !== this.list.length;
    }
    next() {
        return this.list[this.i++];
    }
    #flat(list) {
        const arr = [];
        for (let i = 0; i < list.length; i++) {
            if (list[i].isInteger()) arr.push(list[i].getInteger());
            else arr.push(...this.#flat(list[i].getList()));
        }
        return arr;
    }
}
