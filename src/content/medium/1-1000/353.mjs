// 353 - Design Snake Game

class SnakeGame {
    constructor(width, height, food) {
        this.r = 0;
        this.c = 0;
        this.m = height;
        this.n = width;
        this.snake = [];
        this.queue = [];
        this.food = food;
        this.i = 0;
    }
    move(direction) {
        let r = this.r, c = this.c;
        switch (direction) {
            case 'U': r--; break;
            case 'D': r++; break;
            case 'L': c--; break;
            default: c++;
        }
        if (r === -1 || r === this.m || c === -1 || c === this.n) return -1;
        const snake = this.snake, queue = this.queue;
        const tail = snake.length ? [...snake.at(-1)] : [this.r, this.c];
        for (let i = 0, j = queue.length - 1; i < snake.length; i++, j--) {
            switch (queue[j]) {
                case 'U': snake[i][0]--; break;
                case 'D': snake[i][0]++; break;
                case 'L': snake[i][1]--; break;
                default: snake[i][1]++;
            }
        }
        queue.push(direction);
        for (let i = 0; i < snake.length; i++) {
            if (r !== snake[i][0] || c !== snake[i][1]) continue;
            return -1;
        }
        const food = this.food, i = this.i;
        if (i < food.length && r === food[i][0] && c === food[i][1]) {
            snake.push(tail);
            this.i++;
        }
        this.r = r, this.c = c;
        return snake.length;
    }
}
