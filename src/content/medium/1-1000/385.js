// 385 - Mini Parser

function deserialize(s) {
    function build(str) {
        if (!Array.isArray(str)) return new NestedInteger(str);
        const arr = new NestedInteger();
        for (let i = 0; i < str.length; i++) {
            arr.add(build(str[i]));
        }
        return arr;
    }
    return build(JSON.parse(s));
}
