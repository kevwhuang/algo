// 2910 - Minimum Number of Groups to Create a Valid Assignment

function minGroupsForValidAssignment(balls) {
    const map = new Map();
    for (let i = 0; i < balls.length; i++) {
        map.set(balls[i], (map.get(balls[i]) ?? 0) + 1);
    }
    let size = Math.min(...map.values()) + 2;
    L: while (--size >= 2) {
        let boxes = 0;
        for (const freq of map.values()) {
            const count = freq / size >> 0;
            const rem = freq % size;
            if (rem === 0) boxes += count;
            else if (count >= size - rem - 1) boxes += count + 1;
            else continue L;
        }
        return boxes;
    }
}
