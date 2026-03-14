// 3273 - Minimum Amount of Damage Dealt to Bob

function minDamage(power, damage, health) {
    const arr = Array.from({ length: health.length }, (_, i) => i);
    health.forEach((e, i) => health[i] = Math.ceil(e / power));
    arr.sort((a, b) => health[a] * damage[b] - health[b] * damage[a]);
    let res = 0, acc = 0;
    arr.forEach(e => (acc += health[e], res += acc * damage[e]));
    return res;
}
