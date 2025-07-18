const menuToggle = document.getElementById("menuToggle");
const dropdownMenu = document.getElementById("dropdownMenu");
const ctaButtons = document.querySelectorAll(".cta-button");
const form = document.getElementById("edtech-form");
const formSelect = document.getElementById("sector");

// Toggle dropdown menu and update ARIA attributes
menuToggle.addEventListener("click", () => {
  const isOpen = dropdownMenu.classList.contains("active");
  dropdownMenu.classList.toggle("active", !isOpen);
  menuToggle.setAttribute("aria-expanded", !isOpen);
});

// Hide dropdown when clicking a link
dropdownMenu.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    dropdownMenu.classList.remove("active");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

// Close dropdown when clicking outside
document.addEventListener("click", (event) => {
  if (!dropdownMenu.contains(event.target) && !menuToggle.contains(event.target)) {
    dropdownMenu.classList.remove("active");
    menuToggle.setAttribute("aria-expanded", "false");
  }
});

// Scroll to form and pre-select sector on CTA button click
ctaButtons.forEach(button => {
  button.addEventListener("click", () => {
    const formSection = document.getElementById("contact-form");
    const sectionId = button.getAttribute("data-section");

    // Scroll to form
    formSection.scrollIntoView({ behavior: "smooth" });

    // Pre-select sector in dropdown
    if (sectionId && formSelect) {
      formSelect.value = sectionId;
    }
  });
});

// Form submission with loading spinner
if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const submitButton = form.querySelector(".form-submit-button");
    const mobileInput = form.querySelector("#mobile");

    // Basic mobile number validation
    if (mobileInput && !/^[0-9]{10}$/.test(mobileInput.value)) {
      mobileInput.focus();
      mobileInput.style.borderColor = "#dc3545";
      return;
    }

    submitButton.disabled = true;
    submitButton.innerHTML = '<span class="spinner"></span> Submitting...';

    // Simulate form submission delay
    setTimeout(() => {
      const formContainer = document.querySelector(".form-container");
      formContainer.innerHTML = `
        <h2>📬 Thank You!</h2>
        <p>Your message has been submitted. We'll get back to you soon!</p>
      `;
    }, 1500);
  });
}