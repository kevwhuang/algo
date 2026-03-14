// 2745 - Construct the Longest New String

function longestString(x, y, z) {
    if (x < y) z += x + x + 1;
    else if (x > y) z += y + y + 1;
    else z += x + y;
    return z + z;
}
