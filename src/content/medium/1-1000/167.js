// 167 - Two Sum II - Input Array Is Sorted

function twoSum(numbers, target) {
    let l = 0, r = numbers.length - 1;
    while (true) {
        if (numbers[l] + numbers[r] < target) l++;
        else if (numbers[l] + numbers[r] > target) r--;
        else return [l + 1, r + 1];
    }
}
