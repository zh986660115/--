const rl = require('readline').createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    let params = []
    while (line = await readline()) {
        params.push(line);
    }
    findNeighbor(...params);
    countWater(...params);
}


// 题目一 找领居
function findNeighbor(m, n, ...matrix) {
    matrix = matrix.map(element => element.split(' '));
    let map = new Map();
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (map.has(matrix[i][j])) {
                map.get(matrix[i][j]).push([i, j]);
            } else {
                map.set(matrix[i][j], [[i, j]]);
            }
        }
    }
    let result = Array(m).fill().map(() => Array(n).fill(-1));
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            let temp = map.get(matrix[i][j]);
            if (temp.length == 1) continue;

            let min = Infinity;
            temp.forEach(([a, b]) => {
                if (a == i && b == j) return;
                min = Math.min(min, Math.abs(a - i) + Math.abs(b - j))
            });
            result[i][j] = min;
        }
    }
    console.log("🚀 ~ result:", result)
}
findNeighbor(
    4, 4,
    'a o c c',
    'p d g q',
    'v d d c',
    'q w e r',
)


// 题目二 计算水流大小
function countWater(size, array, ans) {
    let [m, n] = size.split(' ').map(Number);
    let [p, q] = ans.split(' ').map(Number);
    array = array.split(' ').map(Number);
    let matrix = Array(m).fill().map(() => Array(n).fill());
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            matrix[i][j] = array[i * n + j];
        }
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] > 0) {
                dfs(i, j);
                console.log("🚀 ~ ans:", matrix[p][q]);
                return;
            }
        }
    }

    function dfs(x, y) {
        if (x - 1 >= 0 && matrix[x - 1][y] >= 0 && matrix[x - 1][y] < matrix[x][y] - 1) {
            matrix[x - 1][y] = matrix[x][y] - 1;
            dfs(x - 1, y);
        }
        if (y - 1 >= 0 && matrix[x][y - 1] >= 0 && matrix[x][y - 1] < matrix[x][y] - 1) {
            matrix[x][y - 1] = matrix[x][y] - 1;
            dfs(x, y - 1);
        }
        if (x + 1 < m && matrix[x + 1][y] >= 0 && matrix[x + 1][y] < matrix[x][y] - 1) {
            matrix[x + 1][y] = matrix[x][y] - 1;
            dfs(x + 1, y);
        }
        if (y + 1 < n && matrix[x][y + 1] >= 0 && matrix[x][y + 1] < matrix[x][y] - 1) {
            matrix[x][y + 1] = matrix[x][y] - 1;
            dfs(x, y + 1);
        }
    }
}
countWater(
    '5 3',
    '0 -1 0 0 0 0 0 3 0 -1 0 0 0 -1 0',
    '4 2',
)