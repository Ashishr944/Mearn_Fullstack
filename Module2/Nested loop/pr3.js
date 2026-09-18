let n =4
// for( i =0; i < n; i++){
//     row = "";
//     for(let j =0; j< n; j++){
//         row += "*";
//     }
// console.log(row)
// }

// for(let i =0; i<=n; i++){
//     let row= "";
//     for(let j =0; j<=i; j++){
//         row += "*"
//     }
//     console.log(row);
// }


// for(let i =1; i<= n; i++){
//     let row = "";

//     for(let j =1; j<= n -i; j++){
//         row += " ";
//     }
//     for(let j =1; j<=i; j++){
//         row += "*"
//     }
//     console.log(row);
// }


// for(let i =n; i>= i; i--){
//     row = "";
//     for(let j =1; j<=i; j++){
//         row += "*";
//     }
//     console.log(row);
// }


// for(let i=1; i <=n; i++){
//     let row = "";
//     for(let j =1; j<= n -i; j++){
//         row += " ";
//     }
//     for(let k =0; k< 2* i -1; k++){
//         row += "*";
//     }
//     console.log(row);
// }


for(let i =1; i<= n; i++){
    let row = "";
    for(let j =1; j<= n - i; j++){
        row += " ";
    }
    for(let k =1; k<=2 * i-1; k++){
        if( k===1 || k === (2 * i -1) || i ===n){
            row += "*";
        }
        else{
            row +=" "
        }

    }
    console.log(row);
}