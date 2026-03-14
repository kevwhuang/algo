// 640 - Solve the Equation

function solveEquation(equation) {
    function replacer(match) {
        if (match === '+') return '-';
        if (match === '-') return '+';
    }
    if (equation[0] !== '-') equation = `+${equation}`;
    const index = equation.indexOf('=');
    let right = equation.slice(index + 1);
    if (right[0] !== '-') right = `+${right}`;
    right = right.replace(/[+-]/g, replacer);
    equation = equation.slice(0, index) + right;
    equation = equation.replaceAll('+x', '+1x');
    equation = equation.replaceAll('-x', '-1x');
    let coefficients = 0, constants = 0;
    const terms = equation.match(/[+-][\d]+[x]?/g);
    for (let i = 0; i < terms.length; i++) {
        const term = terms[i];
        if (isNaN(term)) coefficients += Number(term.slice(0, term.length - 1));
        else constants -= Number(term);
    }
    if (coefficients) return `x=${constants / coefficients}`;
    return constants ? 'No solution' : 'Infinite solutions';
}
