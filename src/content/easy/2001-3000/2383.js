// 2383 - Minimum Hours of Training to Win a Competition

function minNumberOfHours(initialEnergy, initialExperience, energy, experience) {
    let need = 0, acc = initialExperience;
    for (let i = 0; i < experience.length; i++) {
        if (acc <= experience[i]) {
            need += experience[i] - acc + 1;
            acc += experience[i] - acc + 1;
        }
        acc += experience[i];
    }
    const sum = energy.reduce((s, e) => s + e);
    return Math.max(sum - initialEnergy + 1, 0) + need;
}
