// JavaScript to generate stars
document.addEventListener("DOMContentLoaded", function () {
    const starCount = 100; // Number of stars
    const body = document.body;

    for (let i = 0; i < starCount; i++) {
        const star = document.createElement("div");
        star.classList.add("star");

        // Randomize star position and animation duration
        star.style.left = `${Math.random() * 100}vw`;
        star.style.top = `${Math.random() * 100}vh`;
        star.style.animationDuration = `${5 + Math.random() * 15}s`;

        body.appendChild(star);
    }
});

