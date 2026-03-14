// 1233 - Remove Subfolders From the Filesystem

function removeSubfolders(folder) {
    folder.sort();
    const res = [];
    for (let i = 0, prev = ' '; i < folder.length; i++) {
        if (folder[i].startsWith(prev)) continue;
        res.push(folder[i]);
        prev = folder[i] + '/';
    }
    return res;
}
