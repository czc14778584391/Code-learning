//防抖

// function debounce(fn,wait){

//     let timeout='null';    //闭包，只有内部函数才能修改timeout的值
//     return function(){     //要产生闭包必须要有return
//         if (timeout!==null) {
//             clearTimeout(timeout); 
//         }
//         timeout=setTimeout(fn,wait);
//     }

// }

function debunce(fn,wait){
    var timeout=null;

    return function(){
        if (timeout!==null) {
            clearTimeout(timeout);
        }

        timeout=setTimeout(fn,wait);
    }
}

       function hander(){
           console.log(Math.random())
       }

       window.addEventListener('scroll',debunce(hander,3000));
//节流

var throttle=function(fn,delay){

    var prev=0;

    return function(){
        const context=this;
        let now=Date.now();
        args=arguments;
        if (now-prev>=delay) {
            fn.apply(context,...args);
            prev=Date.now();//保存上一次执行的时间
        }
    }
 
}