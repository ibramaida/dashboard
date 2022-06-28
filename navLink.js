const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((navLink) => {
  navLink.addEventListener("click", (e) => {
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
