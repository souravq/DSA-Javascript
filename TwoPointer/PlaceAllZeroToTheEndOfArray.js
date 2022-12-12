// Place all zero end of the array.

const arr = [0,5,0,6,8,0,0,10,1,0,0,0,13,0];

let k = 0;
let temp = 0;
for(let i = 0; i < arr.length-1; i++){
    if(arr[i]==0){
        if(arr[i]!=arr[i+1]){
            temp = arr[i+1];
            arr[i+1] = arr[i];
            arr[k] = temp;
            k++;
        }
    }else{
        k++;
    }
    //console.log(arr);
}

console.log(arr);