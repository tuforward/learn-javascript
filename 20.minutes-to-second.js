/**             Chuyển Đổi Phút thành Giây
 * YÊU CẦU:
    +    Viết một hàm nhận một số phút và chuyển đổi nó thành giây.
 */

function minutesToSecond (phut) {
    var base_sec = 60; // 60s
    return +phut * base_sec;

    // mình để dấu + phía trước phút để ép kiểu về number ngộ nhỡ có ai đó truyền vào chuỗi
}

var namPhut = minutesToSecond(5);

var baPhut  = minutesToSecond(3);

var haiPhut = minutesToSecond(2);

console.log(namPhut);
console.log(baPhut);
console.log(haiPhut);
