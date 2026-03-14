// 1055 - Shortest Way to Form String

function shortestWay(source, target) {
    let subsequences = 0, i = 0;
    while (i < target.length) {
        const start = i;
        for (let j = 0; j < source.length; j++) {
            if (target[i] === source[j]) i++;
        }
        if (start === i) return -1;
        subsequences++;
    }
    return subsequences;
}
