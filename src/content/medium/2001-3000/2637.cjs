// 2637 - Promise Time Limit

function timeLimit(fn, t) {
    const s = 'Time Limit Exceeded';
    const promise = new Promise((_, rej) => setTimeout(() => rej(s), t));
    return (...args) => Promise.race([fn(...args), promise]);
}
