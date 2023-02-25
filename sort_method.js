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

// 测试排序耗时
function testTime(target, method) {
    let date1 = new Date().getTime();
    for (let i = 0; i < target.length; i++) {
        method(target[i]);
    }
    let date2 = new Date().getTime();
    return `${method.name}排序用时：${date2 - date1}ms`;
}

// 互换
function swap(a, b) {
    let c = a;
    a = b;
    b = c;
    return [a, b];
}

// 冒泡排序
function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = swap(arr[j], arr[j + 1]);
            }
        }
    }
    return arr;
}

// 选择排序
function selectSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        [arr[min], arr[i]] = swap(arr[min], arr[i]);
    }
    return arr;
}

// 插入排序
function insertSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
    return arr;
}

// 归并排序
function mergeSort(arr) {
    if (arr.length == 1) return arr;

    let mid = arr.length / 2;
    let arrBef = mergeSort(arr.slice(0, mid));
    let arrAft = mergeSort(arr.slice(mid));

    let temp = [];
    let i = 0, j = 0;
    while (i < arrBef.length && j < arrAft.length) {
        if (arrBef[i] <= arrAft[j]) {
            temp.push(arrBef[i]);
            i++;
        } else {
            temp.push(arrAft[j]);
            j++;
        }
    }
    temp.push(...(i < arrBef.length ? arrBef.slice(i) : arrAft.slice(j)));
    return temp;
}

// 快速排序
function quickSort(arr) {
    if (arr.length <= 1) return arr;

    let pivot = arr[0];
    let j = 1;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            [arr[i], arr[j]] = swap(arr[i], arr[j]);
            j++;
        }
    }
    return [...quickSort(arr.slice(1, j)), pivot, ...quickSort(arr.slice(j))];
}
