function startTimer(durationInSeconds) {
  const hoursElem = document.getElementById("hours");
  const minutesElem = document.getElementById("minutes");
  const secondsElem = document.getElementById("seconds");

  let remainingTime = durationInSeconds;

  const timer = setInterval(() => {
      const hours = Math.floor(remainingTime / 3600);
      const minutes = Math.floor((remainingTime % 3600) / 60);
      const seconds = remainingTime % 60;

      hoursElem.textContent = hours.toString().padStart(2, "0");
      minutesElem.textContent = minutes.toString().padStart(2, "0");
      secondsElem.textContent = seconds.toString().padStart(2, "0");

      if (remainingTime === 0) {
          clearInterval(timer);
          alert("Ticket validity expired!");
      }

      remainingTime--;
  }, 1000);
}
// Example usage:
startTimer(7200); // Start with a 1-hour timer

function toggleFullscreen() {
  const element = document.documentElement; // Full page
  
  if (!document.fullscreenElement) {
      element.requestFullscreen().then(() => {
          document.getElementById("fullscreen-btn").style.display = "none";
      }).catch(err => {
          console.error(`Error attempting to enable fullscreen: ${err.message}`);
      });
  } else {
      document.exitFullscreen().then(() => {
          document.getElementById("fullscreen-btn").style.display = "block";
      }).catch(err => {
          console.error(`Error attempting to exit fullscreen: ${err.message}`);
      });
  }
}

document.addEventListener("fullscreenchange", () => {
  const fullscreenBtn = document.getElementById("fullscreen-btn");
  if (document.fullscreenElement) {
      fullscreenBtn.style.display = "none";
  } else {
      fullscreenBtn.style.display = "block";
  }
});