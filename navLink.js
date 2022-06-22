const navLinks = document.querySelectorAll(".nav-link");
// console.log(navLinks);

navLinks.forEach((navLink) => {
  navLink.addEventListener("click", (e) => {
    // console.log(e.target);
    navLinks.forEach((navLink) => {
      navLink.classList.remove("active");
    });
    if (e.target == navLink) {
      navLink.classList.add("active");
    } else {
      navLink.classList.remove("active");
    }
  });
});
