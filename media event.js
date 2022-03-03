// html part
// <video src="video/1.mp4" controls loop></video>



var video = document.querySelector("video");
video.addEventListener("canplay", function () {
  console.log("canplay");
});
video.addEventListener("play", function () {
  console.log("play");
});
video.addEventListener("playing", function () {
  console.log("playing");
});
video.addEventListener("pause", function () {
  console.log("paused");
});
video.addEventListener("end", function () {
  console.log("Thanks for Watching");
});
video.addEventListener("volumechange", function () {
  console.log("Volume changed");
});
video.addEventListener("waiting", function () {
  console.log("Waiting");
});