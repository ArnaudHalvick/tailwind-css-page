const btn = document.getElementById("menu-btn");
const nav = document.getElementById("menu");

// Add click event listener to hamburger button
btn.addEventListener("click", () => {
  // Toggle the 'open' class on the button
  btn.classList.toggle("open");

  // Toggle the 'hidden' class on the menu
  nav.classList.toggle("hidden");

  // Toggle flex classes for proper display
  nav.classList.toggle("flex");
});
