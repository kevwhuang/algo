// 898 - Bitwise ORs of Subarrays

function subarrayBitwiseORs(arr) {
    const set = new Set([arr[0]]);
    for (let i = 0, or = 0; i < arr.length; i++) {
        or |= arr[i];
        let j = i, local = 0;
        while (~j && local !== or) set.add(local |= arr[j--]);
    }
    return set.size;
}
