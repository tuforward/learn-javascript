/**             Khủng hoảng thế kỷ
 * YÊU CẦU:
    +   Các nhà khoa học đã phát hiện ra rằng trong bốn thập kỷ nữa, thế giới sẽ Bùng nổ! Cũng sẽ mất ba thập kỷ để chế tạo một con tàu vũ trụ du hành đến một hành tinh mới có thể chứa toàn bộ dân số thế giới.

    + Bạn phải tính tổng số người sau ba thập kỷ nữa.

        - Biến **population** là dân số thế giới hiện nay.

        - Giả sử mỗi tháng, có **n** người được sinh ra thêm.

    + Trả về tổng số người khi tàu vũ trụ hoàn thành.
*/

function soNguoi(population, n) {
    // khi tàu vũ trụ hoàn thành là mất 30 năm nữa
    var ans = 30 * (12 * n);
    
    // ans là số người được đẻ thêm sau 30 nằm nữa

    // cộng thêm số người có sẵn
    ans += population;

    return ans;
}

var vidu_mot = soNguoi(256, 2);

var vidu_hai = soNguoi(3248, 6);

var vidu_ba = soNguoi(5240, 3);

console.log(vidu_mot);
console.log(vidu_hai);
console.log(vidu_ba);