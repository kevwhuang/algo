// 1052 - Grumpy Bookstore Owner

function maxSatisfied(customers, grumpy, minutes) {
    let satisfied = 0;
    for (let i = 0; i < customers.length; i++) {
        if (grumpy[i] === 1) continue;
        satisfied += customers[i];
        customers[i] = 0;
    }
    let window = 0;
    for (let i = 0; i < minutes; i++) {
        window += customers[i];
    }
    let convert = window;
    for (let i = minutes; i < customers.length; i++) {
        window += customers[i] - customers[i - minutes];
        convert = Math.max(window, convert);
    }
    return satisfied + convert;
}
