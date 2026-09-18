//Merge Sort
// Dividing the array to get singular elements
// merging your devided arrays in a sorted order
// we compare 1st element of each array and push the smaller into the result
// here is empty -> push elements inside result


// this function devides the array into smaller peices
// let arr = [ 23, 45,654,6,2,1,5,-1]
function mergeSort(arr){
    if(arr.length <= 1){
        return arr;
    }

    const mid = Math.floor(arr.length/2);

    let leftArr = mergeSort(arr.slice(0, mid));
    
    let rightArr = mergeSort(arr.slice(mid));

    return merge(mergeSort(leftArr), mergeSort(rightArr));



}

// this funciton merges the sorted array
function merge(leftArr, rightArr){
    const sortedArr = [];

    // check if both the array are empty or not

    while( leftArr.length >0 && rightArr.length > 0){
        if(leftArr[0]<= rightArr[0]){
            // need to remove the 1st element from the left array and push it into sortedArr
            sortedArr.push(leftArr.slice())
        }
        else{
            sortedArr.push(rightArr.slice());
        }
    }
    // when either array is empty push the elements at the end
    return [...sortedArr, ...leftArr, ...rightArr]

}
let arr = [ 23, 45,654,6,2,1,5,-1]

console.log(mergeSort(arr));