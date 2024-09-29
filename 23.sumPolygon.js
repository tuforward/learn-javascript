/**             TỔNG GÓC CỦA ĐA GIÁC
 * YÊU CẦU:
    +    Cho một đa giác đều có n cạnh, trả về tổng các góc của đa giác (tính bằng độ).


 * Lưu ý:
    - n luôn lớn hơn 2.
    - Công thức (n−2)×180 cho tổng của tất cả các góc của một đa giác n cạnh.
*/

function sumPolygon (numberOfEdge) {
    var ans = (+numberOfEdge - 2) * 180;
    return ans;
}

// có 3 cạnh
var threeEdge = sumPolygon(3);

// có 4 cạnh
var fourEdge = sumPolygon(4);

// có 6 cạnh
var sixEdge = sumPolygon(6);

console.log(threeEdge);
console.log(fourEdge);
console.log(sixEdge);