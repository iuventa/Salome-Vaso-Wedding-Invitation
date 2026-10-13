// Set the date we're counting down to
var countDownDate = new Date("Nov 12, 2026 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="timeuntillweddingday"
  document.getElementById("timeuntillweddingday").innerHTML = days + "დღე : " + hours + "სთ : "
  + minutes + "წთ : " + seconds + "წმ ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timeuntillweddingday").innerHTML = "EXPIRED";
  }
}, 1000);


const vinyl = document.getElementById("vinyl");
const music = document.getElementById("music");

vinyl.addEventListener("click", () => {
  if (music.paused) {
    music.play();
    vinyl.classList.add("playing");
  } else {
    music.pause();
    vinyl.classList.remove("playing");
  }
});



const rsvpForm = document.getElementById("rsvpForm");
const rsvpMessage = document.getElementById("rsvpMessage");
const rsvpSubmit = document.getElementById("rsvpSubmit");
const responseFrame = document.getElementById("rsvpResponseFrame");

let waitingForResponse = false;

rsvpForm.addEventListener("submit", function () {
  // required ველები ბრაუზერის მიერ მოწმდება
  waitingForResponse = true;

  rsvpSubmit.disabled = true;
  rsvpSubmit.textContent = "იგზავნება...";
  rsvpMessage.textContent = "გთხოვთ, დაელოდოთ...";

  // ფორმა ჩვეულებრივად იგზავნება დამალულ iframe-ში
  // ამიტომ სტუმარი ამავე გვერდზე რჩება
});

responseFrame.addEventListener("load", function () {
  if (!waitingForResponse) return;

  waitingForResponse = false;

  rsvpMessage.textContent =
    "გმადლობთ! თქვენი პასუხი მიღებულია. 🤍";

  rsvpSubmit.disabled = false;
  rsvpSubmit.textContent = "პასუხის გაგზავნა ♡";

  rsvpForm.reset();
});