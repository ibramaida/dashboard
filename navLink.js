const navLinks = document.querySelectorAll(".nav-link");
// console.log(navLinks);

navLinks.forEach((navLink) => {
  navLink.addEventListener("click", (e) => {
    // console.log(e.target);
    // console.log(e.target.previousElementSibling);
    // console.log(e.target.nextElementSibling);
    navLinks.forEach((navLink) => {
      navLink.classList.remove("active");
      navLink.classList.remove("round-before");
      navLink.classList.remove("round-after");
    });
    if (e.target == navLink) {
      e.target.classList.add("active");
      e.target.previousElementSibling.classList.add("round-before");
      e.target.nextElementSibling.classList.add("round-after");
    } else {
      e.target.classList.remove("active");
      e.target.previousElementSibling.classList.remove("round-before");
      e.target.nextElementSibling.classList.remove("round-after");
    }
  });
});
