// html parent
// <textarea name="textarea" id="text" cols="30" rows="10" placeholder="Write text in here" ></textarea>


var textarea = document.querySelector("textarea");
textarea.addEventListener("keydown", function(){
  console.log("keypress down");
});
textarea.addEventListener("keypress", function(){
  console.log("keypress done")});
textarea.addEventListener("keyup",keyUp);
function keyUp() {
  console.log("key is free");
}


// property of keypress event (key, keycode, code, shiftKey, ctlKey, repeat);