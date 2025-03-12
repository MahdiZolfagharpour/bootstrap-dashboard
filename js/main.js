document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("themeToggle");
    const htmlElement = document.documentElement;
    const moonIcon = document.getElementById("moonIcon");
    const sunIcon = document.getElementById("sunIcon");


    const savedTheme = localStorage.getItem("theme") || "light";
    htmlElement.setAttribute("data-bs-theme", savedTheme);
    updateIcons(savedTheme);

    themeToggle.addEventListener("click", function () {
        const currentTheme = htmlElement.getAttribute("data-bs-theme");
        const newTheme = currentTheme === "light" ? "dark" : "light";

        htmlElement.setAttribute("data-bs-theme", newTheme);
        localStorage.setItem("theme", newTheme);
        
        updateIcons(newTheme);
    });

    function updateIcons(theme) {
        if (theme === "dark") {
            moonIcon.classList.add("d-none");
            sunIcon.classList.remove("d-none");
        } else {
            sunIcon.classList.add("d-none");
            moonIcon.classList.remove("d-none");
        }
    }
});
