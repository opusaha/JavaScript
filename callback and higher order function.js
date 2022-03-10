// function square(x) {
//     console.log(`Square of ${x} : ${x*x}`);
// }



//  function higherOrderFunction(num , callback) {
//      callback(num)
//  }
//  higherOrderFunction(70 , square);



const taskOne = (callback)=> {
    console.log("task1");
    callback();
};
const taskTwo =(callback) =>{
    setTimeout (() => {
        console.log("task2 = data loading");
        callback();
    },3000)
};
const taskThree = (callback)=> {
    console.log("task3");
    callback();
};
const taskFour = (callback)=> {
    console.log("task4");
    callback();
}
const taskFive = (callback)=> {
    console.log("task5");
    callback();
}


taskOne(() => {
    taskTwo(() => {
        taskThree(() => {
            taskFour(() => {
                taskFive(() => {  
                })
            })
        })
    })
});