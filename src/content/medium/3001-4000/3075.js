// 3075 - Maximize Happiness of Selected Children

function maximumHappinessSum(happiness, k) {
    happiness.sort((a, b) => b - a);
    let sum = 0;
    const bound = Math.min(happiness.length, k);
    for (let i = 0; i < bound; i++) {
        sum += Math.max(0, happiness[i] - i);
    }
    return sum;
}
