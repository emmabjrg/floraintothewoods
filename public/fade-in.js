import inView from 'https://cdn.jsdelivr.net/npm/in-view@0.6.1/dist/in-view.min.js';

document.addEventListener("DOMContentLoaded", function () {
    inView('.fade-in').on('enter', el => {
        console.log("Element entered viewport:", el); 
        el.classList.add('in-view');
    });
});
