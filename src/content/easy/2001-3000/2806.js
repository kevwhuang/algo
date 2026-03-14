// 2806 - Account Balance After Rounded Purchase

function accountBalanceAfterPurchase(purchaseAmount) {
    return 100 - Math.round(purchaseAmount / 10) * 10;
}
