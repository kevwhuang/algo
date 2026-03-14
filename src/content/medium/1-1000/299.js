// 299 - Bulls and Cows

function getHint(secret, guess) {
    const arr1 = new Array(10).fill(0);
    const arr2 = new Array(10).fill(0);
    let x = 0, y = 0;
    for (let i = 0; i < secret.length; i++) {
        if (secret[i] === guess[i]) x++;
        else {
            arr1[secret[i]]++;
            arr2[guess[i]]++;
        }
    }
    for (let i = 0; i < 10; i++) {
        if (arr1[i] === 0) continue;
        y += Math.min(arr1[i], arr2[i]);
    }
    return `${x}A${y}B`;
}
