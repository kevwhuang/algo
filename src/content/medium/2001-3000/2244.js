// 2244 - Minimum Rounds to Complete All Tasks

function minimumRounds(tasks) {
    const map = new Map();
    for (let i = 0; i < tasks.length; i++) {
        map.set(tasks[i], (map.get(tasks[i]) || 0) + 1);
    }
    let rounds = 0;
    for (const count of map.values()) {
        if (count === 1) return -1;
        rounds += Math.ceil(count / 3);
    }
    return rounds;
}
