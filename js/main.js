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

  nav.addEventListener('click', () => {
    nav.classList.remove('active');
    mask.classList.remove('active');
    btn.classList.remove(`active`);
  });



  const swiper = new Swiper('.slick-area', {
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
}


{
  function uearcallback(entries, obs) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) { //isIntersecting画面上に入ったら。!entry.isIntersecting画面上に入らなかったら。
        return;
      }
      entry.target.classList.add("wppear");//画面に入っているとき、classList.add("appear")でappearをつける。CSSで反応する。
      obs.unobserve(entry.target);//appearを追加したら、監視を止める。
    });
  }
  const option = {
    threshold: 0.2,    //画面上に20%超えた場合、appearを追加
  };
  const Uearobservers = new IntersectionObserver(uearcallback, option);   //場所取得
  const contents = document.querySelectorAll(".content");  //監視する3つ物取得
  contents.forEach(content => {  //1つ1つバラバラにして
    Uearobservers.observe(content); //observe()でobserverに入ればtargetを監視対象内に
  });
}