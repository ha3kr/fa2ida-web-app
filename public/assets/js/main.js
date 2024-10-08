const acc_btns = document.querySelectorAll(".accordion-header");
const acc_contents = document.querySelectorAll(".accordion-body");

if (acc_btns) {
    acc_btns.forEach((btn) => {
        btn.addEventListener("click", (e) => {
        acc_contents.forEach((acc) => {
        if (e.target.nextElementSibling !== acc && acc.classList.contains("active")) {
            acc.classList.remove("active");
            acc_btns.forEach((btn) => btn.classList.remove("active"));
        }
    });
    
        const panel = btn.nextElementSibling;
        panel.classList.toggle("active");
        btn.classList.toggle("active");
    });
    });
    
    window.onclick = (e) => {
        if (!e.target.matches(".accordion-header")) {
            acc_btns.forEach((btn) => btn.classList.remove("active"));
            acc_contents.forEach((acc) => acc.classList.remove("active"));
        }
    };
}

const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('nav-toggle');
const overlay = document.getElementById('overlay');

navToggle.addEventListener('click', () => {
    navbar.style.left = "0px";
    overlay.style.display = "block";
})

overlay.addEventListener('click', () => {
    navbar.style.left = "-999px";
    overlay.style.display = "none";
})