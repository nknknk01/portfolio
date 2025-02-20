document.addEventListener("DOMContentLoaded", function () {
    let sections = document.querySelectorAll("section");
    
    function fadeInOnScroll() {
        sections.forEach(section => {
            let rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                section.style.opacity = "1";
                section.style.transform = "translateY(0)";
            }
        });
    }

    window.addEventListener("scroll", fadeInOnScroll);
    fadeInOnScroll();
});

document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger");
    const menu = document.getElementById("menu");

    hamburger.addEventListener("click", function () {
        menu.classList.toggle("show");
        hamburger.classList.toggle("active");
    });

    // メニュー項目をクリックするとメニューを閉じる
    document.querySelectorAll(".menu a").forEach(link => {
        link.addEventListener("click", function () {
            menu.classList.remove("show");
            hamburger.classList.remove("active");
        });
    });
});

document.addEventListener("scroll", function () {
    const elements = document.querySelectorAll(".fade-in");
    elements.forEach(element => {
        if (element.getBoundingClientRect().top < window.innerHeight * 0.8) {
            element.classList.add("show");
        }
    });
});

