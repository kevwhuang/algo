// 2269 - Find the K-Beauty of a Number

function divisorSubstrings(num, k) {
    let beauty = 0;
    const str = num.toString(), bound = str.length - k + 1;
    for (let i = 0; i < bound; i++) {
        const cur = parseInt(str.slice(i, i + k));
        if (num % cur === 0) beauty++;
    }
    return beauty;
}
