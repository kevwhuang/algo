// 2582 - Pass the Pillow

function passThePillow(n, time) {
    const delta = time % (n - 1);
    return Math.floor(time / (n - 1)) % 2 ? n - delta : delta + 1;
}
