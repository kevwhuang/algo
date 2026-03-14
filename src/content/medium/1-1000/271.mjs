// 271 - Encode and Decode Strings

function encode(strs) {
    return strs.join`<~>`;
}

function decode(s) {
    return s.split`<~>`;
}
