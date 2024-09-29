/**             Số lượng nhãn dán
 * YÊU CẦU:
    +   Cho một khối Rubik có độ dài cạnh là n, trả về số lượng sticker (nhãn dán) đơn lẻ cần thiết để phủ toàn bộ khối.

    - Khối Rubik có cạnh dài 1 có 6 miếng dán.
    - Khối Rubik có cạnh dài 2 có 24 miếng dán.
    - Khối Rubik có cạnh dài 3 có 54 miếng dán.
*/

function numberOfStickers (sticker) {
    // tính diện tích một mặt
    sticker = sticker * sticker;

    // tính tổng thể (6 đại diện cho 6 mặt)
    var ans = sticker * 6;
    return ans;
}

// 1 Nhãn
var vidu_mot = numberOfStickers(1);

// 2 Nhãn
var vidu_hai = numberOfStickers(2);

// 3 Nhãn
var vidu_ba = numberOfStickers(3);

console.log(vidu_mot);
console.log(vidu_hai);
console.log(vidu_ba);