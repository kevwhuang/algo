// 2600 - K Items With the Maximum Sum

function kItemsWithMaximumSum(numOnes, numZeros, numNegOnes, k) {
    if (k <= numOnes) return Math.min(k, numOnes);
    k -= numOnes;
    if (k <= numZeros) return numOnes;
    return numOnes - Math.min(k - numZeros, numNegOnes);
}
