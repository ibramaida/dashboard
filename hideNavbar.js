let lastScrollTop;
navbar = document.querySelector(".header");
window.addEventListener("scroll", function () {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    navbar.style.bottom = "-100%";
  } else {
    navbar.style.bottom = "0";
  }
  lastScrollTop = scrollTop;
});
