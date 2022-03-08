let taskOne = ()=> {
    console.log("task1");
}
const dataLoading = () => {
    console.log("task2");
};

let taskTwo = ()=> {
    setTimeout(dataLoading, 2000)
}
let taskThree = ()=> {
    console.log("task3");
}
let taskFour = ()=> {
    console.log("task4");
}
let taskFive = ()=> {
    console.log("task5");
}

taskOne();
taskTwo();
taskThree();
taskFour();
taskFive();
// task 2 te setTimeout holo Asynchronous programming. ear madhome konow ekta nirdishto kaj ke background e rekhe onow kaj gulu easilly kora possible. 