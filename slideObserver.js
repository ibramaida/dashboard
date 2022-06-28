const slides = document.querySelectorAll(".slide");

const slide1 = document.querySelector(".slide1");
const slide2 = document.querySelector(".slide2");
const slide3 = document.querySelector(".slide3");

const slide1Indicator = document.querySelector(".slide1-indicator");
const slide2Indicator = document.querySelector(".slide2-indicator");
const slide3Indicator = document.querySelector(".slide3-indicator");

const options = {
  root: null,
  threshold: 1,
  rootMargin: "0px",
};

const observer = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    }

    if (entry.target == slide1) {
      slide1Indicator.classList.add("active");
    } else {
      slide1Indicator.classList.remove("active");
    }
    if (entry.target == slide2) {
      slide2Indicator.classList.add("active");
    } else {
      slide2Indicator.classList.remove("active");
    }
    if (entry.target == slide3) {
      slide3Indicator.classList.add("active");
    } else {
      slide3Indicator.classList.remove("active");
    }
  });
}, options);

slides.forEach((slide) => {
  observer.observe(slide);
});
