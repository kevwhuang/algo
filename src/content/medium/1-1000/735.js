// 735. Asteroid Collision

function asteroidCollision(asteroids) {
    const A = asteroids, S = [];
    for (let i = 0; i < A.length; i++) {
        const cur = A[i];
        if (cur > 0 && S.push(cur)) continue;
        let flag;
        while (S.at(-1) > 0 && !flag) {
            if (S.at(-1) >= -cur) flag = true;
            if (S.at(-1) <= -cur) S.pop();
        }
        if (!flag) S.push(cur);
    }
    return S;
}
