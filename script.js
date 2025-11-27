// =======================
// CLOCK
// =======================
function updateClock() {
  const now = new Date();
  const options = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
  const timeString = now.toLocaleTimeString("id-ID", options);
  document.querySelector(".navbar__location p").textContent = timeString;
}
setInterval(updateClock, 1000);
updateClock();


// =======================
// REVEAL ELEMENTS ON SCROLL
// =======================
const reveals = document.querySelectorAll('.project-card, .skills__info, .career, .contact');

window.addEventListener('scroll', () => {
  const triggerBottom = window.innerHeight * 0.85;
  reveals.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < triggerBottom) {
      el.classList.add("show");
    }
  });
});


// =======================
// TYPING EFFECT
// =======================
const teks = "Hallo saya haidar fajar saputra";
let i = 0;

function ketik() {
  if (i < teks.length) {
    document.getElementById("typing").innerHTML += teks.charAt(i);
    i++;
    setTimeout(ketik, 150); 
  }
}
ketik();


// =======================
// SMOOTH SCROLL (1x saja)
// =======================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});


// =======================
// ACTIVE NAVIGATION ON SCROLL
// =======================
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".navbar__link");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});


// =======================
// STICKY NAVBAR
// =======================
window.addEventListener("scroll", function() {
  const navbar = document.querySelector(".navbar");
  navbar.classList.toggle("sticky", window.scrollY > 0);
});


const form = document.querySelector(".contact-form");
const statusMsg = document.getElementById("status-message");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  statusMsg.textContent = "Mengirim...";
  statusMsg.style.color = "#fff";

  const formData = new FormData(form);

  try {
    const res = await fetch(form.action, {
      method: "POST",
      body: formData
    });

    if (res.ok) {
      statusMsg.textContent = "Pesan berhasil dikirim!";
      form.reset();
    } else {
      statusMsg.textContent = "Gagal mengirim pesan!";
      statusMsg.style.color = "red";
    }
  } catch (err) {
    statusMsg.textContent = "Terjadi kesalahan!";
    statusMsg.style.color = "red";
  }
});


