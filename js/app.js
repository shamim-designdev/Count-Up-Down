document.addEventListener('DOMContentLoaded', function() {
    // Counter Animation
    const counters = document.querySelectorAll('.counting');
    const duration = 10000; // Duration in milliseconds for the animation (10 seconds)

    counters.forEach(counter => {
        const countTo = parseInt(counter.getAttribute('data-count'), 10);
        const increment = countTo / (duration / 100);
        let count = 0;

        function updateCounter(timestamp) {
            if (count < countTo) {
                count += increment;
                counter.textContent = Math.min(Math.floor(count), countTo);
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = countTo;
            }
        }

        requestAnimationFrame(updateCounter);
    });

    // Countdown Timer
    const endDate = new Date().getTime() + (2 * 24 * 60 * 60 * 1000) + (12 * 60 * 60 * 1000); // 2 days and 12 hours from now

    function updateCountdown() {
        const now = new Date().getTime();
        const timeLeft = endDate - now;

        if (timeLeft <= 0) {
            document.getElementById('countdown').innerHTML = 'Offer Ended';
            return;
        }

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById('days').textContent = days.toString().padStart(2, '0');
        document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
        document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
    }

    // Update the countdown every second
    setInterval(updateCountdown, 1000);
    // Initial call to display the countdown immediately
    updateCountdown();
});
