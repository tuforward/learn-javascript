/**             Cạnh Lớn Nhất của Tam Giác
 * YÊU CẦU:
    +    Viết một hàm tìm phạm vi lớn nhất của cạnh thứ ba của một tam giác, trong đó độ dài các cạnh đều là số nguyên.


 * Lưu ý:
    - (cạnh1 + cạnh2) - 1 = phạm vi lớn nhất của cạnh thứ ba.
    - Độ dài các cạnh của tam giác là số nguyên dương.
*/

function largestEdge (edge1, edge2) {
    var ans = (+edge1 + +edge2) - 1;
    return ans;
}

var edgeOne = largestEdge(8, 10);

var edgeTwo = largestEdge(5, 7);

var edgeThree = largestEdge(9, 2);

console.log(edgeOne);
console.log(edgeTwo);
console.log(edgeThree);