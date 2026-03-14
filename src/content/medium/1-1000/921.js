// 921 - Minimum Add to Make Parentheses Valid

function minAddToMakeValid(s) {
    let counter = 0, inserts = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') counter++;
        else counter ? counter-- : inserts++;
    }
    return counter + inserts;
}
