var countDownDate = new Date("Oct 27, 2025 16:35:00").getTime();

var x = setInterval(function () {
  var now = new Date().getTime();
  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var totalHours = Math.floor(distance / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, "0");
  var seconds = Math.floor((distance % (1000 * 60)) / 1000).toString().padStart(2, "0");

  document.getElementById("contador").innerHTML =
    days + " dias, ou:<br><br>"+ totalHours + ":" + minutes + ":" + seconds;

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("contador").innerHTML = "EXPIRADO";
  }
}, 1000);
