document.addEventListener("DOMContentLoaded", () => {
    const wrapper = document.querySelector(".wrapper");

    wrapper.addEventListener("mouseenter", () => {
        const fireworksContainer = document.querySelector(".fireworks");

        // Generate hearts and flowers
        for (let i = 0; i < 20; i++) {
            const span = document.createElement("span");
            const isFlower = Math.random() > 0.5; // 50% chance for heart or flower
            span.className = isFlower ? "flower" : "heart";
            span.style.setProperty("--x", `${Math.random() * 200 - 100}px`); // Random X position
            span.style.setProperty("--y", `${Math.random() * -200 - 50}px`); // Random Y position
            span.style.left = "50%";
            span.style.top = "50%";

            fireworksContainer.appendChild(span);

            // Remove span after animation
            span.addEventListener("animationend", () => span.remove());
        }
    });
});
