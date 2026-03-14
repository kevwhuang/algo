// 2374 - Node With Highest Edge Score

function edgeScore(edges) {
    const scores = new Array(edges.length).fill(0);
    let max = -Infinity;
    for (let i = 0; i < edges.length; i++) {
        scores[edges[i]] += i;
        max = Math.max(scores[edges[i]], max);
    }
    for (let i = 0; i < edges.length; i++) {
        if (scores[i] === max) return i;
    }
}
