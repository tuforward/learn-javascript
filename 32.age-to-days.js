/**             Chuyển đổi số tuổi sang ngày
 * YÊU CẦU:
    +   Tạo một hàm nhận vào tuổi của một người tính bằng năm và trả về tuổi tính bằng ngày.

 * CHÚ Ý:
    +   Trong bài toán này, 1 năm có 365 ngày.
*/

function ageToDays(age) {
    return age * 365;
}

var vidu_mot = ageToDays(65);

var vidu_hai = ageToDays(0);

var vidu_ba = ageToDays(20);

console.log(vidu_mot);
console.log(vidu_hai);
console.log(vidu_ba);