// 1618 - Maximum Font to Fit a Sentence in a Screen

function maxFont(text, w, h, fonts, fontInfo) {
    function isValid(font) {
        if (fontInfo.getHeight(font) > h) return false;
        let width = 0;
        for (let i = 0; i < text.length; i++) {
            width += fontInfo.getWidth(font, text[i]);
            if (width > w) return false;
        }
        return true;
    }
    let res = -1, l = 0, r = fonts.length - 1;
    while (l <= r) {
        const m = l + r >> 1;
        if (isValid(fonts[m])) {
            res = fonts[m];
            l = m + 1;
        } else {
            r = m - 1;
        }
    }
    return res;
}
