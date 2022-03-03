// destrycting array:
let numbers =[10,20,30,40,50,60,70,80,90];
let [num1,num2,...z] = numbers;
console.log(numbers);
console.log(z);
console.log(z[5]);


// swap variables
let a = 10;
let b = 20;
[a,b] =[b,a]
console.log(a,b);

// object destruction:
const studentInfo ={
  id : 201,
  fullname : `Anisul Islam`,
  cgpa : 3.92,
  language: {
    native: Bangla,
    begainer: English
  }
  }
  const{id, fullname} =studentInfo
  console.log(studentInfo);