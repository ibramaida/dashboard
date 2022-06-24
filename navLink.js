const navLinks = document.querySelectorAll(".nav-link");
// console.log(navLinks);

navLinks.forEach((navLink) => {
  navLink.addEventListener("click", (e) => {
    // console.log(e.target);
    // console.log(e.target.previousElementSibling);
    // console.log(e.target.nextElementSibling);
    navLinks.forEach((navLink) => {
      navLink.classList.remove("active");
    });
    if (e.target == navLink) {
      e.target.classList.add("active");
    } else {
      e.target.classList.remove("active");
    }
  });
});
