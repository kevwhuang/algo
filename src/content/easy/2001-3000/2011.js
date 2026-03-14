// 2011 - Final Value of Variable After Performing Operations

function finalValueAfterOperations(operations) {
    let x = 0;
    for (let i = 0; i < operations.length; i++) {
        const cur = operations[i];
        cur === '++X' || cur === 'X++' ? x++ : x--;
    }
    return x;
}
