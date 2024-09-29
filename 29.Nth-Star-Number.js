/**             Số sao thứ N
 * YÊU CẦU:
    +   Tạo một hàm nhận vào một số nguyên dương n và trả về số "sao" thứ n.

 * CHÚ Ý:
    +   n sẽ luôn là một số nguyên dương.
    +   Công thức tính số sao thứ n có thể được biểu diễn bởi công thức: 6n(n-1) + 1.
*/

function starNumber (n) {
    return 6 * n * (n - 1) + 1;
}

var vidu_mot = starNumber(1);

var vidu_hai = starNumber(3);

var vidu_ba = starNumber(5);

console.log(vidu_mot);
console.log(vidu_hai);
console.log(vidu_ba);