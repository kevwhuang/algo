// 1418 - Display Table of Food Orders in a Restaurant

function displayTable(orders) {
    let tables = new Set(), foods = new Set();
    for (let i = 0; i < orders.length; i++) {
        tables.add(orders[i][1]);
        foods.add(orders[i][2]);
    }
    tables = [...tables].sort((a, b) => a - b);
    foods = [...foods].sort();
    const display = [['Table', ...foods]];
    for (let i = 0, arr; i < tables.length; i++) {
        arr = new Array(foods.length + 1).fill(0);
        arr[0] = tables[i];
        display.push(arr);
    }
    tables = Object.fromEntries(tables.map((e, i) => [e, i + 1]));
    foods = Object.fromEntries(foods.map((e, i) => [e, i + 1]));
    for (let i = 0; i < orders.length; i++) {
        ++display[tables[orders[i][1]]][foods[orders[i][2]]];
    }
    for (let r = 1; r < display.length; r++) {
        for (let c = 1; c < display[0].length; c++) {
            display[r][c] = String(display[r][c]);
        }
    }
    return display;
}
