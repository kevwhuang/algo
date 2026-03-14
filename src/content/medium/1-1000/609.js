// 609 - Find Duplicate File in System

function findDuplicate(paths) {
    const files = {};
    for (let i = 0; i < paths.length; i++) {
        const parse = paths[i].split(' ');
        const root = parse[0];
        for (let j = 1; j < parse.length; j++) {
            const index = parse[j].indexOf('(');
            const filepath = `${root}/${parse[j].slice(0, index)}`;
            const content = parse[j].slice(index + 1, -1);
            if (!(content in files)) files[content] = [];
            files[content].push(filepath);
        }
    }
    const dups = [];
    for (const content in files) {
        if (files[content].length === 1) continue;
        dups.push(files[content]);
    }
    return dups;
}
