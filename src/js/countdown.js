window.onload = function () {
    const targetDate = new Date("March 5, 2025 00:00:00").getTime();
    const countdownElem = document.getElementById("countdown");

    const timer = setInterval(() => {
        const now = new Date().getTime();
        const distance = targetDate - now;
        if (distance <= 0) {
            clearInterval(timer);
            countdownElem.textContent = "Time's up!";
            return;
        }
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((distance / (1000 * 60)) % 60);
        const seconds = Math.floor((distance / 1000) % 60);
        countdownElem.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }, 1000);
};
