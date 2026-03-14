// 858 - Mirror Reflection

function mirrorReflection(p, q) {
    while (p % 2 === 0 && q % 2 === 0) p /= 2, q /= 2;
    return q % 2 ? p % 2 ? 1 : 2 : 0;
}
