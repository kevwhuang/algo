// 3074 - Apple Redistribution Into Boxes

function minimumBoxes(apple, capacity) {
    capacity.sort((a, b) => b - a);
    let i = 0, acc = apple.reduce((s, e) => s + e);
    while (i < capacity.length && acc > 0) acc -= capacity[i++];
    return i;
}
