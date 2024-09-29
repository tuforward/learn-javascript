/**             Điểm Bóng Đá
 * YÊU CẦU:
    +    Tạo một hàm nhận số lượng chiến thắng, hòa và thất bại và tính toán số điểm mà một đội bóng đã đạt được.


 * Lưu ý:
    - Chiến thắng được 3 điểm.
    - Hòa được 1 điểm.
    - Thất bại không được điểm nào.
*/

function footballSoccer (thang, hoa, thua) {
    thang = +thang * 3;
    hoa   = +hoa;

    return (thang + hoa);
}

var vidu_mot = footballSoccer(3, 4, 2);
var vidu_hai = footballSoccer(5, 0, 2);
var vidu_ba  = footballSoccer(0, 0, 1);

console.log(vidu_mot);
console.log(vidu_hai);
console.log(vidu_ba);
