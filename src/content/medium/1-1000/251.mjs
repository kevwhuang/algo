// 251 - Flatten 2D Vector

class Vector2D {
    constructor(vec) {
        this.vec = vec;
        this.i = 0;
        this.j = 0;
        this.#forward();
    }
    hasNext() {
        return this.i < this.vec.length;
    }
    next() {
        const val = this.vec[this.i][this.j++];
        if (this.j === this.vec[this.i].length) {
            this.i++;
            this.#forward();
            this.j = 0;
        }
        return val;
    }
    #forward() {
        while (this.hasNext() && !this.vec[this.i].length) this.i++;
    }
}
