// 3648 - Minimum Sensors to Cover Grid

function minSensors(n, m, k) {
    return Math.ceil(m / (k + k + 1)) * Math.ceil(n / (k + k + 1));
}
