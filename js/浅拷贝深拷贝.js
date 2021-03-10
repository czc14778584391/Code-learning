//浅拷贝

const shallowCopy=function(obj){  //拷贝对象的  
     if(typeof obj!=='object'){
         throw 'not a object'
     }
   
     let newobj=Array.isArray(obj)?[]:{};  //对象可以是数组或者对象，实现第一层循环

     for (const key in obj) {
        
         newobj[key]=obj[key];
             
     }

     return newobj

}


//深拷贝 用递归
const deepCopy=function(obj){

 if(typeof obj !=='object') return;

 let newobj=Array.isArray(obj)?[]:{};

 for (const key in obj) {
     if (typeof obj[key]=='object') {
         
         newobj[key]=deepCopy(obj[key]);//返回新引用的对象
     }else{
         newobj[key]=obj[key]
     }
 }
 return newobj;

}



let person={
    age:18,
    name:'sz',
    class:{
        num:60
    }
}

// let nperson=shallowCopy(person);
// console.log(nperson);
// nperson.class.num=50;
// console.log(nperson);


let nperson=deepCopy(person);
console.log(nperson);
nperson.class.num=50;
console.log(person);