// 2650 - Design Cancellable Function

function cancellable(generator) {
    async function init() {
        const fn = (_, rej) => res = () => rej('Cancelled');
        const promise = new Promise(fn);
        let cur = generator.next();
        while (!cur.done) {
            try {
                cur = generator.next(await Promise.race([cur.value, promise]));
            } catch (err) {
                cur = generator.throw(err);
            }
        }
        return cur.value;
    }
    let res;
    return [init(), res].reverse();
}
