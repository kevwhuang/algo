// 3822 - Design Order Management System

class OrderManagementSystem {
    constructor() {
        this.A = new Int32Array(2001);
        this.map1 = new Map();
        this.map2 = new Map();
    }
    addOrder(orderId, orderType, price) {
        this.A[orderId] = orderType < 'c' ? price : -price;
        const map = orderType < 'c' ? this.map1 : this.map2;
        if (!map.has(price)) map.set(price, new Set());
        map.get(price).add(orderId);
    }
    cancelOrder(orderId) {
        const map = this.A[orderId] > 0 ? this.map1 : this.map2;
        map.get(Math.abs(this.A[orderId])).delete(orderId);
    }
    getOrdersAtPrice(orderType, price) {
        const map = orderType < 'c' ? this.map1 : this.map2;
        return map.has(price) ? [...map.get(price)] : [];
    }
    modifyOrder(orderId, newPrice) {
        const map = this.A[orderId] > 0 ? this.map1 : this.map2;
        map.get(Math.abs(this.A[orderId])).delete(orderId);
        if (!map.has(newPrice)) map.set(newPrice, new Set());
        map.get(newPrice).add(orderId);
        this.A[orderId] = this.A[orderId] > 0 ? newPrice : -newPrice;
    }
}
