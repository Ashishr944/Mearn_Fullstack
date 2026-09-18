// find the maximum in the array using recursion

let arr = [1,5,6,7,2,8,4];
function maxArr(arr){
    if ( arr.length == 1){
        return arr[0];
    }
    const maxOfRest = maxArr(arr.slice(1));

    if (arr[0]> maxOfRest){
        return arr[0];
    }
    else{
        return maxOfRest
    }

}
console.log(maxArr(arr)) // 8



// reverse a string using recursion
let srt = "acciojob";
function reverseStr(str){
    if(str.length == 0) return " ";
    return reverseStr(str.slice(1))+ str[0];
}

console.log(reverseStr("acciojob"));