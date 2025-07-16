const menuToggle = document.getElementById("menuToggle");
const dropdownMenu = document.getElementById("dropdownMenu");

// Toggle dropdown on hamburger click
menuToggle.addEventListener("click", () => {
  dropdownMenu.style.display =
    dropdownMenu.style.display === "block" ? "none" : "block";
});

// Hide dropdown after clicking a link
const links = dropdownMenu.querySelectorAll("a");
links.forEach(link => {
  link.addEventListener("click", () => {
    dropdownMenu.style.display = "none";
  });
});
