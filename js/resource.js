document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".folder-row").forEach(folder => {
    folder.addEventListener("click", () => {
      const parent = folder.parentElement;
      const icon = folder.querySelector(".folder-icon");

      parent.classList.toggle("open");

      icon.textContent = parent.classList.contains("open") ? "📂" : "📁";
    });
  });
});
