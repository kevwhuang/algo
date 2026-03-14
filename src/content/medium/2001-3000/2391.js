// 2391 - Minimum Amount of Time to Collect Garbage

function garbageCollection(garbage, travel) {
    for (let i = 1; i < travel.length; i++) {
        travel[i] += travel[i - 1];
    }
    let time = garbage[0].length;
    let doneM = false, doneP = false, doneG = false;
    for (let i = garbage.length - 1; i > 0; i--) {
        const type = garbage[i];
        time += type.length;
        if (doneM && doneP && doneG) continue;
        for (let j = 0; j < type.length; j++) {
            if (type[j] === 'M') {
                if (!doneM) {
                    time += travel[i - 1];
                    doneM = true;
                }
            } else if (type[j] === 'P') {
                if (!doneP) {
                    time += travel[i - 1];
                    doneP = true;
                }
            } else {
                if (!doneG) {
                    time += travel[i - 1];
                    doneG = true;
                }
            }
        }
    }
    return time;
}
