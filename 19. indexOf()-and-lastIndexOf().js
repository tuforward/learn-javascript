/**             indexOf() và lastIndexOf()
 * YÊU CẦU:
    +    Viết một chương trình JavaScript để tìm vị trí đầu tiên và vị trí cuối cùng của một từ trong một chuỗi.
 */

var chuoi = "JavaScript là một ngôn ngữ lập trình phổ biến. Đây là ngôn ngữ đứng đầu trong bảng xếp hạng 2023.";

var tuTimKiem = "ngôn ngữ";

var viTriDauTien  = chuoi.indexOf(tuTimKiem);
var viTriCuoiCUng = chuoi.lastIndexOf(tuTimKiem);

console.log(viTriDauTien);
console.log(viTriCuoiCUng);
