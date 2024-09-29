/**             Diện Tích của Tam Giác
 * YÊU CẦU:
    +    Viết một hàm nhận vào độ dài cơ sở và chiều cao của một tam giác và trả về diện tích của nó.


 * CÔNG THỨC TÍNH DIỆN TÍCH TAM GIÁC:
    +   S = (CHIỀU CAO * ĐÁY) / 2;
*/

function areaOfTriangle (lengthBase, height) {
    var ans = (+lengthBase * +height) / 2;
    return ans;
}

// đồ dài đáy = 3, chiều cao = 2;
var triangleOne = areaOfTriangle(3, 2);

// đồ dài đáy = 7, chiều cao = 4;
var triangleTwo = areaOfTriangle(7, 4);

// đồ dài đáy = 10, chiều cao = 10;
var triangleThree = areaOfTriangle(10, 10);


console.log(triangleOne);
console.log(triangleTwo);
console.log(triangleThree);