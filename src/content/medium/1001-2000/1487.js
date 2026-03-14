// 1487 - Making File Names Unique

function getFolderNames(names) {
    const map = new Map();
    for (let i = 0; i < names.length; i++) {
        const oldName = names[i];
        let newName = oldName;
        let k = map.get(oldName) ?? 1;
        while (map.has(newName)) newName = `${oldName}(${k++})`;
        map.set(oldName, k);
        map.set(newName, 1);
        names[i] = newName;
    }
    return names;
}
