/**                 Ép kiểu
 * YÊU CẦU:
    +   Phỏng đoán kết quả của console.log().
 */

var a = "100";
var b = 20;
var c = true;

console.log(+a + b + c);
// Giải thích:
// +a: có dấu cộng ở trước biến a thì JS sẽ chuyển string "100" thành số 100
// b: 20
// c: là kiểu boolean, nếu c = true tương đương với 1, nếu c = false tương đương với 0

console.log("100" + 20); // chuỗi + số => nối chuỗi

console.log(+"100"); // ép kiểu string về int thì chỉ cần thêm dấu + phía trước

console.log(+10);