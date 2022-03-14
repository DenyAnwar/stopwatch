window.onload = function() {
  var seconds = 00;
  var tens = 00;
  var appendTens_span = document.getElementById("tens");
  var appendSeconds_span = document.getElementById("seconds");
  var buttonStart_button = document.getElementById("button-start");
  var buttonStop_button = document.getElementById("button-stop");
  var buttonReset_button = document.getElementById("button-reset");
  var interval;

  buttonStart_button.addEventListener('click', function() {
    clearInterval(interval);
    interval = setInterval(startTimer, 10);
  });
  
  buttonStop_button.addEventListener('click', function() {
    clearInterval(interval);
  });
  
  buttonReset_button.addEventListener('click', function() {
    clearInterval(interval);
    tens = "00";
    seconds = "00";
    appendTens_span.innerHTML = tens;
    appendSeconds_span.innerHTML = seconds;
  });

  function startTimer() {
      tens++;

      if (tens <= 9) {
        appendTens_span.innerHTML = "0" + tens;
      }

      if (tens > 9) {
        appendTens_span.innerHTML = tens;
      }

      if (tens > 99) {
        console.log("seconds");
        seconds++;
        appendSeconds_span.innerHTML = "0" + seconds;
        tens = 0;
        appendTens_span.innerHTML = "0" + 0;
      }

      if (seconds > 9) {
        appendSeconds_span.innerHTML = seconds;
      }
  }
}