let arr = [ 1,3,4,5,6,7,8,9]
let sumEven = arr.filter((item) =>{
   
    if(item % 2 == 0){
        return true;
    }
   
});
console.log(sumEven);
let arr1 = sumEven;
let sum = 0;
for(let i =0; i< arr1.length; i++){
    sum += arr1[i];
}
console.log(sum)