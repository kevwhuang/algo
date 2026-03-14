// 735 - Asteroid Collision

function asteroidCollision(asteroids) {
    const stack = [];
    loop: for (let i = 0; i < asteroids.length; i++) {
        if (asteroids[i] > 0) {
            stack.push(asteroids[i]);
        } else {
            const asteroid = -asteroids[i];
            while (stack.at(-1) > 0) {
                if (stack.at(-1) < asteroid) {
                    stack.pop();
                } else if (stack.at(-1) > asteroid) {
                    continue loop;
                } else {
                    stack.pop();
                    continue loop;
                }
            }
            stack.push(asteroids[i]);
        }
    }
    return stack;
}
