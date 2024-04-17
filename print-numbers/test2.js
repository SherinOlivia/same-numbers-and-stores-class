// post test
// time complexity: O(n*n) (krna manggil printNum di dalam //recursive)
function printNum(n, result = "") {
    if (n > 1) {
        result = printNum(n - 1, result);
    }
    result += n + " ";
    return result;
}
let output = printNum(10);
console.log(output);
