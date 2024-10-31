import inView from './in-view';

document.addEventListener("DOMContentLoaded", function () {
    inView('.fade-in').on('enter', el => {
        console.log("Element entered viewport:", el); 
        el.classList.add('in-view');
    });
});
