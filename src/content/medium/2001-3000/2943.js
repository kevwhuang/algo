// 2943 - Maximize Area of Square Hole in Grid

function maximizeSquareHoleArea(n, m, hBars, vBars) {
    function count(arr) {
        let len = 1, running = 1;
        for (let i = 1; i < arr.length; i++) {
            if (arr[i - 1] + 1 === arr[i]) running++;
            else running = 1;
            if (running > len) len = running;
        }
        return len + 1;
    }
    hBars.sort((a, b) => a - b);
    vBars.sort((a, b) => a - b);
    return Math.min(count(hBars), count(vBars)) ** 2;
}
