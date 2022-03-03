var photos = ["images/1.jpg","images/2.jpg","images/3.jpg"];
var imageTag = document.querySelector("img");


var count = 0;
function prev() {
 count--;
  if (count < 0) {
    count = photos.length - 1;
    imageTag.src = photos[count];
  }else{
    imageTag.src = photos[count];
  }  
}


function next() {
  count++;
  if (count >= photos.length) {
    count = 0;
    imageTag.src = photos[count];
  }else{
    imageTag.src = photos[count];
  }
}



  // HTML part
  // <button onclick="prev()">Previous</button>
  // <img src="" alt="" height="300px" width="700px">
  // <button onclick="next()">Next</button>