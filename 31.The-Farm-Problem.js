/**             Vấn đề trang trại
 * YÊU CẦU:
    +   Viết một hàm để tính tổng số chân của tất cả các loài động vật mà một nông dân nuôi. Nông dân này nuôi ba loài động vật:

        - Gà (chickens) = 2 chân
        - Bò (cows) = 4 chân
        - Lợn (pigs) = 4 chân

    +   Nông dân đã đếm số lượng động vật của mình và cung cấp cho bạn số lượng của từng loài. Bạn cần viết một hàm để trả về tổng số chân của tất cả các loài động vật.

 * CHÚ Ý:
    - Thứ tự của các loài động vật được truyền vào là animals(chickens, cows, pigs).
    
    - Nông dân muốn biết tổng số chân và không phải tổng số động vật.
*/

function animals(ga, bo, heo) {
    ga  =  ga * 2;
    bo  =  bo * 4;
    heo = heo * 4;
    
    // trả về tổng số chân
    return (ga + bo + heo);
}

var vidu_mot = animals(2, 3, 5);

var vidu_hai = animals(1, 2, 3);

var vidu_ba = animals(5, 2, 8);

console.log(vidu_mot);
console.log(vidu_hai);
console.log(vidu_ba);