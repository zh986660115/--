// 螺旋矩阵
var spiralOrder = function (matrix) {
    if (!matrix.length || !matrix[0].length) return [];

    let m = matrix.length;
    let n = matrix[0].length;
    if (m <= 1) return matrix[0];
    if (n <= 1) {
        let temp = [];
        for (let i = 0; i < m; i++) {
            temp.push(matrix[i][0]);
        }
        return temp;
    }

    let res = [];
    res.push(...matrix[0]);
    for (let i = 1; i < m; i++) {
        res.push(matrix[i][n - 1]);
    }
    for (let i = n - 2; i >= 0; i--) {
        res.push(matrix[m - 1][i]);
    }
    for (let i = m - 2; i >= 1; i--) {
        res.push(matrix[i][0]);
    }

    let newM = [];
    for (let i = 1; i < m - 1; i++) {
        let temp = [];
        for (let j = 1; j < n - 1; j++) {
            temp.push(matrix[i][j]);
        }
        newM.push(temp);
    }
    return [...res, ...spiralOrder(newM)];
};

var reverseWords = function (s) {
    let sArr = s.split(" ");
    for (let word of sArr) {debugger
        let left = 0, right = word.length - 1;
        while (left < right) {
            let t = word[left];
            word[left++] = word[right];
            word[right--] = t;
        }
        console.log("🚀 ~ file: mathTest.js:49 ~ reverseWords ~ word:", word)
    }
    return sArr.join(" ")
};
