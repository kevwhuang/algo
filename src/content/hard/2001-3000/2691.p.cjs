// 2691 - Immutability Helper

class ImmutableHelper {
    constructor(obj) {
        this.obj = obj;
    }
    produce(mutator) {
        const res = { copy: this.obj };
        mutator(this.#dfs(res, res, (key, e) => res[key] = e).copy);
        return res.copy;
    }
    #dfs(cur, prev, fn) {
        function get(_, key1) {
            let e = cur[key1];
            if (!e || typeof e !== 'object') return e;
            return this.#dfs(e, prev[key1], (key2, f) => {
                const flag = e === prev[key1];
                if (flag) e = Array.isArray(e) ? [...e] : { ...e };
                if (flag) cur = fn(key1, e);
                e[key2] = f;
                return e;
            });
        }
        const set = (_, key, e) => cur = fn(key, e);
        return new Proxy(cur, { get: get.bind(this), set });
    }
}
