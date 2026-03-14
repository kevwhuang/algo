// 1953 - Maximum Number of Weeks for Which You Can Work

function numberOfWeeks(milestones) {
    let sum = 0, max = -Infinity;
    for (let i = 0; i < milestones.length; i++) {
        sum += milestones[i];
        max = Math.max(milestones[i], max);
    }
    return Math.min(sum, 2 * (sum - max) + 1);
}
