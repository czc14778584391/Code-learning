(function Promise(window){

    function Promise(executor){
    
    const self=this;
    self.data=undefined;
    self.status="pending";
    self.callBacks=[];

    function reject(value){
        if(self.status!="pending")return;

        self.status="rejected";
        self.data=value;
        if(self.callBacks.length>0){
            self.callBacks.forEach( callBacksObj=> {
                setTimeout(()=>{
                    callBacksObj.onRejected(value);
                })
            });
        }
    }

    function resolve(value){
        if(self.status!="pending")return;

        self.status="resolved";
        self.data=value;
        if(self.callBacks.length>0){
            self.callBacks.forEach( callBacksObj=> {
                setTimeout(()=>{
                    callBacksObj.onResolved(value);
                })
            });
        }
    }


    try {
        executor(resolve,reject);
    } catch (error) {
        reject(error);
    }
        
    }

    Promise.prototype.then=function (onResolved,onRejected){
        const self=this;
 
        onResolved=typeof onResolved =="function"?onResolved:value=value;
        onRejected=typeof onRejected =="function"?onRejected:()=>{throw this.data};

       
        return new Promise((resolve,reject)=>{

            const handle=function(callBack){
                try {
                    const result=callBack(self.data);
                    if(result instanceof Promise){
                        result.then(resolve,reject);
                    }else {
                        resolve(result);
                    }
                } catch (error) {
                   reject(error); 
                }
               
            }

            if (self.status=="pending"){
                self.callBacks.push({
                    onResolved(){
                            handle(onResolved);
                    },
                    onRejected(){
                            handle(onRejected);       
                    }
                })
            }else if(self.status=="resolved"){
                setTimeout(()=>{
                    handle(onResolved);
                })
            }else{
                setTimeout(()=>{
                    handle(onRejected);
                })
            }
        })
    }
       
    Promise.prototype.catch=function(onRejected){
        const self=this;
        return self.then(undefined,onRejected);
    }

    Promise.resolve=function (value){
        const self=this;
        return new Promise((resolve,reject)=>{
            if(value instanceof Promise){
                 value.then(resolve,reject);
            }else{
                resolve(value);
            }
        })
    }

    Promise.reject=function (reason){
        return new Promise((resolve,reject)=>{
           reject(reason);
        })
    }

    Promise.all=function (promises){
        const values=[];
        let valusesCount=0;
        return new Promise((resolve,reject)=>{
            promises.forEach((p,index)=>{  
                    p.then((value)=>{
                        values[index]=value;
                        valusesCount++;
                        if(valusesCount==promises.length){
                            resolve(values);
                    }},(reason)=>{
                        reject(reason);        
            }
            )
        })
    })
    }

    Promise.race=function(promises){
        return new Promise((resolve,reject)=>{
            promises.forEach((p,index)=>{
                p.then(value=>{
                    resolve(value);
                },reason=>{
                    reject(reason);
                })
            })
        }) 
    }
window.Promise=Promise;
})(window)