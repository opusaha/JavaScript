// function footToMile(foot) {
//   let mile = foot / 5280;
//   return mile;
// }
// let foot = footToMile(prompt("input ur foot"))
// document.write(foot+"<br>") 

function woodCalculator(chair, table, bed) {
  var total = chair + table*3 + bed*5;
  return total
}
var result = woodCalculator(parseInt(prompt("Input your chair number:")), parseInt(prompt("Input your table number:")), parseInt(prompt("Input your bed number:")));
console.log(result + "cubic feet wood need.");

  
// function brickCalculator(floor) {
//   if (floor<=10) {
//     let totalFeet = floor*15;
//     let totalbricks = totalFeet*1000;
//     return totalbricks;
//   } else if (floor>10 && floor<=20) {
//     let floorFeet12 = floor - 10;
//     let floorFeet15 = floor - floorFeet12;
//     let totalFeet = floorFeet12 * 12 + floorFeet15* 15;
//     let totalbricks = totalFeet*1000;
//     return totalbricks;
//   }else{
//     let floorFeet10 = floor - 20;
//     let totalFeet = 10*15 + 10*12 + floorFeet10*10;
//     let totalbricks = totalFeet*1000;
//     return totalbricks;
//   }
// }
// let floor = parseInt(prompt("input your floor number:"));
// let totalBricks = brickCalculator(floor);
// document.write(totalBricks);

// var friendsName = [abir, foisal, mya, kabir, jack, opu];
