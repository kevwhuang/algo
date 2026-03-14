// 1823 - Find the Winner of the Circular Game

function findTheWinner(n, k) {
    const circle = Array.from({ length: n }, (_, i) => i);
    let i = 0;
    while (circle.length > 1) {
        i = (i + k - 1) % circle.length;
        circle.splice(i, 1);
    }
    return circle[0] + 1;
}
