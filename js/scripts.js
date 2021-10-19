const schemeSvg = document.querySelector('.scheme-svg');
const totalPriceTag = document.querySelector('.price-total');
const menuButton = document.querySelector('.m-menu');
const menu = document.querySelector('.menu');

let totalPrice = 0;
let cost = 100;

schemeSvg.addEventListener('click', (event) => {

    if (!event.target.classList.contains('booked')) {

        event.target.classList.toggle('active');
        let totalSeats = schemeSvg.querySelectorAll('.active').length;
        totalPrice = totalSeats * cost;
        totalPriceTag.textContent = `${totalPrice} ₴`;
    };
});

menuButton.addEventListener('click', () => {
    menu.classList.toggle('is-open')
})