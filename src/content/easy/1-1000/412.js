// 412 - Fizz Buzz

function fizzBuzz(n) {
    const res = [];
    for (let i = 1; i <= n; i++) {
        if (i % 15 === 0) res.push('FizzBuzz');
        else if (i % 3 === 0) res.push('Fizz');
        else if (i % 5 === 0) res.push('Buzz');
        else res.push(String(i));
    }
    return res;
}
