// 1023 - Camel Case Matching

function camelMatch(queries, pattern) {
    const re = new RegExp(`^${pattern.replaceAll('', '[a-z]*')}$`);
    for (let i = 0; i < queries.length; i++) {
        queries[i] = re.test(queries[i]);
    }
    return queries;
}
