// 1604 - Alert Using Same Keycard Three or More Times in a One Hour Period

function alertNames(keyName, keyTime) {
    const alerts = {};
    for (let i = 0; i < keyName.length; i++) {
        const time = +keyTime[i].slice(0, 2) * 60 + +keyTime[i].slice(3);
        if (!(keyName[i] in alerts)) alerts[keyName[i]] = [time];
        else alerts[keyName[i]].push(time);
    }
    const res = [];
    for (const worker in alerts) {
        const times = alerts[worker].sort((a, b) => a - b);
        for (let i = 2; i < times.length; i++) {
            if (times[i] - times[i - 2] > 60) continue;
            res.push(worker);
            break;
        }
    }
    return res.sort();
}
