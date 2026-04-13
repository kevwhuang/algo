// 3894. Traffic Signal Color

function trafficSignal(timer) {
    if (timer === 0) return 'Green';
    if (timer === 30) return 'Orange';
    return timer > 30 && timer <= 90 ? 'Red' : 'Invalid';
}
