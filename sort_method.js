// 创建测试随机数列
function createArr(l = 10, n = 1) {
    let testArr = []
    for (let i = 0; i < n; i++) {
        let temp = [];
        for (let j = 0; j < l; j++) {
            temp.push(Math.floor(Math.random() * l * 5 + 1));
        }
        testArr.push(temp);
    }
    return testArr;
}

function testTime()