// during test:
function sameNumber(array_1: number[], array_2: number[]) {
    // result is if num in array 1 = array 2
// time complexity : O(n*m) dikarenakan nested loops (n = panjang array_1, m = panjang array_2)
    let duplicateNum: number[] = [];
    // mulai dri 0 -> num++ after each loop
    for (let i = 0; i < array_1.length; i++) {
        for (let j = 0; j < array_2.length; j++ ) {
            if (array_1[i] !== array_2[j]) { 
                continue
            } else if ((array_1[i] == array_2[j])) { 
                duplicateNum.push(array_1[i])
            }
        }
    }
    
    return duplicateNum
    
}

let result = sameNumber([1, 2, 3, 4, 10, 4], [3, 15, 5, 6, 8, 9, 11, 12, 13 ,4, 4])
console.log(result)

// post-test:
function sameNumberB(array_1: number[], array_2: number[]) {
    let duplicateNum: number[] = [];
    for (let i = 0; i < array_1.length; i++) {
        for (let j = 0; j < array_2.length; j++ ) {
            if (array_1[i] == array_2[j]) { 
                duplicateNum.push(array_1[i])
                break
            }
        }
    } 
    return duplicateNum
    
}

let resultB = sameNumberB([1, 2, 3, 4, 10, 4], [3, 15, 5, 6, 8, 9, 11, 12, 13 ,4, 4])
console.log(resultB)


function sameNumberC(array_1: number[], array_2: number[]) {
    // nums di sort dulu sebelum dicek kedua arraynya sekaligus
    array_1.sort((a, b) => a - b); 
    array_2.sort((a, b) => a - b); 

    let duplicateNum: number[] = [];
    let i = 0;
    let j = 0;

    while (i < array_1.length && j < array_2.length) {
        if (array_1[i] < array_2[j]) {
            i++;
        } else if (array_1[i] > array_2[j]) {
            j++;
        } else {
            duplicateNum.push(array_1[i]);
            i++;
            j++;
        }
    }

    return duplicateNum;
}
    // n = panjang array 1 , m = panjang array 2
    // time complexity = O(n log n + m log m) karna sort array itu 
    // O(n log n) dan ngeiterate nya O(n) (untuk masing2 array) sehingga klo
    // sort & iterate 1 array = O(n log n + n) -> O(n log n) karna O(n) lbh
    // rendah peningkatannya (peningkatan n)


let resultC = sameNumberC([1, 2, 3, 4, 10, 4], [3, 15, 5, 6, 8, 9, 11, 12, 13 ,4, 4])
console.log(resultC)