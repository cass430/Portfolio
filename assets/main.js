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
