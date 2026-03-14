// 838 - Push Dominoes

function pushDominoes(dominoes) {
    dominoes = dominoes.split('');
    let left, right;
    for (let i = 0; i < dominoes.length; i++) {
        if (dominoes[i] === 'L') {
            if (Number.isInteger(left)) {
                while (++left < i) dominoes[left] = 'L';
            } else if (Number.isInteger(right)) {
                left = i;
                while (++right < --left) {
                    dominoes[right] = 'R';
                    dominoes[left] = 'L';
                }
            } else {
                left = i;
                while (0 <= --left) dominoes[left] = 'L';
            }
            left = i;
            right = null;
        } else if (dominoes[i] === 'R') {
            if (Number.isInteger(right)) {
                while (++right < i) dominoes[right] = 'R';
            }
            left = null;
            right = i;
        }
    }
    if (Number.isInteger(right)) {
        while (++right < dominoes.length) dominoes[right] = 'R';
    }
    return dominoes.join('');
}
