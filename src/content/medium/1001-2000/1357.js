// 1357 - Apply Discount Every N Orders

class Cashier {
    constructor(n, discount, products, prices) {
        this.items = {};
        this.discount = discount;
        this.n = n;
        this.id = 1;
        for (let i = 0; i < products.length; i++) {
            this.items[products[i]] = prices[i];
        }
    }
    getBill(product, amount) {
        let bill = 0;
        for (let i = 0; i < product.length; i++) {
            bill += this.items[product[i]] * amount[i];
        }
        if (this.id++ % this.n === 0) {
            bill *= 1 - this.discount / 100;
        }
        return bill;
    }
}
