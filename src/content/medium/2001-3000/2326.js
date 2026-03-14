// 2326 - Spiral Matrix IV

function spiralMatrix(m, n, head) {
    const mat = new Array(m);
    for (let r = 0; r < m; r++) {
        mat[r] = new Array(n).fill(-1);
    }
    let r = 0, c = 0;
    let right = n - 1, bottom = m - 1, left = 0, top = 1;
    while (true) {
        while (true) {
            mat[r][c] = head.val;
            head = head.next;
            if (!head) return mat;
            if (c === right) {
                r++;
                right--;
                break;
            }
            c++;
        }
        while (true) {
            mat[r][c] = head.val;
            head = head.next;
            if (!head) return mat;
            if (r === bottom) {
                c--;
                bottom--;
                break;
            }
            r++;
        }
        while (true) {
            mat[r][c] = head.val;
            head = head.next;
            if (!head) return mat;
            if (c === left) {
                r--;
                left++;
                break;
            }
            c--;
        }
        while (true) {
            mat[r][c] = head.val;
            head = head.next;
            if (!head) return mat;
            if (r === top) {
                c++;
                top++;
                break;
            }
            r--;
        }
    }
}
