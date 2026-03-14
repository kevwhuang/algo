// 1429 - First Unique Number

class FirstUnique {
    constructor(nums) {
        this.unique = new Set();
        this.dups = new Set();
        for (let i = 0; i < nums.length; i++) {
            this.add(nums[i]);
        }
    }
    add(value) {
        if (this.unique.has(value)) {
            this.unique.delete(value);
            this.dups.add(value);
        } else if (!this.dups.has(value)) {
            this.unique.add(value);
        }
    }
    showFirstUnique() {
        return !this.unique.size ? -1 : this.unique.keys().next().value;
    }
}
