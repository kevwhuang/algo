// 388 - Longest Absolute File Path

function lengthLongestPath(input) {
    input = input.split('\n');
    let max = 0;
    const stack = [];
    for (let i = 0; i < input.length; i++) {
        let tabs = 0;
        while (input[i][tabs] === '\t') tabs++;
        while (tabs < stack.length) stack.pop();
        if (!input[i].includes('.')) stack.push(input[i].length - tabs);
        else {
            let sum = stack.reduce((s, e) => s + e, 0);
            sum += stack.length + input[i].length - tabs;
            max = Math.max(sum, max);
        }
    }
    return max;
}
