// 649 - Dota2 Senate

function predictPartyVictory(senate) {
    const radiants = [], dires = [];
    for (let i = 0; i < senate.length; i++) {
        senate[i] === 'R' ? radiants.push(i) : dires.push(i);
    }
    let index = senate.length;
    while (radiants.length && dires.length) {
        const firstR = radiants.shift();
        const firstD = dires.shift();
        if (firstR < firstD) radiants.push(index++);
        else dires.push(index++);
    }
    return radiants.length ? 'Radiant' : 'Dire';
}
