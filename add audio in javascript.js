                                  // 2 ta e thik ache
  // html part

  // <button class="myButton">click me1</button>
  // <button class="myButton">click me2</button>
  // <button class="myButton">click me3</button>




  // for (let i = 0; i < 3; i++) {
  //     document.querySelectorAll(".myButton")[i].addEventListener("click",function(){
  //     var text = this.innerHTML;

  //     switch (text) {
  //     case "click me1":
  //       var audio = new Audio("sound/1.mp3");
  //       audio.play();
  //       break;
  //       case "click me2":
  //       var audio = new Audio("sound/2.mp3");
  //       audio.play();
  //       break;
  //       case "click me3":
  //       var audio = new Audio("sound/2.mp3");
  //       audio.play();
  //     }
  //     });
  //     }



  // HTML part

  // <button class="btn">1</button>
  // <button class="btn">2</button>
  // <button class="btn">3</button>


for (let i = 0; i < 3; i++) {
    document.querySelectorAll(".btn")[i].addEventListener("click",function(){
    var btnText = this.innerHTML;
    play(btnText); //btntext ke for play audio function e transfer kora hoiche.
    playAnimation(btnText); //(btnText) command ta poila playAnimatin e connect hoche then eai line theke add animation er function e transfer hoiche.
  }) 
  }
// for play audio
  function play(btnText) {
    switch (btnText) {
      case "a":
      var tune = new Audio("sound/2.mp3")
      tune.play();
      break;
      case "b":
      var tune = new Audio("sound/2.mp3")
      tune.play();
      break;
      case "c":
      var tune = new Audio("sound/2.mp3")
      tune.play();
    }
  }
// for adding animatin on this button:

function playAnimation(btnText) {
  var selectedBtn = document.querySelector("."+btnText);
  selectedBtn.classList.add("anim");

  setTimeout(function () {
    selectedBtn.classList.remove("anim");
  },3000);  //eakhane 3000 mane 3 sec;
}

// for keypress 
document.addEventListener("keypress", function (goOut) {
  var btnText = goOut.key;//.key keyword er madhome (goOut) para meter theke keybord er key number ber kora hoiche....
  play(btnText);//keybord er keyword ke audio function e tranfer kora hoiche
  playAnimation(btnText);//keybord er keyword ke animation function e tranfer kora hoiche
  
})


// CSS part
// button{
//   width: 100px;
//   height: 50px;
//   margin: 20px;
//   border-radius: 5px;
// }

// .anim{
//   box-shadow: 0 15px 18px 0 turquoise;
//   opacity: 0.5;
//   background-color: aquamarine;
// }












































