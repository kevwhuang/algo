// 2452 - Words Within Two Edits of Dictionary

function twoEditWords(queries, dictionary) {
    const matches = [];
    const wordLen = queries[0].length;
    for (let i = 0; i < queries.length; i++) {
        const query = queries[i];
        for (let j = 0; j < dictionary.length; j++) {
            const word = dictionary[j];
            let edits = 0;
            for (let k = 0; k < wordLen; k++) {
                if (query[k] === word[k]) continue;
                if (++edits > 2) break;
            }
            if (edits > 2) continue;
            matches.push(queries[i]);
            break;
        }
    }
    return matches;
}
