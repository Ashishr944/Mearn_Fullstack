// let arr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ];

// let top = 0;    //1st row index
// let bottom = arr.length -1; //last row index
// let left = 0;   //first column index
// let right = arr[0].length -1;   //last column index


// let result = [];

// while(top <= bottom && left <= right){
//     // left to right (top is fixed)
//     for(let i=left ;i<=right ;i++){
//         result.push(arr[top][i])
//     }
//     top++;  //next row

//     // top to bottom (right is fixed)
//     for(let i=top; i<=bottom; i++){
//         result.push(arr[i][right])
//     }
//     right--; //previous column

//     // right to left (bottom is fixed)
//     for(let i=right; i>=left; i--){
//         result.push(arr[bottom][i])
//     }
//     bottom--; //previous row

//     // bottom to top (left is fixed)
//     for(let i=bottom; i>=top; i--){
//         result.push(arr[i][left])
//     }
//     left++ //next column
// }
// console.log(result)

function count(n){
    if(n ==0){
        return;
    }
    count(n);
    count(n-1);
}
console.log(count(5));