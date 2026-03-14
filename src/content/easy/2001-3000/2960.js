// 2960 - Count Tested Devices After Test Operations

function countTestedDevices(batteryPercentages) {
    let devices = 0, penalty = 0;
    for (let i = 0; i < batteryPercentages.length; i++) {
        if (batteryPercentages[i] <= penalty) continue;
        devices++, penalty++;
    }
    return devices;
}
