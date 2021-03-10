class Parent{   //类

   constructor(age){                                      //class 里面都是方法，其中有一个默认construct方法来设置属性
       this.age=age;
   }

   getage() {
    console.log(`my name is ${this.age}`);    
   }
}


class Son extends  Parent{                            //extends 必须搭配super使用
    constructor(age,myclass){
        super(age);        //使用父类的构造函数
        this.myclass=myclass
    }
    getclass(){
        console.log(`my class is ${this.myclass}`);   
    }
}

const sz= new Son(18,7);
sz.getage();
sz.getclass();

