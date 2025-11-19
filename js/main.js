'use strict';

{



  const menu = document.getElementById('menu');
  const mask = document.getElementById('mask');
  const nav = document.getElementById('nav');
  const btn = document.querySelector(`.menu-btn`);

  menu.addEventListener('click', () => {
    nav.classList.toggle('active');
    mask.classList.toggle('active');
    btn.classList.toggle(`active`);
  });

  mask.addEventListener('click', () => {
    nav.classList.remove('active');
    mask.classList.remove('active');
    btn.classList.remove(`active`);
  });


  const swiper = new Swiper('.slick-area',{
    loop: true,
    autoplay: {
      delay: 10000,
    },
    centeredSlides: true,
    slidesPerView: 3.8,
    spaceBetween: 56,
  });


  const fadeup = document.getElementById(`fade`);

  window.addEventListener('scroll', () => {
    fadeup.classList.add('fade-up');
  });


observer.observe(fadeup);
}
