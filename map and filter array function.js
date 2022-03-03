// map array
const myNumber = [1,2,3,4,5,6,7];
const squareNumber = myNumber.map(function (x) {
  return x*x;
})
console.log(squareNumber);
//map array er kaj holo command er sahajje array gular nirdishto valu ber kore new array create kora




//filter array
const inputNumber = [3,4,5,6,7,8,9,10];
const bigger6Number = inputNumber.filter(function (x) {
  return x>6;
})
console.log(bigger6Number);
//filter nuber er kaj holo array theke spesiqic kichu jinish filter kore alada arry decliare kora