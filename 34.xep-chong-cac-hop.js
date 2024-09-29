/**             Xếp chồng các hộp
 * YÊU CẦU:
    +   Dưới đây là hình ảnh của bốn mô hình. Một số hộp lập phương bị ẩn sau các hộp khác. Mô hình một bao gồm một hộp. Mô hình hai bao gồm bốn hộp, và tiếp tục như vậy…

    + Viết một hàm nhận vào một số n và trả về số lượng hộp đã xếp chồng trong một mô hình có chiều cao n cấp độ (Đếm tất cả các hộp: thể nhìn thấy và không nhìn thấy).

 * CHÚ Ý:
    + n là số nguyên dương
*/

function stackBoxes(n) {
    // Tổng số hộp sẽ bằng n * n
    return n * n;
}

// Kiểm tra hàm với các ví dụ
console.log(stackBoxes(1)); // Output: 1
console.log(stackBoxes(2)); // Output: 4
console.log(stackBoxes(0)); // Output: 0