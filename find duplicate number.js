var array = [1,2,4,5,6,6,3,3,4,2,3,3,11,34,111,33,21,1,4,56,2,42,32,1,3,5];
var finalArray =[];
for (let i = 0; i < array.length; i++) {
  const element = array[i];
  var index = finalArray.indexOf(element);
  if (index == -1) {
    finalArray.push(element);
  }
}
console.log(finalArray);