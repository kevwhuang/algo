// 582 - Kill Process

function killProcess(pid, ppid, kill) {
    function traverse(id) {
        ids.push(id);
        if (!map.has(id)) return;
        const children = map.get(id);
        for (let i = 0; i < children.length; i++) {
            traverse(children[i]);
        }
    }
    const map = new Map();
    for (let i = 0; i < ppid.length; i++) {
        if (!map.has(ppid[i])) map.set(ppid[i], []);
        map.get(ppid[i]).push(pid[i]);
    }
    const ids = [];
    traverse(kill);
    return ids;
}
