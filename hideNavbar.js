let lastScrollTop;
navbar = document.querySelector(".header");
window.addEventListener("scroll", function () {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  console.log(scrollTop);
  console.log(lastScrollTop);
  console.log(scrollTop > lastScrollTop);
  if (scrollTop > lastScrollTop) {
    navbar.style.bottom = "-100%";
  } else {
    navbar.style.bottom = "0";
  }
  lastScrollTop = scrollTop;
});
