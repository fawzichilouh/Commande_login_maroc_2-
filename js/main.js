$(document).ready(function () {
  $("#countdown1").ClassyCountdown({
    theme: "white", // theme
    end: $.now() + 645600, // end time
  });

  var timer2 = "03:00";

  var interval = setInterval(function () {
    var timer = timer2.split(":");
    //by parsing integer, I avoid all extra string processing
    var minutes = parseInt(timer[0], 10);
    var seconds = parseInt(timer[1], 10);
    var my_seconds = minutes * 60 + seconds;

    --seconds;
    minutes = seconds < 0 ? --minutes : minutes;
    seconds = seconds < 0 ? 59 : seconds;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    //minutes = (minutes < 10) ?  minutes : minutes;
    $(".ClassyCountdown-seconds .ClassyCountdown-value > div").html(
      minutes + ":" + seconds
    );
    if (minutes < 0) clearInterval(interval);
    //check if both minutes and seconds are 0
    if (seconds <= 0 && minutes <= 0) clearInterval(interval);
    timer2 = minutes + ":" + seconds;
  }, 1000);
});

$(".switch_page li").click(function () {
  $("#" + $(this).attr("data-id"))
    .addClass("d-block")
    .siblings()
    .removeClass("d-block");

  $(".switch_page li").removeClass("active");
  $(this).addClass("active");
});
$("#submit1").click(function () {
  $(".log_1").addClass("d-none");
  $(".log_2").removeClass("d-none");
});
$("#submit2").click(function () {
  $(".log_2").addClass("d-none");
  $(".log_3").removeClass("d-none");
});
