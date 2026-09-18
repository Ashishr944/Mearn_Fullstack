// console.log("asd");
// find element in array by linear search
// let arr = [1,2,3,4,5,6];
// let target = 5;
// function linearSearch(arr, target){
//     for( let i=0; i<arr.length; i++){
//         if(target == arr[i]){
//             return true;
//         }
//     }
//     return false;
// }

// console.log(linearSearch(arr, target));

//************************************** */
// binar search
//************************************** */
// thing required for a binary search:
// 1) sorted array
// 2) 3 pointers left, mid, right

// step1) -> checks if target == mid
// step2) -> checks if (target< mid)

// lift = mid - 1;
// right = mid + 1;


//**************************************** */
let arr = [1,2,3,4,5,6,7];
let target = 5;

// find the first occurance of the target -> return the index
function binarySearch(arr, target){
    let left = 0;
    let right = arr.length -1;

    while( left <= right){
        let mid = Math.floor((left + right)/2 );
        if(arr[mid] == target){
            result = mid ;// storing the value of the index
            right = mid - 1; // checking on the left side
        }
        else if( arr[mid] < target){
            left = mid +1; // target is on the right side of the array
        }
        else{
            right = mid -1; // target is on the left side of the array
        }
    }
    return result;

}
console.log(binarySearch(arr, target)); // 4


// step 0-> n
// after step 1-> n/2
// step 2-> n/4
// step 3-> n/8

// complexity
// O(log(n))

// if the target is not present find the left most index where it should be inserted in th array