// 393 - UTF-8 Validation

function validUtf8(data) {
    for (let i = 0; i < data.length; i++) {
        let bytes;
        const num = data[i];
        if (num < 128) bytes = 1;
        else if (192 <= num && num < 224) bytes = 2;
        else if (224 <= num && num < 240) bytes = 3;
        else if (240 <= num && num < 248) bytes = 4;
        else return false;
        while (--bytes && ++i < data.length) {
            if (data[i] < 128 || data[i] >= 192) return false;
        }
        if (bytes) return false;
    }
    return true;
}
