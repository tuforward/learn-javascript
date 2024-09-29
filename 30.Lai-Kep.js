/**             Lãi kép
 * YÊU CẦU:
    +   Giả sử bạn đầu tư $10,000 trong 10 năm với mức lãi suất 6% được cộng dồn hàng tháng. Giá trị của khoản đầu tư của bạn sẽ là bao nhiêu vào cuối giai đoạn 10 năm?

    +   Tạo một hàm nhận vào số vốn ban đầu p, thời gian đầu tư trong t năm, tỷ lệ lãi suất r và số lần tính lãi trong một năm n. Hàm trả về giá trị vào cuối kỳ.

    +   Làm tròn đến 2 chữ số sau dấu thập phân.

 * CHÚ Ý:
    + CÔNG THỨC TÍNH LÃI KÉP LÀ:
        - A = P * ( [1 + r / n]^(n * t) )
*/

function laiKep (p, t, r, n) {
    var ans = p * Math.pow(1 + (r / n), t*n);
    
    ans = parseFloat(ans.toFixed(2));
    return ans;

    // parseFloat để từ kiểu string về kiểu number, vì hàm toFixed trả về giá trị kiểu string
}

var vidu_mot = laiKep(10000, 10, 0.06, 12);

var vidu_hai = laiKep(100, 1, 0.05, 1);

var vidu_ba = laiKep(3500, 15, 0.1, 4);

console.log(vidu_mot);
console.log(vidu_hai);
console.log(vidu_ba);
