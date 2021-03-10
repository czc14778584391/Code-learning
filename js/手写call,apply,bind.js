// Function.prototype.mycall=function(){    //参数里面不需要写也可以用arguments提取
//     if(typeof this !=='function'){
//         throw 'caller is no a function !'       //function才有call方法
//     }

//     let othis=arguments[0]||window;
//     othis.fn=this;
//     let arg=[...arguments].slice(1);
//     let res=othis.fn(...arg);
//     Reflect.deleteProperty(othis,'fn');

//     return res
// }


Function.prototype.newcall=function(){

    if(typeof this !=='function'){     //this是函数对象
        throw 'caller is no a function!'
    }

    let othis=arguments[0]||window;  //保存输入的对象
    othis.fn=this;               //对象里面添加属性
    let arg=[...arguments].slice(1);   //argumentS是对象，提取参数
    let res=othis.fn(...arg);        //传入参数执行对象里面的函数
    Reflect.deleteProperty(othis,'fn');   //删除添加的属性，恢复原样
    return res;
}


Function.prototype.myapply=function(){

    if(typeof this !== 'function'){
        throw  'caller is not a function'; 
    }
     
    let othis=arguments[0]||window;
    othis.fn=this;
    let res='';
    if(arguments[1]){
        res= othis.fn(...arguments[1]);
    }else{
        res=othis.fn();
    }

    return res

}

// //结合apply手写bind
// Function.prototype.mybind=function(){

//     if(typeof this !== 'function'){
//         throw 'caller is no a function!'
//     }

//     let othis=this;

//     let args=[...arguments].slice(1);

//     return function F(){
//         //处理函数使用new的情况
//         if(this instanceof F){
//             return new othis(...args,...arguments);
//         }else{
//             return othis.apply(arguments[0],args.concat(...arguments))
//         }

//     }
// }

Function.prototype.newbind=function(){
    if(typeof this !=='function'){
        throw 'caller is not a function!'
    }

    let othis=this;

    let args=[...arguments].slice(1);

    return function F(){
        if(this instanceof F){
            return new othis(...args,...arguments);
        }
        else{
            return othis.apply(arguments[0],args.concat(...arguments));
        }
    }

}








let obj={
    name:'jojo'
}

function foo(a,b,c){
    console.log(this.name)
    console.log(a,b,c)
}

foo.newcall(obj);

foo.newcall(obj,1,2,3);