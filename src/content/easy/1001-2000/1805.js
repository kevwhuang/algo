// 1805 - Number of Different Integers in a String

function numDifferentIntegers(word) {
    word = word.replace(/[a-z]+/g, ' ').trim().split(' ');
    if (word[0] === '') return 0;
    const set = new Set();
    word.forEach(num => set.add(BigInt(num)));
    return set.size;
}
