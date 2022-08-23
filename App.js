window.addEventListener('load', function () {
    new Glider(document.querySelector('.carousel-lista'), {
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: true,
        dots: '.carousel-indicadores',
        arrows: {
            prev: '.carousel-anterior',
            next: '.carousel-siguiente'
        },
        responsive: [{
            breakpoint: 500,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 650,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        }, {
            breakpoint: 1000,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
            }
        }]
    });
});     


addEventListener('DOMContentLoaded', () => {
    const btn_menu = document.querySelector('.btn_menu')
    if(btn_menu){
        btn_menu.addEventListener('click', () => {
            const menu_items = document.querySelector('.menu_items')
            menu_items.classList.toggle('show')
    })
} })