// 2303 - Calculate Amount Paid in Taxes

function calculateTax(brackets, income) {
    let tax = 0;
    for (let i = 0; i < brackets.length; i++) {
        const prev = i ? brackets[i - 1][0] : 0;
        if (income <= brackets[i][0]) {
            return tax + (income - prev) * brackets[i][1] / 100;
        }
        tax += (brackets[i][0] - prev) * brackets[i][1] / 100;
    }
    return tax;
}
