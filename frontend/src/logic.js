// logic.js

export function initDarkMode() {
    document.querySelectorAll(".darkmode-toggle").forEach((element) => {
        element.addEventListener("click", () => {
            // Your dark mode toggle logic
            console.log("Dark mode toggled!");
        });
    });
}

