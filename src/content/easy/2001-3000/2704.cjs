// 2704 - To Be or Not to Be

function expect(val) {
    return {
        notToBe: e => {
            if (e === val) throw 'Equal';
            return true;
        },
        toBe: e => {
            if (e !== val) throw 'Not Equal';
            return true;
        },
    };
}
