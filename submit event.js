  // HTML part  
  // <form action="" method="get">
  //   <label for="name">Name:
  //     <input type="text" name="name" id="name1" required >
  //   </label>
  //   <label for="email">Email:
  //     <input type="email" name="email" id="email" required>
  //   </label>
  //   <label for="password">Password:
  //     <input type="password" name="password" id="password" required>
  //   </label>
  //   <button type="submit" value="submit" >Submit</button>
  // </form>

var form = document.querySelector("form");
var name = form.querySelector("#name1");
var email = form.querySelector("#email");
var password = form.querySelector("#password");

form.addEventListener("submit", submitFunc);
function submitFunc(event) {
  event.preventDefault(); //bar bar jeno refresh na hoy tar jonow
  const userInfo ={
    name :name1.value,
    email :email.value,
    password: password.value,
  }
  console.log(userInfo);
  name1.value ="";
  email.value ="";
  password.value ="";
}