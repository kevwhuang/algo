// 3898. Find the Degree of Each Vertex

function findDegrees(matrix) {
    matrix.forEach((e, i) => matrix[i] = e.reduce((s, f) => s + f));
    return matrix;
}
