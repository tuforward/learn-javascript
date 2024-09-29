/**             Chiến lược 50-30-20
 * YÊU CẦU:
    +   Chiến lược 50-30-20 là một cách đơn giản để quản lý tài chính, bao gồm chi tiêu 50% thu nhập cho nhu cầu cần thiết, 30% thu nhập cho sở thích cá nhân và 20% thu nhập cho tiết kiệm.

    +   Viết một hàm nhập vào số tiền thu nhập sau đó tính toán và trả về một đối tượng để thể hiện số tiền một người cần phải chi tiêu cho nhu cầu cần thiết, sở thích cá nhân và tiết kiệm.
*/

function myStrategy(thuNhap) {
    var obj = {
        need: thuNhap * 0.5,
        hobby: thuNhap * 0.3,
        savings: thuNhap * 0.2
    };
    
    return obj;
}

var vidu_mot = myStrategy(10000);

var vidu_hai = myStrategy(50000);

var vidu_ba = myStrategy(13450);

console.log(vidu_mot);
console.log(vidu_hai);
console.log(vidu_ba);