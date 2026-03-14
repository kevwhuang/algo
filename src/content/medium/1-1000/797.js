// 797 - All Paths From Source to Target

function allPathsSourceTarget(graph) {
    function dfs(n, path) {
        const node = graph[n];
        for (let i = 0; i < node.length; i++) {
            if (node[i] === graph.length - 1) paths.push(path.concat(node[i]));
            else dfs(node[i], path.concat(node[i]));
        }
    }
    const paths = [];
    dfs(0, [0]);
    return paths;
}
