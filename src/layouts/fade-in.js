import inView from 'in-view';

document.addEventListener("DOMContentLoaded", function () {
    inView('.fade-in').on('enter', el => {
        console.log("Element entered viewport:", el); // This should log when an element enters the viewport
        el.classList.add('in-view');
    });
});
