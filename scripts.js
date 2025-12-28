document.addEventListener("DOMContentLoaded", function () {
  // Fade-in sections on scroll
  const sections = document.querySelectorAll("main section, article section, .page-layout-article .content > section");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      });
    },
    { threshold: 0.12 }
  );

  sections.forEach((section) => {
    section.classList.add("fade-section");
    observer.observe(section);
  });

  // Subtle navbar shadow on scroll
  const navbar = document.querySelector(".navbar");
  if (navbar) {
    const onScroll = () => {
      if (window.scrollY > 6) {
        navbar.classList.add("navbar-scrolled");
      } else {
        navbar.classList.remove("navbar-scrolled");
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }
});
