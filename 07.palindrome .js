/**     Kiểm tra xem một chuỗi có phải là palindrome hay không?
 * YÊU CẦU:
    +   Palindrome là từ khi đọc ngược cũng như đọc xuôi.
 */

function palindrome (str) {
    // BƯỚC 1: CHUYỂN CHUỖI THÀNH ARRAY => SỬ DỤNG HÀM SPLIT()
    // BƯỚC 2: LẬT CÁC VỊ TRÍ CỦA CÁC PHẦN TỬ TRONG ARRAY => SỬ DỤNG HÀM REVERSE()
    // BƯỚC 3: kết hợp các phần tử trong mảng lại thành một chuỗi => JOIN()

    var strReverse = str.split("").reverse().join("");

    console.log(str === strReverse);
}

palindrome("cicic");

palindrome("solos");

palindrome("test");

palindrome("hello");

palindrome("rotavator");