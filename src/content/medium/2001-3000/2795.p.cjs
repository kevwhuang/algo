// 2795 - Parallel Execution of Promises for Individual Results Retrieval

function promiseAllSettled(functions) {
    const arr = new Array(functions.length);
    return new Promise(res => {
        let acc = 0;
        for (let i = 0; i < functions.length; i++) {
            functions[i]()
                .then(e => arr[i] = { status: 'fulfilled', value: e })
                .catch(err => arr[i] = { status: 'rejected', reason: err })
                .finally(() => ++acc === functions.length && res(arr));
        }
    });
}
