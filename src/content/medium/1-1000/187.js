// 187 - Repeated DNA Sequences

function findRepeatedDnaSequences(s) {
    let dna = s.slice(0, 10);
    const res = new Set();
    const seen = new Set([dna]);
    for (let i = 10; i < s.length; i++) {
        dna = dna.slice(1) + s.charAt(i);
        if (seen.has(dna)) res.add(dna);
        seen.add(dna);
    }
    return [...res];
}
