/**             STTRING METHODS
 * YÊU CẦU:
    +   Phỏng đoán kết quả của console.log().
 */

var a = "Daca.vn - Professional Web Design Services.";

console.log(a.indexOf("Web"));
console.log(a.indexOf("Web", 24));
console.log(a.indexOf("vn"));

console.log(a.lastIndexOf("Design"));

console.log(a.slice(10, 22));
console.log(a.slice(-16, -10)); 

console.log(a.split("", 7)); // mỗi kí tự là một phần tử tách tối đa 7 từ
