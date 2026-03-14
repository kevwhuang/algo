// 722 - Remove Comments

function removeComments(source) {
    return source
        .join('~')
        .concat('~')
        .replace(/\/\/.*?(?=~)|\/\*.*?\*\//g, '')
        .split('~')
        .filter(e => e.length);
}
