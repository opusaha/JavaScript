var count = 0;

document.querySelector("textarea").addEventListener("keypress",function (press) {
  count++
  var outPut = press.key;
  document.querySelector("p").innerHTML="You have pressed : "+ outPut;
  document.querySelector("h1").innerHTML="You have total pressed : "+ count + "times";
});

// HTML PART
// <textarea name="" id="" cols="30" rows="10"></textarea>
// <p>Write text in here</p>
// <h1></h1>
