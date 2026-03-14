// 925 - Long Pressed Name

function isLongPressedName(name, typed) {
    let i = 0, j = 0;
    while (j < typed.length) {
        if (i < name.length && name[i] === typed[j]) i++, j++;
        else if (i && name[i - 1] === typed[j]) j++;
        else return false;
    }
    return i === name.length;
}
