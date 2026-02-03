const targetDate = new Date('February 14, 2024 00:00:00').getTime(); // Update year as needed
const countdownEl = document.getElementById('countdown');
const revealBtn = document.getElementById('revealBtn');
const surpriseEl = document.getElementById('surprise');

function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance <= 0) {
        countdownEl.innerHTML = "It's Valentine's Day!";
        revealBtn.style.display = 'block';
    } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        countdownEl.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s until Valentine's Day`;
    }
}

revealBtn.addEventListener('click', () => {
    surpriseEl.style.display = 'block';
    revealBtn.style.display = 'none';
    // Optional: Play a sound or trigger confetti
    // const audio = new Audio('surprise.mp3'); audio.play();
});

setInterval(updateCountdown, 1000);
updateCountdown();