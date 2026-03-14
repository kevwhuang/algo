// 859 - Buddy Strings

function buddyStrings(s, goal) {
    if (s.length !== goal.length) return false;
    if (s === goal) {
        const set = new Set();
        for (let i = 0; i < s.length; i++) {
            if (set.has(s[i])) return true;
            set.add(s[i]);
        }
        return false;
    }
    const diffS = [];
    const diffGoal = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== goal[i]) {
            if (diffS.length === 2) return false;
            diffS.push(s[i]);
            diffGoal.push(goal[i]);
        }
    }
    if (diffS.length === 1) return false;
    return diffS[0] === diffGoal[1] && diffS[1] === diffGoal[0];
}
