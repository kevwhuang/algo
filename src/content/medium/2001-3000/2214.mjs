// 2214 - Minimum Health to Beat Game

function minimumHealth(damage, armor) {
    let health = 1, max = 0;
    for (let i = 0; i < damage.length; i++) {
        health += damage[i];
        max = Math.max(damage[i], max);
    }
    return health - max + Math.max(0, max - armor);
}
