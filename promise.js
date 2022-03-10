const p1 = new promise((resolve, reject)=>{
    let completedPromise = true;
    if(completedPromise){
        resolve(`completed promise 1`)
    }else{
        reject(`not completed promise 1`)
    }
});
console.log(p1);