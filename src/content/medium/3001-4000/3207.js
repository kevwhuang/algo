// 3207 - Maximum Points After Enemy Battles

function maximumPoints(enemyEnergies, currentEnergy) {
    let min = Infinity;
    const startingEnergy = currentEnergy;
    for (let i = 0; i < enemyEnergies.length; i++) {
        min = Math.min(enemyEnergies[i], min);
        currentEnergy += enemyEnergies[i];
    }
    return startingEnergy < min ? 0 : Math.floor(currentEnergy / min - 1);
}
