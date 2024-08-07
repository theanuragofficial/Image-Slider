let nextBtn = document.querySelector(".next-btn");
let prevBtn = document.querySelector(".prev-btn");

nextBtn.addEventListener("click", function () {
  let sliders = document.querySelectorAll(".sliders");
  document.querySelector(".slide").appendChild(sliders[0]);
});

prevBtn.addEventListener("click", function () {
  let sliders = document.querySelectorAll(".sliders");
  document.querySelector(".slide").prepend(sliders[sliders.length - 1]);
});

setInterval(function () {
  nextBtn.click();
}, 5000);
