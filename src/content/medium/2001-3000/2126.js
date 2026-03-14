// 2126 - Destroying Asteroids

function asteroidsDestroyed(mass, asteroids) {
    const stack = [];
    for (let i = 0; i < asteroids.length; i++) {
        stack.push(asteroids[i]);
        while (stack.length && stack[stack.length - 1] <= mass) {
            mass += stack.pop();
        }
    }
    return stack.length === 0;
}
