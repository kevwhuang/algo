// 732 - My Calendar III

class MyCalendarThree {
    constructor() {
        this.arr = [];
    }
    book(startTime, endTime) {
        this.#add(startTime, 1);
        this.#add(endTime, -1);
        let res = 1, acc = 0;
        this.arr.forEach(e => res = Math.max(acc += e[1], res));
        return res;
    }
    #add(tgt, val) {
        const arr = this.arr;
        let l = 0, r = arr.length - 1;
        while (l <= r) {
            const m = l + r >> 1;
            if (arr[m][0] < tgt) l = m + 1;
            else if (arr[m][0] > tgt) r = m - 1;
            else return arr[m][1] += val;
        }
        arr.splice(l, 0, [tgt, val]);
    }
}
