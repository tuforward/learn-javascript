/**             Viết hàm Nói lắp
 * YÊU CẦU:
    +   Viết một hàm làm giật từ như khi ai đó gặp khó khăn trong việc đọc nó. Hai ký tự đầu tiên được lặp lại hai lần với dấu ba chấm ... và khoảng trắng sau mỗi ký tự, và sau đó là từ được phát âm.

 * CHÚ Ý:
    + Giả sử đầu vào có ít nhất hai ký tự.
*/

// CÁCH LÀM
// (1)  TÁCH TỪ TRƯỚC
// (2)  NỖI CHUỖI THÊM DẤU ...

function stutter(word) {
    // Lấy 2 kí tự đầu tiên
    var firstTwoLetter = word.slice(0, 2);

    // Lấy hai ký tự đầu tiên (cách khác)
//   var firstTwoLetters = word.substring(0, 2);

    // Ghép chuỗi với dấu 3 chắm sau mỗi kí tự
    // Muốn ghép chuỗi thì phải dùng dấu backtick
    var ans = `${firstTwoLetter}...${firstTwoLetter}...${word}`;

    return ans;
}

var vidu_mot = stutter("Bạn có khỏe không?");

var vidu_hai = stutter("Tôi khỏe.");

var vidu_ba = stutter("Đây là đâu?");

console.log(vidu_mot);
console.log(vidu_hai);
console.log(vidu_ba);
