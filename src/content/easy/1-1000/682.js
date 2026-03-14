// 682 - Baseball Game

function calPoints(operations) {
    const scores = [];
    for (let i = 0; i < operations.length; i++) {
        const op = operations[i];
        if (op === '+') scores.push(scores.at(-1) + scores.at(-2));
        else if (op === 'D') scores.push(scores.at(-1) * 2);
        else if (op === 'C') scores.pop();
        else scores.push(Number(op));
    }
    return scores.reduce((s, e) => s + e, 0);
}
