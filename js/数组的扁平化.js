//解构赋值
function flatten(arr){

   while(arr.some(item=>Array.isArray(item))){

        arr=[].concat(...arr);
   }

   return arr;
   
}

let array=[1,[2,2,3,[5,5,5,5]]]

// console.log(flatten(array));

//方法2   递归
function flatten2(arr){
    let newarr=[];

    for(let i=0;i<arr.length;i++){
        if(Array.isArray(arr[i])){
            newarr= newarr.concat(flatten2(arr[i]))
         }else{
             newarr.push(arr[i]);
         }
    } 
    return newarr
}
console.log(flatten2(array));

