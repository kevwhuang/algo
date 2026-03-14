// 379 - Design Phone Directory

class PhoneDirectory {
    constructor(maxNumbers) {
        this.available = new Set();
        for (let n = 0; n < maxNumbers; n++) {
            this.available.add(n);
        }
    }
    check(number) {
        return this.available.has(number);
    }
    get() {
        if (this.available.size === 0) return -1;
        const phone = this.available.keys().next().value;
        this.available.delete(phone);
        return phone;
    }
    release(number) {
        this.available.add(number);
    }
}
