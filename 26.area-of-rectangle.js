/**             Diện tích hình chữ nhật
 * YÊU CẦU:
    +    Tạo một hàm tính diện tích của hình chữ nhật. Nếu các đối số không hợp lệ, hàm phải trả về -1.
*/

function dienTichHCN(dai, rong) {
    // Không hợp lệ
    if(dai < 1 || rong < 1) return -1;

    var ans = dai * rong;
    return ans;
}

// dài 3, rộng 4
var vidu_mot = dienTichHCN(3, 4);

// dài 10, rộng 11 
var vidu_hai = dienTichHCN(10, 11);

// dài -1, rộng 5
var vidu_ba = dienTichHCN(-1, 5);

// dài 0, rộng 2
var vidu_bon = dienTichHCN(0, 2);

console.log(vidu_mot);
console.log(vidu_hai);
console.log(vidu_ba);
console.log(vidu_bon);
