// Small enhancement: keep the copyright year current.
document.getElementById("year").textContent = new Date().getFullYear();

// Keep only one project note open at a time for a tidy case-study section.
document.querySelectorAll(".project-notes details").forEach((item) => {
  item.addEventListener("toggle", () => {
    if (item.open) {
      document.querySelectorAll(".project-notes details").forEach((other) => {
        if (other !== item) other.open = false;
      });
    }
  });
});
