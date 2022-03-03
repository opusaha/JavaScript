  // HTML part
  
  //  <label for="name">name:
  //    <input type="text" name ="name"           id="inputId" class="nameInput">
  //  </label>

// var input = document.querySelector("input[name=name]");
// input.addEventListener("change", changeFunc);

// function changeFunc (event) {
//   // console.log(event);
//   // console.log(event.type);
//   // console.log(event.target);
//   // console.log(event.target.className);
//   // console.log(event.target.id);
//   // console.log(event.target.value);
// }

// HTML part

// <div>
// <h2>Programing language</h2>
// <label for="program"><input type="checkbox" name="program" id="" value="c">C</label>
// <label for="program"><input type="checkbox" name="program" id="" value="java">Java</label>
// </div>



var programs = document.querySelectorAll('input[name=program]');

Array.from(programs).map((program)=>{
  program.addEventListener("change", myProgram);
})

function myProgram(event) {
  if (event.target.checked) {
    console.log("You have chosed your language");
  }
  else{
    console.log("You have unmarked your language")
  }
}