document.addEventListener("DOMContentLoaded", function () {
    // Use a delay to re-check for `inView` availability after scripts are loaded
    const checkInView = setInterval(() => {
        if (typeof inView !== "undefined") {
            clearInterval(checkInView);
            console.log("inView loaded successfully");

            // Now that inView is available, use it
            inView('.fade-in').on('enter', el => {
                console.log("Element entered viewport:", el);
                el.classList.add('in-view');
            });
        } else {
            console.warn("Waiting for inView to load...");
        }
    }, 100); // Check every 100ms
});
