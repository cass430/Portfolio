// Add this JavaScript code to toggle the visibility of the mobile menu
document
  .getElementById("hamburger-icon")
  .addEventListener("click", function () {
    var menu = document.querySelector(".mobile-menu");
    if (menu.style.display === "flex") {
      menu.style.display = "none";
    } else {
      menu.style.display = "flex";
    }
  });

// sliding effects on home page

document.addEventListener("DOMContentLoaded", () => {
  // Select all elements with either hidden-left or hidden-right class
  const rows = document.querySelectorAll(".hidden-left, .hidden-right");

  // Intersection Observer to reveal elements on scroll
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show"); // Add the show class
          observer.unobserve(entry.target); // Stop observing once shown
        }
      });
    },
    { threshold: 0.1 }
  );

  // Observe each row with hidden-left or hidden-right class
  rows.forEach((row) => observer.observe(row));
});

//Typewritter Effect

new Typewriter("#my-name", {
  strings: ["Cassidy Perry"],
  autoStart: true,
  cursor: null,
  loop: true,
});
