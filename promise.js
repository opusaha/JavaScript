const p1 = new promise((resolve, reject)=>{
    let completedPromise = true;
    if(completedPromisen){
        resolve(`completed promise 1`)
    }else{
        reject(`not completed promise 1`)
    }
});
p1.then((res)=>{
    console.log(res);
})