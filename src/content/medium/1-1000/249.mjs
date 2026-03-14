// 249 - Group Shifted Strings

function groupStrings(strings) {
    const obj = {};
    for (let i = 0; i < strings.length; i++) {
        const word = strings[i];
        const shift = word.charCodeAt(0) - 97;
        let hash = 'a';
        for (let j = 1; j < word.length; j++) {
            let code = word.charCodeAt(j) - shift;
            if (code < 97) code += 26;
            hash += String.fromCharCode(code);
        }
        if (!(obj[hash])) obj[hash] = [];
        obj[hash].push(strings[i]);
    }
    return Object.values(obj);
}
