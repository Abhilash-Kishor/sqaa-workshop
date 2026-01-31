function loadHTML(id, file) {
  fetch(file)
    .then(res => res.text())
    .then(data => document.getElementById(id).innerHTML = data)
    .catch(err => console.error(`Error loading ${file}`, err));
}

document.addEventListener("DOMContentLoaded", () => {
  loadHTML("header-placeholder", "header.html");
  loadHTML("footer-placeholder", "footer.html");
});

function toggleMenu() {
  document.getElementById("navMenu").classList.toggle("open");
}

/* Agenda Logic */
const agendaFiles = ["Workshop Agenda.pdf", "SQAAF.pdf"];

function toggleAgenda(e) {
  e.stopPropagation();

  const menu = document.getElementById("agendaMenu");

  if (menu.innerHTML === "") {
    agendaFiles.forEach(file => {
      const link = document.createElement("a");

      link.href = "agenda_files/" + file;

      // 🔹 Remove extension for display
      link.textContent = file.replace(/\.[^/.]+$/, "");

      link.target = "_blank";
      menu.appendChild(link);
    });
  }

  menu.style.display =
    menu.style.display === "block" ? "none" : "block";
}

// Close on outside click
document.addEventListener("click", () => {
  document.getElementById("agendaMenu").style.display = "none";
});


(function () {
 
  function setActiveNav() {
    const currentPage = window.location.pathname.split("/").pop() || "index.html";
 
    document.querySelectorAll(".nav-links a").forEach(link => {
      const href = link.getAttribute("href");
 
      if (!href) return;
 
      if (href === currentPage) {
        link.classList.add("active");
      }
    });
 
    // Handle Agenda pages
    if (currentPage.startsWith("agenda")) {
      const agendaLink = document.querySelector(".agenda-link");
      if (agendaLink) agendaLink.classList.add("active");
    }
  }
 
  // Watch DOM until header/nav is injected
  const observer = new MutationObserver(() => {
    if (document.querySelector(".nav-links a")) {
      setActiveNav();
      observer.disconnect(); // stop once done
    }
  });
 
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
 
})();