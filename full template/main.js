// js/main.js

// Basic client-side validation for contact form
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  if (form) {
    form.addEventListener("submit", (e) => {
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      if (!name || !email || !message) {
        e.preventDefault();
        alert("Please fill in all fields before submitting.");
      }
    });
  }
});

// Smooth scroll behavior (if needed)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Future features placeholder
// e.g., dark mode toggle, mobile menu
