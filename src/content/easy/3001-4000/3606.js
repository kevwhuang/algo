// 3606 - Coupon Code Validator

function validateCoupons(code, businessLine, isActive) {
    const B = {};
    B.electronics = [], B.grocery = [], B.pharmacy = [], B.restaurant = [];
    for (let i = 0; i < code.length; i++) {
        const s = code[i], t = businessLine[i];
        if (s && !~s.search(/\W/) && B[t] && isActive[i]) B[t].push(s);
    }
    const res = [];
    for (const key in B) {
        res.push(...B[key].sort());
    }
    return res;
}
