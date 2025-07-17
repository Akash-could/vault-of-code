document.getElementById("menuToggle").onclick = () => {
  document.getElementById("navMenu").classList.toggle("show");
};

document.getElementById("searchInput").addEventListener("keyup", function () {
  const query = this.value.toLowerCase();
  document.querySelectorAll(".card").forEach(card => {
    card.style.display = card.textContent.toLowerCase().includes(query) ? "block" : "none";
  });
});

document.getElementById("darkModeBtn").onclick = () => {
  document.body.classList.toggle("dark-mode");
};
// Open modal when any "Apply Now" button is clicked
document.querySelectorAll(".card button").forEach(button => {
  button.addEventListener("click", () => {
    document.getElementById("applyModal").style.display = "block";
  });
});

// Close modal when clicking the close button
document.querySelector(".close").addEventListener("click", () => {
  document.getElementById("applyModal").style.display = "none";
});

// Close modal if clicked outside the form
window.onclick = function(event) {
  const modal = document.getElementById("applyModal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

// Optional: Show alert on submit
document.getElementById("applyForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Application submitted successfully!");
  document.getElementById("applyModal").style.display = "none";
  this.reset();
});
