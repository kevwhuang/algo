// 1826 - Faulty Sensor

function badSensor(sensor1, sensor2) {
    const arr1 = sensor1, arr2 = sensor2;
    for (let i = 1; i < arr1.length; i++) {
        if (arr1[i - 1] === arr2[i - 1]) continue;
        if (arr1[i - 1] === arr2[i] && arr1[i] !== arr2[i - 1]) return 1;
        if (arr1[i] === arr2[i - 1] && arr1[i - 1] !== arr2[i]) return 2;
    }
    return -1;
}
