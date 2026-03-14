// 1769 - Minimum Number of Operations to Move All Balls to Each Box

function minOperations(boxes) {
    const ops = new Array(boxes.length);
    ops[0] = 0;
    let countLeft = Number(boxes[0] === '1'), countRight = 0;
    for (let i = 1; i < boxes.length; i++) {
        if (boxes[i] === '0') continue;
        ops[0] += i;
        countRight++;
    }
    for (let i = 1; i < boxes.length; i++) {
        ops[i] = ops[i - 1] + countLeft - countRight;
        if (boxes[i] === '0') continue;
        countLeft++;
        countRight--;
    }
    return ops;
}
