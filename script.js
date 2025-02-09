document.addEventListener("DOMContentLoaded", function() {
    console.log("Page Loaded");

    // Smooth fade-in effect for content
    document.querySelector(".content").style.opacity = "0";
    setTimeout(() => {
        document.querySelector(".content").style.transition = "opacity 1s";
        document.querySelector(".content").style.opacity = "1";
    }, 200);

    // Button hover animation (Optional)
    document.querySelectorAll(".button").forEach(button => {
        button.addEventListener("mouseover", () => {
            button.style.transform = "scale(1.05)";
        });
        button.addEventListener("mouseout", () => {
            button.style.transform = "scale(1)";
        });
    });
});
