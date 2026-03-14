// 1733 - Minimum Number of People to Teach

function minimumTeachings(n, languages, friendships) {
    for (let i = 0; i < languages.length; i++) {
        languages[i] = new Set(languages[i]);
    }
    const teach = new Set();
    L: for (let i = 0; i < friendships.length; i++) {
        const u = --friendships[i][0], v = --friendships[i][1];
        for (const lang of languages[u]) {
            if (languages[v].has(lang)) continue L;
        }
        teach.add(u), teach.add(v);
    }
    const bucket = new Uint16Array(n);
    for (const u of teach) {
        for (const lang of languages[u]) {
            bucket[lang - 1]++;
        }
    }
    let max = 0;
    for (let i = 0; i < n; i++) {
        if (bucket[i] > max) max = bucket[i];
    }
    return teach.size - max;
}
