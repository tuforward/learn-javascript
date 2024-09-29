/**             Khung Hình Trên Giây
 * YÊU CẦU:
    +    Tạo một hàm trả về số khung hình được hiển thị trong một số phút nhất định cho một FPS (khung hình/giây) cụ thể.
*/

function frame(soPhut, fps) {
    // tính ra số giây
    var soGiay = soPhut * 60;

    // tính kết quả
    var ans = soGiay * fps;
    return ans;
}

// 1 là số phút, 1 là số khung hình/giây
var vidu_mot = frame(1, 1);

// 10 là số phút, 1 là số khung hình/giây
var vidu_hai = frame(10, 1);

// 10 là số phút, 25 là số khung hình/giây
var vidu_ba = frame(10, 25);

console.log(vidu_mot);
console.log(vidu_hai);
console.log(vidu_ba);