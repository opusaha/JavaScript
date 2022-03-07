let number = (a,b)=>a+b;
console.log(number(10,15));
// arrow function e 2 ta para meter pass korar way.
// single line e command likhle {} er dorker hoy na. and {} na dele return er dorker o hoy na.


let number1 = (a,b,c,d) => {
  return a+b+c+d;
}
console.log(number1(1,2,3,4));
// eai khane {} er madhome multi line commands use kora hoiche fole eai khane return o dete hoiche.


                    //  Fat arrow function  (this keyword).

var javascript = {
  name : javascript,
  library: [ "react" , "angular", "veu"],
  printLibrary : function(){
    this.library.forEach(function (a) {
      console.log(`${this.name} loves ${a}`);
    })
  },
}
javascript.printLibrary()   /* eai khane amader output dorker javascript loves react, javascript loves angular and veu
                            but amader out put asche :undefined loves react
                            es6/arrow function.js:21
                            undefined loves angular
                            es6/arrow function.js:21
                            undefined loves veu
                            es6/arrow function.js:21  */

var javascript = {
  name : "javascript",
  library: ["react","angular","veu"],
  printLibrary : function(){
    this.library.forEach((a) => console.log(`${this.name} loves ${a}`));
  },
}
javascript.printLibrary()                     