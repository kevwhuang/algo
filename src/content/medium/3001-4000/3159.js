// 3159 - Find Occurrences of an Element in an Array

function occurrencesOfElement(nums, queries, x) {
    const arr = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === x) arr.push(i);
    }
    for (let i = 0; i < queries.length; i++) {
        const idx = --queries[i];
        queries[i] = idx < arr.length ? arr[idx] : -1;
    }
    return queries;
}
