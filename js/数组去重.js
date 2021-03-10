function handlestr(str){
    let arr=str.split('');    //str.split('')把一个字符串分割为字符串数组, 不改变原始字符串
    let nums='';   
    let words=''

    arr.forEach(element => {
        if(/\d/.test(element)){
            nums += element;   //字符串拼接
        }else if(/[a-zA-Z]/.test(element)){
            words +=element;
        }
    });
  
     return uniquestr(nums)+words;   //这时的nums是字符串
 
}


function uniquestr(str){

    var arr =str.split('');   //变成数组使用数组方法

    return arr.filter(function(element,index){      //过滤器

         return arr.indexOf(element)=== index
    }).join('')                 //arr.join（‘’） 把数组的所有元素放入一个字符串。

}


console.log(handlestr('携程C2t01li8p2020校招'));

//方法2 set
function replace2(arr){

    return [...new Set(arr)]

}

let arr=[1,2,13,65,1,2,3,5]

//方法3 map

function replace3(arr){

const seen=new Map();
 return arr.filter(a=>!seen.has(a)&&seen.set(a,1))

}

function flatten3(arr) {
   return arr.filter(function (item,index) {
        return arr.indexOf(item)==index;
    })
}

return [...new Set(arr)];