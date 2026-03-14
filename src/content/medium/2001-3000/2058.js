// 2058 - Find the Minimum and Maximum Number of Nodes Between Critical Points

function nodesBetweenCriticalPoints(head) {
    const points = [];
    let min = Infinity, i = 0;
    while (head.next && head.next.next) {
        const n1 = head.val;
        const n2 = head.next.val;
        const n3 = head.next.next.val;
        if ((n1 < n2 && n2 > n3) || (n1 > n2 && n2 < n3)) points.push(i);
        head = head.next;
        i++;
        if (points.length < 2) continue;
        const index = points.length - 1;
        min = Math.min(points[index] - points[index - 1], min);
    }
    return min === Infinity ? [-1, -1] : [min, points.at(-1) - points[0]];
}
