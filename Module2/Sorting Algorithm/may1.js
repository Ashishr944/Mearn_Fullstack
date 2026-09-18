// Basic sorting Algorithm
// arr = [5,1,4,3,2] -> arr.sort(func)
// function func(a,b){
//     return a -b
// }
//********************************** */
//1) bubble sort
// compare adjacent elements in the array and swap the position if they are not in the 
// ended order
// repeat the instruction as you stop through each element in the array
// once you step through the whole array with no dwap the array is spread


// working
// [ -5,22,45,1,2,4,0];
// [-5,22,1,2,4,0,45];
// [-5,0,1,2,4,22,45];
// end of array elements swapped >0 -> repeat











// function bubbleSort(arr){
//     let swap;
//     do{
//         swap =false;
//         for(let i =0; i< arr.length-1; i++){
//             if(arr[i] > arr[i+1]){  // for accending order
//             // if(arr[i] < arr[i+1]){   // for decending order change 
//                 let temp =arr[i];
//                 arr[i] = arr[i+1];
//                 arr[i+1] = temp;
//                 swap = true;
//             }
//         }
//     }
//     while(swap);
// }
// let arr = [ 5, 2,24, -1, 6];
// bubbleSort(arr);
// console.log(arr); //[ -1, 2, 5, 6, 24 ]
// let arr1 = [ 5,2,6,0,5,8];
// bubbleSort(arr1);
// console.log(arr1); // [ 0, 2, 5, 5, 6, 8 ]

// // best case : O(n)
// // worst case: O(n^2) // [20,8,6,4,-1]



//***************************************** */
//2) Insertion sort:
// here we virtual;ly split the array into sorted and unsorted part
// assume that the list is already sorted anf remaining element are unsorted
// selct an unsorted element and compare with all element in the sorted part


// if the element in the sorted part is similar than the selected element, proceed to the next element
// unsorted part, else shift larger element in the sorted part toward the right


// insert the selected elements at the right index
// repeat till all the unsorted elements are placed in the right
















// function insertionSort(arr){
//     for( let i =1;  i < arr.length; i++ ){
//         let NTI= arr[i]; // number to insert
//         let j = i -1;  // index of sorted element
//         // we compare the sorted element in array with the NTI
//         // and trying to find the index where the isertion should take place
//         // the index is where the sorted element is lesser that the NTI
//         while(j >=0 && arr[j] > NTI){
//             arr[j+1]= arr[j];
//             j = j -1;

//         }
//         arr[j+1] = NTI  // this is where the insertion takes place

//     }
// }
// let arr = [8, -1 ,0 ,4, 86, 2, -4];
// insertionSort(arr);
// console.log(arr) // [-4, -1,  0, 2, 4,  8, 86 ]


// best case O(n)
// worst case O(n^2)


//********************************************** */
// 3) Selection sort
// here we scan the unsorted element of an array for a min value and swap the position from the beginning
// [8, 20, -2, 4,-6]
// 














function selectionSort(arr){
    // the below loop is to keep track of the index where the swap needs to take place
    for( let i =0; i< arr.length; i++){
        let minIndex = i;
        for( let j = i+1; j<arr.length; j++){
            if(arr[j] < arr[minIndex]){
                minIndex = j;
            }
        }
        // swaping tech1:
        let temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;

        // swapin tech2
        // [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]


    }

}
let arr= [8, 30, 45 ,2, -9];
selectionSort(arr);
console.log(arr); // [ -9, 2, 8, 30, 45 ]