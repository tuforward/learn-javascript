/**                 HOÁN ĐỔI BIẾN - SWAP
 * YÊU CẦU:
    + Cho 2 biến value1 và value2. Hãy hoán đổi giá trị của 2 biến này.
 */

var value1 = "one";
var value2 = "two";

/**                 CÁCH 1: */
// var temp = value1;
// value1 = value2;
// value2 = temp;

// console.log(value1, value2);

/**                 CÁCH 2: */
[value1, value2] = [value2, value1];
console.log(value1, value2);